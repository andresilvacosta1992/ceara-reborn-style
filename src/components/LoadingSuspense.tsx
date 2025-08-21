import { LoadingState } from '@/components/ui/loading-state';

export const PageLoadingFallback = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-8">
      <LoadingState type="hero" count={1} className="mb-8" />
      <LoadingState type="card" count={3} className="grid grid-cols-1 md:grid-cols-3 gap-6" />
    </div>
  </div>
);

export const ComponentLoadingFallback = () => (
  <div className="w-full">
    <LoadingState type="card" count={1} />
  </div>
);