import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductsSection from "@/components/ProductsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <ProductsSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
