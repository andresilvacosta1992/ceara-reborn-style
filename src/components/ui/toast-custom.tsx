import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function CustomToaster() {
  const { toasts } = useToast();

  const getIcon = (variant?: string) => {
    switch (variant) {
      case "default":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "destructive":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        return (
          <Toast
            key={id}
            className={cn(
              "bg-background border-border shadow-lg",
              "data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full",
              "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full",
              variant === "default" && "border-green-200 bg-green-50",
              variant === "destructive" && "border-red-200 bg-red-50"
            )}
            {...props}
          >
            <div className="flex items-start gap-3">
              {getIcon(variant)}
              <div className="grid gap-1 flex-1">
                {title && (
                  <div className="text-sm font-semibold text-foreground">
                    {title}
                  </div>
                )}
                {description && (
                  <div className="text-sm text-muted-foreground">
                    {description}
                  </div>
                )}
              </div>
              {action}
            </div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}