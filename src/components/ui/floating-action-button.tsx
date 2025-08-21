import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

interface FABProps extends Omit<ButtonProps, "variant" | "size" | "type"> {
  fabType?: "chat" | "phone" | "scroll" | "custom";
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  offset?: "normal" | "large";
}

const getPositionClasses = (position: string, offset: string) => {
  const offsetValue = offset === "large" ? "8" : "4";
  
  switch (position) {
    case "bottom-right":
      return `bottom-${offsetValue} right-${offsetValue}`;
    case "bottom-left":
      return `bottom-${offsetValue} left-${offsetValue}`;
    case "top-right":
      return `top-${offsetValue} right-${offsetValue}`;
    case "top-left":
      return `top-${offsetValue} left-${offsetValue}`;
    default:
      return `bottom-${offsetValue} right-${offsetValue}`;
  }
};

const getIcon = (fabType: string) => {
  switch (fabType) {
    case "chat":
      return <MessageCircle className="w-6 h-6" />;
    case "phone":
      return <Phone className="w-6 h-6" />;
    case "scroll":
      return <ArrowUp className="w-6 h-6" />;
    default:
      return null;
  }
};

export const FloatingActionButton = ({ 
  fabType = "chat", 
  position = "bottom-right", 
  offset = "normal",
  className, 
  children,
  ...props 
}: FABProps) => {
  return (
    <Button
      variant="floating"
      size="fab"
      className={cn(
        "fixed z-50 shadow-2xl hover:shadow-3xl transition-all duration-300",
        getPositionClasses(position, offset),
        className
      )}
      {...props}
    >
      {children || getIcon(fabType)}
    </Button>
  );
};