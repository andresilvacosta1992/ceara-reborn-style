import React, { useState, useRef, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  quality?: 'low' | 'medium' | 'high';
  sizes?: string;
  blurDataURL?: string;
  priority?: boolean;
}

// Generate blur placeholder from image
const generateBlurDataURL = (width: number = 10, height: number = 10): string => {
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
  return canvas.toDataURL();
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  lazy = true,
  quality = 'medium',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  blurDataURL,
  priority = false,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const loadStartTime = useRef<number>(0);

  // Memoize blur placeholder
  const defaultBlurDataURL = useMemo(() => 
    blurDataURL || generateBlurDataURL(), [blurDataURL]
  );

  useEffect(() => {
    if (!lazy || priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          loadStartTime.current = performance.now();
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Increased margin for better UX
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    const loadTime = performance.now() - loadStartTime.current;
    setIsLoaded(true);
    
    // Analytics for performance monitoring (optional)
    if (loadTime > 0 && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'image_load_time', {
        custom_parameter: Math.round(loadTime)
      });
    }
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const getOptimizedSrc = (src: string) => {
    // Para imagens do Lovable uploads, mantém o original
    if (src.includes('lovable-uploads')) {
      return src;
    }
    
    // Para outras imagens, pode implementar lógica de redimensionamento
    return src;
  };

  return (
    <div 
      className={cn('relative overflow-hidden', className)}
      ref={imgRef}
      style={{
        ...style,
        background: !isLoaded ? `url(${defaultBlurDataURL})` : 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Loading skeleton with blur effect */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted/60 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Imagem não encontrada</div>
          </div>
        </div>
      )}
      
      {/* Main image */}
      {isInView && !hasError && (
        <img
          src={getOptimizedSrc(src)}
          alt={alt}
          loading={lazy && !priority ? 'lazy' : 'eager'}
          decoding="async"
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-all duration-500 ease-out gpu-accelerated',
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          )}
          style={{
            transform: 'translate3d(0, 0, 0)', // Hardware acceleration
            willChange: isLoaded ? 'auto' : 'transform, opacity',
            ...style
          }}
          {...props}
        />
      )}
    </div>
  );
};