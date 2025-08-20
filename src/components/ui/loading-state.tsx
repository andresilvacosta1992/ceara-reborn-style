import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface LoadingStateProps {
  type?: "card" | "list" | "hero" | "button";
  count?: number;
  className?: string;
}

export const LoadingState = ({ type = "card", count = 1, className }: LoadingStateProps) => {
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return (
          <Card className={className}>
            <CardHeader>
              <Skeleton className="h-48 w-full" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-10 w-full mt-4" />
            </CardContent>
          </Card>
        );
      
      case "list":
        return (
          <div className={`space-y-4 ${className}`}>
            <Skeleton className="h-8 w-1/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        );
      
      case "hero":
        return (
          <div className={`space-y-6 ${className}`}>
            <Skeleton className="h-16 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
            <div className="flex justify-center space-x-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        );
      
      case "button":
        return <Skeleton className={`h-10 w-32 ${className}`} />;
      
      default:
        return <Skeleton className={className} />;
    }
  };

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="animate-pulse">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};