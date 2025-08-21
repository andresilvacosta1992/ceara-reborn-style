import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useWebVitals } from './hooks/use-web-vitals'

// Initialize Web Vitals monitoring
const WebVitalsMonitor = () => {
  useWebVitals();
  return null;
};

// Register service worker for performance
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <WebVitalsMonitor />
    <App />
  </>
);
