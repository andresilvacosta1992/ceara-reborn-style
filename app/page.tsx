import HeroCarousel from "@/components/HeroCarousel"
import ProductsSection from "@/components/ProductsSection"
import AdvantagesSection from "@/components/AdvantagesSection"
import ContactSection from "@/components/ContactSection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <ProductsSection />
      <AdvantagesSection />
      <ContactSection />
    </div>
  )
}