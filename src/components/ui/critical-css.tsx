import { useEffect } from 'react';

// Critical CSS for above-the-fold content
const CRITICAL_CSS = `
  /* Critical path CSS - inline for performance */
  .hero-critical {
    background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  
  .hero-content-critical {
    text-align: center;
    z-index: 10;
    max-width: 1200px;
    padding: 0 1rem;
  }
  
  .hero-title-critical {
    font-size: clamp(2rem, 4vw, 4rem);
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    line-height: 1.1;
    font-family: 'Playfair Display', serif;
  }
  
  .hero-subtitle-critical {
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
  }
  
  .hero-cta-critical {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #059669;
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);
  }
  
  .hero-cta-critical:hover {
    background: #047857;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(5, 150, 105, 0.4);
  }
  
  .loading-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  /* Critical font loading */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

interface CriticalCSSProps {
  children?: React.ReactNode;
}

export const CriticalCSS: React.FC<CriticalCSSProps> = ({ children }) => {
  useEffect(() => {
    // Inject critical CSS immediately
    const style = document.createElement('style');
    style.textContent = CRITICAL_CSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);

    // Clean up on unmount
    return () => {
      const criticalStyles = document.querySelectorAll('[data-critical="true"]');
      criticalStyles.forEach(el => el.remove());
    };
  }, []);

  return <>{children}</>;
};

// Hook for managing critical resource loading
export const useCriticalResources = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/src/assets/hero-cables.jpg',
      '/lovable-uploads/2be4463d-78ac-47bd-8d07-3dbde9601d00.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Prefetch non-critical resources
    const prefetchResources = [
      '/src/assets/products/eletrocalhas.jpg',
      '/src/assets/products/perfilados.jpg',
      '/src/assets/products/leitos-cabos.jpg'
    ];

    // Add prefetch after critical resources load
    setTimeout(() => {
      prefetchResources.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = src;
        document.head.appendChild(link);
      });
    }, 1000);
  }, []);
};