import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface VirtualGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemHeight: number;
  containerHeight: number;
  columns: number;
  gap?: number;
  overscan?: number;
  className?: string;
}

export function VirtualGrid<T>({
  items,
  renderItem,
  itemHeight,
  containerHeight,
  columns,
  gap = 16,
  overscan = 5,
  className = ''
}: VirtualGridProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false
  });

  // Calculate grid metrics
  const rowHeight = itemHeight + gap;
  const totalRows = Math.ceil(items.length / columns);
  const totalHeight = totalRows * rowHeight - gap;

  // Calculate visible range with overscan
  const visibleStartRow = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const visibleEndRow = Math.min(
    totalRows - 1,
    Math.ceil((scrollTop + containerHeight) / rowHeight) + overscan
  );

  // Get visible items
  const visibleItems = useMemo(() => {
    const startIndex = visibleStartRow * columns;
    const endIndex = Math.min((visibleEndRow + 1) * columns, items.length);
    
    return items.slice(startIndex, endIndex).map((item, index) => ({
      item,
      originalIndex: startIndex + index,
      row: Math.floor((startIndex + index) / columns),
      col: (startIndex + index) % columns
    }));
  }, [items, visibleStartRow, visibleEndRow, columns]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  // Pause rendering when not in view for performance
  if (!isIntersecting) {
    return (
      <div 
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={`${className} h-64 bg-muted animate-pulse flex items-center justify-center`}
      >
        <div className="text-muted-foreground">Carregando produtos...</div>
      </div>
    );
  }

  return (
    <div 
      ref={(el) => {
        (elementRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        containerRef.current = el;
      }}
      className={`${className} overflow-auto`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      {/* Virtual container with full height */}
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map(({ item, originalIndex, row, col }) => (
          <div
            key={originalIndex}
            className="absolute"
            style={{
              top: row * rowHeight,
              left: col * (100 / columns) + '%',
              width: `calc(${100 / columns}% - ${gap * (columns - 1) / columns}px)`,
              height: itemHeight,
              transform: 'translate3d(0, 0, 0)', // Hardware acceleration
            }}
          >
            {renderItem(item, originalIndex)}
          </div>
        ))}
      </div>
    </div>
  );
}

// Hook for calculating optimal virtual grid settings
export const useVirtualGridSettings = (
  itemCount: number,
  containerWidth: number
) => {
  const [settings, setSettings] = useState({
    columns: 1,
    itemHeight: 300,
    containerHeight: 600
  });

  useEffect(() => {
    // Calculate optimal columns based on container width
    let columns = 1;
    if (containerWidth >= 1200) columns = 4;
    else if (containerWidth >= 768) columns = 3;
    else if (containerWidth >= 640) columns = 2;

    // Calculate container height (show ~2.5 rows)
    const containerHeight = Math.min(800, Math.ceil(2.5 * 320));

    setSettings({
      columns,
      itemHeight: 300,
      containerHeight
    });
  }, [containerWidth, itemCount]);

  return settings;
};