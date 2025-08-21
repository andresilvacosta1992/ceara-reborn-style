import { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

export const usePerformance = (componentName: string) => {
  const startTime = useRef<number>(performance.now());
  const metrics = useRef<Partial<PerformanceMetrics>>({});

  useEffect(() => {
    // Component mounted - calculate load time
    metrics.current.loadTime = performance.now() - startTime.current;

    // Report to analytics if available
    if (typeof window !== 'undefined' && window.gtag && metrics.current.loadTime > 0) {
      window.gtag('event', 'component_load_time', {
        component_name: componentName,
        load_time: Math.round(metrics.current.loadTime)
      });
    }

    return () => {
      // Component unmounting - clean up
      metrics.current = {};
    };
  }, [componentName]);

  const measureInteraction = useCallback((interactionName: string) => {
    const interactionStart = performance.now();
    
    return () => {
      const interactionTime = performance.now() - interactionStart;
      
      if (typeof window !== 'undefined' && window.gtag && interactionTime > 0) {
        window.gtag('event', 'interaction_time', {
          component_name: componentName,
          interaction_name: interactionName,
          interaction_time: Math.round(interactionTime)
        });
      }
    };
  }, [componentName]);

  const markRenderStart = useCallback(() => {
    metrics.current.renderTime = performance.now();
  }, []);

  const markRenderEnd = useCallback(() => {
    if (metrics.current.renderTime) {
      const renderTime = performance.now() - metrics.current.renderTime;
      
      if (typeof window !== 'undefined' && window.gtag && renderTime > 0) {
        window.gtag('event', 'render_time', {
          component_name: componentName,
          render_time: Math.round(renderTime)
        });
      }
    }
  }, [componentName]);

  return {
    measureInteraction,
    markRenderStart,
    markRenderEnd,
    metrics: metrics.current
  };
};

// Global performance monitoring hook
export const useWebVitals = () => {
  useEffect(() => {
    // Monitor Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (typeof window !== 'undefined' && window.gtag && lastEntry.startTime > 0) {
        window.gtag('event', 'lcp', {
          value: Math.round(lastEntry.startTime)
        });
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    return () => observer.disconnect();
  }, []);
};

// Memory usage monitoring
export const useMemoryMonitoring = () => {
  useEffect(() => {
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'memory_usage', {
            used_heap: Math.round(memory.usedJSHeapSize / 1024 / 1024),
            total_heap: Math.round(memory.totalJSHeapSize / 1024 / 1024)
          });
        }
      }
    };

    // Check memory usage every 30 seconds
    const interval = setInterval(checkMemory, 30000);
    checkMemory(); // Initial check

    return () => clearInterval(interval);
  }, []);
};