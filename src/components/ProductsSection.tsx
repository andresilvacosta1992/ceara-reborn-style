import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Eye } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useState, useEffect } from "react";
import { LoadingState } from "@/components/ui/loading-state";
import { getWhatsAppUrl } from "@/lib/utils";
import perfiladosImage from "@/assets/products/perfilados.jpg";
import eletrocalhasImage from "@/assets/products/eletrocalhas.jpg";
import leitosCabosImage from "@/assets/products/leitos-cabos.jpg";
import acessoriosFixacaoImage from "@/assets/products/acessorios-fixacao.jpg";
import abracadeirasImage from "@/assets/products/abracadeiras.jpg";
import eletrodutosImage from "@/assets/products/eletrodutos.jpg";
import dutosPisoImage from "@/assets/products/dutos-piso.jpg";
import rodapesMetalicosImage from "@/assets/products/rodapes-metalicos.jpg";
import quadrosComandosImage from "@/assets/products/quadros-comandos.jpg";
import caixaTelefoniaImage from "@/assets/products/caixa-telefonia.jpg";
import abrigosIncendiosImage from "@/assets/products/abrigos-incendios.jpg";

const ProductsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const products = [
    {
      title: "Perfilados",
      description: "Estruturas metálicas perfuradas para suporte e organização",
      image: perfiladosImage,
      url: "/produtos/perfilados"
    },
    {
      title: "Eletrocalhas",
      description: "Calhas metálicas para condução segura de cabos elétricos",
      image: eletrocalhasImage,
      url: "/produtos/eletrocalhas"
    },
    {
      title: "Leitos para Cabos",
      description: "Sistemas de suporte para cabeamento em grande escala",
      image: leitosCabosImage,
      url: "/produtos/leitos-cabos"
    },
    {
      title: "Acessórios para Fixação",
      description: "Componentes complementares para instalação e fixação",
      image: acessoriosFixacaoImage,
      url: "/produtos/acessorios-fixacao"
    },
    {
      title: "Abraçadeiras",
      description: "Elementos de fixação e sustentação para tubulações",
      image: abracadeirasImage,
      url: "/produtos/abracadeiras"
    },
    {
      title: "Eletrodutos",
      description: "Tubulações para proteção e organização de cabos",
      image: eletrodutosImage,
      url: "/produtos/eletrodutos"
    },
    {
      title: "Dutos de Piso",
      description: "Soluções para cabeamento embutido em pisos",
      image: dutosPisoImage,
      url: "/produtos/dutos-piso"
    },
    {
      title: "Rodapés Metálicos",
      description: "Acabamentos metálicos para instalações elétricas",
      image: rodapesMetalicosImage,
      url: "/produtos/rodapes-metalicos"
    },
    {
      title: "Quadros de Comandos",
      description: "Painéis de controle e distribuição elétrica",
      image: quadrosComandosImage,
      url: "/produtos/quadros-comandos"
    },
    {
      title: "Caixa para Telefonia",
      description: "Caixas especializadas para sistemas de telecomunicações",
      image: caixaTelefoniaImage,
      url: "/produtos/caixa-telefonia"
    },
    {
      title: "Abrigos para Incêndios",
      description: "Equipamentos de segurança e prevenção contra incêndios",
      image: abrigosIncendiosImage,
      url: "/produtos/abrigos-incendios"
    }
  ];

  const handleWhatsAppQuote = (productName: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productName}. Poderia me enviar mais informações sobre preços e disponibilidade?`;
    window.open(getWhatsAppUrl("5511945403008", message), "_blank");
  };

  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-quality-lg">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-quality leading-relaxed">
            Soluções completas em infraestrutura elétrica com a qualidade que você precisa
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <LoadingState type="card" count={8} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className={`stagger-item group card-hover bg-card border-border transition-all duration-300 hover:border-primary/20`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Disponível
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="flex-1 bg-white/90 text-gray-900 hover:bg-white"
                        onClick={() => window.location.href = product.url}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </Button>
                      <Button 
                        size="sm" 
                        variant="cta" 
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={() => handleWhatsAppQuote(product.title)}
                      >
                        <BsWhatsapp className="w-4 h-4 mr-1" />
                        Cotar
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-ceara text-quality-md">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 text-quality leading-relaxed">
                    {product.description}
                  </p>
                  <Button 
                    variant="cta" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => handleWhatsAppQuote(product.title)}
                  >
                    <BsWhatsapp className="w-4 h-4 mr-2" />
                    <span>Solicitar Cotação</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            variant="cta" 
            size="xl" 
            className="bg-green-600 hover:bg-green-700 text-white shadow-success interactive-glow"
            onClick={() => {
              const message = "Olá! Gostaria de ver o catálogo completo de produtos da Ceará Perfil. Poderia me enviar mais informações?";
              window.open(getWhatsAppUrl("5511945403008", message), "_blank");
            }}
          >
            <BsWhatsapp className="w-5 h-5 mr-2" />
            <span className="relative z-10">Solicitar Catálogo Completo</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;