import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { usePerformance, useWebVitals } from "@/hooks/use-performance";

const slideImages = {
  equipe: "/lovable-uploads/ced4324b-f963-4099-9700-78b7974a7c3b.png",
  paineis: "/lovable-uploads/1ca9b540-c06e-456f-b772-296dd218750e.png", 
  corredor: "/lovable-uploads/ea1a0a40-7949-49e6-af36-7a53d7b9399f.png",
  perfilados: "/lovable-uploads/4c18daa1-0b84-41e3-ab54-8a5a9c46cff2.png",
  cabos: "/lovable-uploads/58d6c2c6-934b-42e4-9a5e-dd5604b17556.png"
};

const HeroCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(5).fill(false));
  const { measureInteraction } = usePerformance('HeroCarousel');
  
  // Initialize web vitals monitoring
  useWebVitals();
  
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30,
      startIndex: 0
    },
    [autoplay.current]
  );

  // Memoized slides data for performance
  const slides = useMemo(() => [
    {
      id: 1,
      title: "GESTÃO DE CABOS",
      subtitle: "soluções completas para cabeamento",
      description: "Eletrocalhas, leitos para cabos e eletrodutos com a máxima qualidade",
      categories: ["Eletrocalhas", "Leitos para cabos", "Eletrodutos"],
      image: slideImages.cabos,
      primaryBtn: "SOLICITAR ORÇAMENTO",
      secondaryBtn: "VER PRODUTOS"
    },
    {
      id: 2,
      title: "ESTRUTURAS & FIXAÇÃO",
      subtitle: "sistemas robustos de suporte",
      description: "Perfilados, acessórios para fixação e abraçadeiras para suas instalações",
      categories: ["Perfilados", "Acessórios para fixação", "Abraçadeiras"],
      image: slideImages.perfilados,
      primaryBtn: "CONSULTAR PREÇOS",
      secondaryBtn: "CATÁLOGO"
    },
    {
      id: 3,
      title: "SOLUÇÕES AVANÇADAS",
      subtitle: "painéis e sistemas elétricos",
      description: "Quadros de comandos e sistemas elétricos com tecnologia de ponta",
      categories: ["Quadros de comandos", "Painéis elétricos", "Sistemas de proteção"],
      image: slideImages.paineis,
      primaryBtn: "VER MODELOS",
      secondaryBtn: "ESPECIFICAÇÕES"
    },
    {
      id: 4,
      title: "ACABAMENTOS PROFISSIONAIS",
      subtitle: "infraestrutura discreta e elegante",
      description: "Dutos de piso e sistemas de acabamento para projetos especiais",
      categories: ["Dutos de piso", "Rodapés Metálicos", "Acabamentos"],
      image: slideImages.corredor,
      primaryBtn: "PROJETOS ESPECIAIS",
      secondaryBtn: "CONTATO"
    },
    {
      id: 5,
      title: "EQUIPE ESPECIALIZADA",
      subtitle: "qualidade, agilidade e confiança",
      description: "Profissionais qualificados para projetos de infraestrutura elétrica",
      categories: ["Consultoria Técnica", "Suporte Especializado", "Projetos Customizados"],
      image: slideImages.equipe,
      primaryBtn: "FALE CONOSCO",
      secondaryBtn: "SOBRE NÓS"
    }
  ], []);

  // Intelligent image preloading with performance tracking
  useEffect(() => {
    const preloadImages = async () => {
      const measurePreload = measureInteraction('image_preload');
      
      const loadImage = (src: string, index: number) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            resolve();
          };
          img.onerror = () => resolve(); // Continue even if image fails
          img.src = src;
        });
      };

      // Load first image immediately (priority)
      await loadImage(slides[0].image, 0);
      
      // Load remaining images with optimized timing
      const remainingSlides = slides.slice(1);
      for (let i = 0; i < remainingSlides.length; i++) {
        setTimeout(() => {
          loadImage(remainingSlides[i].image, i + 1);
        }, i * 150); // Staggered loading
      }
      
      measurePreload(); // End performance measurement
    };

    preloadImages();
  }, [slides, measureInteraction]);

  // Embla API setup with performance monitoring
  useEffect(() => {
    if (!emblaApi) return;

    const measureSlideChange = measureInteraction('slide_change');
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      measureSlideChange();
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, measureInteraction]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      const measure = measureInteraction('nav_prev');
      emblaApi.scrollPrev();
      measure();
    }
  }, [emblaApi, measureInteraction]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      const measure = measureInteraction('nav_next');
      emblaApi.scrollNext();
      measure();
    }
  }, [emblaApi, measureInteraction]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      const measure = measureInteraction('nav_indicator');
      emblaApi.scrollTo(index);
      measure();
    }
  }, [emblaApi, measureInteraction]);

  const currentSlideData = slides[selectedIndex];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Embla Carousel Container */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="embla__slide relative h-full flex-none w-full gpu-accelerated">
              <OptimizedImage
                src={slide.image}
                alt={`${slide.title} - Ceará Perfil Infraestrutura Elétrica`}
                className="absolute inset-0 w-full h-full object-cover"
                lazy={index > 0}
                priority={index === 0}
                sizes="100vw"
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  willChange: index === selectedIndex ? 'transform' : 'auto'
                }}
              />
              <div className="hero-overlay absolute inset-0"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Lightning Icon */}
            <div className="mb-4 sm:mb-6">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-accent animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight text-quality-lg font-playfair px-2">
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 opacity-90 italic text-quality-md font-inter px-2">
              {currentSlideData.subtitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-80 text-quality font-inter leading-relaxed px-4">
              {currentSlideData.description}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
              {currentSlideData.categories.map((category, index) => (
                <span
                  key={index}
                  className="category-tag text-quality font-inter gpu-accelerated text-xs sm:text-sm"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mobile-stack justify-center px-4">
              <Button variant="cta" size="lg" className="interactive-glow font-inter text-quality shadow-success w-full sm:w-auto">
                <span className="relative z-10">{currentSlideData.primaryBtn}</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-inter text-quality interactive-scale bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
              >
                {currentSlideData.secondaryBtn}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-ceara gpu-accelerated"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-ceara gpu-accelerated"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-ceara gpu-accelerated ${
              index === selectedIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;