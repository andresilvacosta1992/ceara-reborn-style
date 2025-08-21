import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CriticalImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Generate a simple blur data URL
const generateBlurDataURL = (width: number = 40, height: number = 40): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(1, '#e5e7eb');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  return canvas.toDataURL('image/jpeg', 0.1);
};

const CriticalImage: React.FC<CriticalImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const loadStartTime = useRef<number>(0);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Generate optimized src with quality and format detection
  const getOptimizedSrc = (originalSrc: string): string => {
    // In a real implementation, you might use a service like Cloudinary or similar
    // For now, we'll just return the original src
    return originalSrc;
  };

  // Generate responsive srcSet
  const generateSrcSet = (baseSrc: string): string => {
    if (!width) return '';
    
    const breakpoints = [0.5, 1, 1.5, 2];
    return breakpoints
      .map(multiplier => {
        const scaledWidth = Math.round(width * multiplier);
        return `${getOptimizedSrc(baseSrc)} ${scaledWidth}w`;
      })
      .join(', ');
  };

  const handleLoad = () => {
    const loadTime = performance.now() - loadStartTime.current;
    setIsLoaded(true);
    onLoad?.();

    // Track image load performance
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'image_load_time', {
        image_src: src,
        load_time: Math.round(loadTime),
        is_critical: priority
      });
    }
  };

  const handleError = () => {
    setHasError(true);
    onError?.();

    // Track image load errors
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'image_load_error', {
        image_src: src,
        is_critical: priority
      });
    }
  };

  const handleLoadStart = () => {
    loadStartTime.current = performance.now();
  };

  // Don't render image until in view (unless priority)
  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={cn(
          'lazy-placeholder',
          className
        )}
        style={{ 
          width: width ? `${width}px` : '100%', 
          height: height ? `${height}px` : 'auto',
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
        {...props}
      />
    );
  }

  // Error state
  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          className
        )}
        style={{ 
          width: width ? `${width}px` : '100%', 
          height: height ? `${height}px` : 'auto',
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  const defaultBlurDataURL = blurDataURL || generateBlurDataURL(width, height);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Blur placeholder while loading */}
      {!isLoaded && placeholder === 'blur' && (
        <img
          src={defaultBlurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 transition-opacity duration-300"
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={getOptimizedSrc(src)}
        srcSet={generateSrcSet(src)}
        sizes={sizes || (width ? `${width}px` : '100vw')}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={handleLoad}
        onError={handleError}
        onLoadStart={handleLoadStart}
        className={cn(
          'optimized-image transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
        {...props}
      />

      {/* Loading skeleton */}
      {!isLoaded && placeholder === 'empty' && (
        <div
          className="absolute inset-0 skeleton"
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      )}
    </div>
  );
};

export default CriticalImage;