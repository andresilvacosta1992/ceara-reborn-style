import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { ArrowUp } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const EnhancedLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingActionButton
        fabType="custom"
        position="bottom-right"
        onClick={() => window.open("https://wa.me/5511945403008", "_blank")}
        className="bg-green-600 hover:bg-green-700"
      >
        <BsWhatsapp className="w-6 h-6" />
      </FloatingActionButton>
      
      {showScrollTop && (
        <FloatingActionButton
          fabType="scroll"
          position="bottom-right"
          offset="normal"
          onClick={scrollToTop}
          className="bg-primary hover:bg-primary/90 bottom-24"
        />
      )}
    </div>
  );
};

export default EnhancedLayout;