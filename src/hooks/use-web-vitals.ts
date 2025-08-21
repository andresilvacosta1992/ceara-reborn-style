import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Web Vitals thresholds
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 }
};

function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

function sendToAnalytics(metric: WebVitalsMetric) {
  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.value,
      metric_rating: metric.rating,
      custom_parameter_1: metric.rating
    });
  }

  // Send to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}: ${metric.value} (${metric.rating})`);
  }
}

export const useWebVitals = () => {
  useEffect(() => {
    // Try to import web-vitals dynamically
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      const handleMetric = (metric: any) => {
        const webVitalMetric: WebVitalsMetric = {
          name: metric.name,
          value: metric.value,
          id: metric.id,
          rating: getRating(metric.name, metric.value)
        };
        sendToAnalytics(webVitalMetric);
      };

      // Monitor all Core Web Vitals (FID deprecated in web-vitals v4)
      onCLS(handleMetric);
      onFCP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
      onINP?.(handleMetric); // INP might not be available in all versions
    }).catch(() => {
      // Fallback manual implementation
      manualWebVitalsTracking();
    });
  }, []);
};

// Fallback manual tracking
function manualWebVitalsTracking() {
  // LCP tracking
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as any;
    
    if (lastEntry) {
      const metric: WebVitalsMetric = {
        name: 'LCP',
        value: lastEntry.startTime,
        id: `${Date.now()}-${Math.random()}`,
        rating: getRating('LCP', lastEntry.startTime)
      };
      sendToAnalytics(metric);
    }
  });

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // LCP not supported
  }

  // CLS tracking
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as any[]) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    }
  });

  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    
    // Send CLS on page unload
    window.addEventListener('beforeunload', () => {
      const metric: WebVitalsMetric = {
        name: 'CLS',
        value: clsValue,
        id: `${Date.now()}-${Math.random()}`,
        rating: getRating('CLS', clsValue)
      };
      sendToAnalytics(metric);
    });
  } catch (e) {
    // CLS not supported
  }

  // FCP tracking
  const fcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
    
    if (fcpEntry) {
      const metric: WebVitalsMetric = {
        name: 'FCP',
        value: fcpEntry.startTime,
        id: `${Date.now()}-${Math.random()}`,
        rating: getRating('FCP', fcpEntry.startTime)
      };
      sendToAnalytics(metric);
    }
  });

  try {
    fcpObserver.observe({ entryTypes: ['paint'] });
  } catch (e) {
    // FCP not supported
  }
}

// Hook for component-level performance monitoring
export const useComponentPerformance = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const duration = performance.now() - startTime;
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'component_mount_time', {
          component_name: componentName,
          duration: Math.round(duration)
        });
      }
    };
  }, [componentName]);
};