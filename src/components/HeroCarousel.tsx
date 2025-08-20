import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

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

  const slides = [
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
  ];

  // Intelligent image preloading
  useEffect(() => {
    const preloadImages = async () => {
      // Load current image first (priority)
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

      // Load first image immediately
      await loadImage(slides[0].image, 0);
      
      // Load remaining images with slight delay for smooth UX
      slides.slice(1).forEach((slide, index) => {
        setTimeout(() => {
          loadImage(slide.image, index + 1);
        }, (index + 1) * 100);
      });
    };

    preloadImages();
  }, [slides]);

  // Embla API setup
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const currentSlideData = slides[selectedIndex];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Embla Carousel Container */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="embla__slide relative h-full flex-none w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                }`}
                loading={index === 0 ? "eager" : "lazy"}
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
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-ceara"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-ceara"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-ceara ${
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