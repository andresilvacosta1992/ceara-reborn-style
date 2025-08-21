import HeroCarousel from "@/components/HeroCarousel";
import ProductsSection from "@/components/ProductsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <ProductsSection />
      <AdvantagesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
