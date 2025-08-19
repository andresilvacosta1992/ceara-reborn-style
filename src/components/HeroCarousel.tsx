import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import heroCablesImage from "@/assets/hero-cables.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "GESTÃO DE CABOS",
      subtitle: "soluções completas para cabeamento",
      description: "Eletrocalhas, leitos para cabos e eletrodutos com a qualidade que você precisa",
      categories: ["Eletrocalhas", "Leitos para cabos", "Eletrodutos"],
      image: heroCablesImage,
      primaryBtn: "SOLICITAR ORÇAMENTO",
      secondaryBtn: "VER PRODUTOS"
    },
    {
      id: 2,
      title: "ESTRUTURAS & FIXAÇÃO",
      subtitle: "sistemas robustos de suporte",
      description: "Perfilados, acessórios para fixação e abraçadeiras para suas instalações",
      categories: ["Perfilados", "Acessórios para fixação", "Abraçadeiras"],
      image: heroCablesImage,
      primaryBtn: "CONSULTAR PREÇOS",
      secondaryBtn: "CATÁLOGO"
    },
    {
      id: 3,
      title: "ACABAMENTOS",
      subtitle: "soluções discretas e profissionais",
      description: "Dutos de piso e rodapés metálicos para acabamentos perfeitos",
      categories: ["Dutos de piso", "Rodapés Metálicos"],
      image: heroCablesImage,
      primaryBtn: "VER MODELOS",
      secondaryBtn: "ESPECIFICAÇÕES"
    },
    {
      id: 4,
      title: "SOLUÇÕES ESPECIALIZADAS",
      subtitle: "proteção e organização",
      description: "Quadros de comandos, caixas para telefonia e abrigos para incêndios",
      categories: ["Quadros de comandos", "Caixa para telefonia", "Abrigos para incêndios"],
      image: heroCablesImage,
      primaryBtn: "PROJETOS ESPECIAIS",
      secondaryBtn: "CONTATO"
    },
    {
      id: 5,
      title: "CEARÁ PERFIL",
      subtitle: "qualidade, agilidade e confiança",
      description: "Mais de 15 anos fornecendo soluções em perfilados para construção civil",
      categories: ["Atendimento Rápido", "Qualidade Garantida", "Entrega Ágil"],
      image: heroCablesImage,
      primaryBtn: "FALE CONOSCO",
      secondaryBtn: "SOBRE NÓS"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${currentSlideData.image})` }}
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-6 opacity-90 italic">
              {currentSlideData.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80">
              {currentSlideData.description}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {currentSlideData.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="btn-ceara text-lg px-8 py-4">
                {currentSlideData.primaryBtn}
              </Button>
              <Button className="btn-ceara-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
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