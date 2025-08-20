import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  quality?: 'low' | 'medium' | 'high';
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  lazy = true,
  quality = 'medium',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const getOptimizedSrc = (src: string, width?: number) => {
    // Para imagens do Lovable uploads, mantém o original
    if (src.includes('lovable-uploads')) {
      return src;
    }
    
    // Para outras imagens, pode implementar lógica de redimensionamento
    return src;
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Placeholder/skeleton durante o carregamento */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      <img
        ref={imgRef}
        src={isInView ? getOptimizedSrc(src) : undefined}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        sizes={sizes}
        onLoad={handleLoad}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...props}
      />
    </div>
  );
};