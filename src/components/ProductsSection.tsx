import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import perfiladosImage from "@/assets/perfilados.jpg";

const ProductsSection = () => {
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
    <section id="produtos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em infraestrutura elétrica com a qualidade que você precisa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-ceara bg-card border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-ceara"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-ceara"></div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-ceara">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-primary hover:text-primary-foreground hover:bg-primary transition-ceara group"
                >
                  Ver Produtos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-ceara" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-ceara text-lg px-8 py-4">
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;