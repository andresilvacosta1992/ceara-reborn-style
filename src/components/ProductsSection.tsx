import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { LoadingState } from "@/components/ui/loading-state";
import perfiladosImage from "@/assets/perfilados.jpg";

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
      image: perfiladosImage
    },
    {
      title: "Eletrocalhas",
      description: "Calhas metálicas para condução segura de cabos elétricos",
      image: perfiladosImage
    },
    {
      title: "Leitos para Cabos",
      description: "Sistemas de suporte para cabeamento em grande escala",
      image: perfiladosImage
    },
    {
      title: "Acessórios para Fixação",
      description: "Componentes complementares para instalação e fixação",
      image: perfiladosImage
    },
    {
      title: "Abraçadeiras",
      description: "Elementos de fixação e sustentação para tubulações",
      image: perfiladosImage
    },
    {
      title: "Eletrodutos",
      description: "Tubulações para proteção e organização de cabos",
      image: perfiladosImage
    },
    {
      title: "Dutos de Piso",
      description: "Soluções para cabeamento embutido em pisos",
      image: perfiladosImage
    },
    {
      title: "Rodapés Metálicos",
      description: "Acabamentos metálicos para instalações elétricas",
      image: perfiladosImage
    },
    {
      title: "Quadros de Comandos",
      description: "Painéis de controle e distribuição elétrica",
      image: perfiladosImage
    },
    {
      title: "Caixa para Telefonia",
      description: "Caixas especializadas para sistemas de telecomunicações",
      image: perfiladosImage
    },
    {
      title: "Abrigos para Incêndios",
      description: "Equipamentos de segurança e prevenção contra incêndios",
      image: perfiladosImage
    }
  ];

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
                      <Button size="sm" variant="secondary" className="flex-1 bg-white/90 text-gray-900 hover:bg-white">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </Button>
                      <Button size="sm" variant="default" className="flex-1">
                        <ShoppingCart className="w-4 h-4 mr-1" />
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
                    variant="ghost" 
                    className="w-full justify-between text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 group/btn interactive-scale"
                  >
                    <span>Ver Produtos</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="cta" size="xl" className="shadow-success interactive-glow">
            <span className="relative z-10">Ver Catálogo Completo</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;