import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
// WebP support detection
const supportsWebP = (() => {
  if (typeof window === 'undefined') return false;
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
})();

const slideImages = {
  equipe: {
    webp: "/lovable-uploads/ced4324b-f963-4099-9700-78b7974a7c3b.webp",
    fallback: "/lovable-uploads/ced4324b-f963-4099-9700-78b7974a7c3b.png"
  },
  paineis: {
    webp: "/lovable-uploads/1ca9b540-c06e-456f-b772-296dd218750e.webp",
    fallback: "/lovable-uploads/1ca9b540-c06e-456f-b772-296dd218750e.png"
  },
  corredor: {
    webp: "/lovable-uploads/ea1a0a40-7949-49e6-af36-7a53d7b9399f.webp",
    fallback: "/lovable-uploads/ea1a0a40-7949-49e6-af36-7a53d7b9399f.png"
  },
  perfilados: {
    webp: "/lovable-uploads/4c18daa1-0b84-41e3-ab54-8a5a9c46cff2.webp",
    fallback: "/lovable-uploads/4c18daa1-0b84-41e3-ab54-8a5a9c46cff2.png"
  },
  cabos: {
    webp: "/lovable-uploads/58d6c2c6-934b-42e4-9a5e-dd5604b17556.webp",
    fallback: "/lovable-uploads/58d6c2c6-934b-42e4-9a5e-dd5604b17556.png"
  }
};

// Get optimal image source
const getImageSrc = (imageKey: keyof typeof slideImages) => {
  const imageSet = slideImages[imageKey];
  return supportsWebP ? imageSet.webp : imageSet.fallback;
};

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const slides = [
    {
      id: 1,
      title: "GESTÃO DE CABOS",
      subtitle: "soluções completas para cabeamento",
      description: "Eletrocalhas, leitos para cabos e eletrodutos com a máxima qualidade",
      categories: ["Eletrocalhas", "Leitos para cabos", "Eletrodutos"],
      image: getImageSrc('cabos'),
      primaryBtn: "SOLICITAR ORÇAMENTO",
      secondaryBtn: "VER PRODUTOS"
    },
    {
      id: 2,
      title: "ESTRUTURAS & FIXAÇÃO",
      subtitle: "sistemas robustos de suporte",
      description: "Perfilados, acessórios para fixação e abraçadeiras para suas instalações",
      categories: ["Perfilados", "Acessórios para fixação", "Abraçadeiras"],
      image: getImageSrc('perfilados'),
      primaryBtn: "CONSULTAR PREÇOS",
      secondaryBtn: "CATÁLOGO"
    },
    {
      id: 3,
      title: "SOLUÇÕES AVANÇADAS",
      subtitle: "painéis e sistemas elétricos",
      description: "Quadros de comandos e sistemas elétricos com tecnologia de ponta",
      categories: ["Quadros de comandos", "Painéis elétricos", "Sistemas de proteção"],
      image: getImageSrc('paineis'),
      primaryBtn: "VER MODELOS",
      secondaryBtn: "ESPECIFICAÇÕES"
    },
    {
      id: 4,
      title: "ACABAMENTOS PROFISSIONAIS",
      subtitle: "infraestrutura discreta e elegante",
      description: "Dutos de piso e sistemas de acabamento para projetos especiais",
      categories: ["Dutos de piso", "Rodapés Metálicos", "Acabamentos"],
      image: getImageSrc('corredor'),
      primaryBtn: "PROJETOS ESPECIAIS",
      secondaryBtn: "CONTATO"
    },
    {
      id: 5,
      title: "EQUIPE ESPECIALIZADA",
      subtitle: "qualidade, agilidade e confiança",
      description: "Profissionais qualificados para projetos de infraestrutura elétrica",
      categories: ["Consultoria Técnica", "Suporte Especializado", "Projetos Customizados"],
      image: getImageSrc('equipe'),
      primaryBtn: "FALE CONOSCO",
      secondaryBtn: "SOBRE NÓS"
    }
  ];

  // Preload images for smooth transitions
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = slide.image;
        });
      });
      
      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, [slides]);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 100);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length, imagesLoaded]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 100);
  }, [slides.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 100);
  }, [slides.length, isTransitioning]);

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div 
        className={`absolute inset-0 bg-cover bg-center slide-image ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}
        style={{ 
          backgroundImage: `url(${currentSlideData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isTransitioning ? 'scale(1.02)' : 'scale(1)'
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Lightning Icon */}
            <div className="mb-6">
              <Zap className="w-16 h-16 mx-auto text-accent animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-quality-lg font-playfair">
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-6 opacity-90 italic text-quality-md font-inter">
              {currentSlideData.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80 text-quality font-inter leading-relaxed">
              {currentSlideData.description}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {currentSlideData.categories.map((category, index) => (
                <span
                  key={index}
                  className="category-tag text-quality font-inter"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="btn-ceara text-lg px-8 py-4 font-inter text-quality">
                {currentSlideData.primaryBtn}
              </Button>
              <Button className="btn-ceara-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900 font-inter text-quality">
                {currentSlideData.secondaryBtn}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-ceara"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-ceara"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-ceara ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;