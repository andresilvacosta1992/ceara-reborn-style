import React, { useEffect, useState } from 'react';
import { usePerformance, useMemoryMonitoring } from '@/hooks/use-performance';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  componentName?: string;
  enableMemoryMonitoring?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  children,
  componentName = 'App',
  enableMemoryMonitoring = false,
}) => {
  const { measureInteraction, markRenderStart, markRenderEnd } = usePerformance(componentName);
  const [renderCount, setRenderCount] = useState(0);

  // Enable memory monitoring if requested
  if (enableMemoryMonitoring) {
    useMemoryMonitoring();
  }

  useEffect(() => {
    markRenderStart();
    setRenderCount(prev => prev + 1);
    
    // Measure render end on next tick
    const timeoutId = setTimeout(() => {
      markRenderEnd();
    }, 0);

    return () => clearTimeout(timeoutId);
  });

  // Monitor excessive re-renders
  useEffect(() => {
    if (renderCount > 10 && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'excessive_renders', {
        component_name: componentName,
        render_count: renderCount
      });
    }
  }, [renderCount, componentName]);

  return <>{children}</>;
};

// Performance metrics display (development only)
export const PerformanceMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<{
    memory?: { used: number; total: number };
    timing?: PerformanceTiming;
  }>({});

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const updateMetrics = () => {
      const newMetrics: typeof metrics = {};

      // Memory information
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memory = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024)
        };
      }

      // Performance timing
      newMetrics.timing = performance.timing;

      setMetrics(newMetrics);
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed top-0 right-0 bg-black/80 text-white p-2 text-xs z-50 font-mono">
      <div>Performance Monitor</div>
      {metrics.memory && (
        <div>Memory: {metrics.memory.used}MB / {metrics.memory.total}MB</div>
      )}
      {metrics.timing && (
        <div>
          Load: {metrics.timing.loadEventEnd - metrics.timing.navigationStart}ms
        </div>
      )}
    </div>
  );
};