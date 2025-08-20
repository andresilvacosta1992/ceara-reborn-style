import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import perfiladosImage from "@/assets/products/perfilados.jpg";
import { getWhatsAppUrl } from "@/lib/utils";

const Perfilados = () => {
  const handleWhatsAppQuote = (productType: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productType}. Poderia me enviar mais informações sobre preços, medidas disponíveis e especificações técnicas?`;
    window.open(getWhatsAppUrl("5511945403008", message), "_blank");
  };

  const specifications = [
    {
      type: "Perfilado Liso",
      reference: "CP 0010",
      dimensions: "19x38 | 38x38 | 76x38",
      description: "Utilizado para passagem de cabos e suporte de luminárias, sustentação de estruturas de gesso, suporte de ar-condicionado, painéis solares e projetos arquitetônicos. Não possui furações, utilizando ganchos para sustentação.",
      features: [
        "Simples instalação e manutenção",
        "Produto versátil para múltiplas aplicações",
        "Material resistente e durável",
        "Acabamento de qualidade"
      ]
    },
    {
      type: "Perfilado Perfurado",
      reference: "CP 0011", 
      dimensions: "19x38 | 38x38 | 76x38",
      description: "Próprio para suspensão e alimentação de circuitos, equipamentos de iluminação e passagem de fios e cabos elétricos, telefônicos e de dados. Confere eficiência e modernidade no sistema de distribuição.",
      features: [
        "Furos estratégicos para fixação eficiente",
        "Ideal para instalações comerciais e industriais",
        "Permite uso aparente em projetos arquitetônicos",
        "Facilita manutenção e expansões futuras"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <Link to="/produtos" className="inline-flex items-center mb-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos Produtos
          </Link>
          <h1 className="text-5xl font-bold mb-6 text-quality-lg">Perfilados</h1>
          <p className="text-xl text-primary-foreground/90 max-w-4xl text-quality leading-relaxed">
            Estruturas metálicas perfuradas e lisas para suporte e organização em instalações elétricas de pequenas, médias e grandes obras.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
              Aplicações e Benefícios
            </h2>
            <div className="prose prose-lg text-muted-foreground text-quality leading-relaxed">
              <p className="mb-4">
                Os <strong>Perfilados</strong> são materiais amplamente utilizados nas instalações elétricas de pequenas, médias e grandes obras. São indicados para suporte elétrico e hidráulico em:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Supermercados e shopping centers</li>
                <li>Estacionamentos e cinemas</li>
                <li>Parques fabris e indústrias</li>
                <li>Hidrelétricas e grandes obras</li>
                <li>Instalações comerciais e prediais</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={perfiladosImage} 
              alt="Perfilados Ceará Perfil"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Product Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {specifications.map((spec, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-quality-md">
                  {spec.type}
                </CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="bg-muted px-3 py-1 rounded-full">
                    <strong>Ref:</strong> {spec.reference}
                  </span>
                  <span className="bg-muted px-3 py-1 rounded-full">
                    <strong>Medidas:</strong> {spec.dimensions}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-quality leading-relaxed">
                  {spec.description}
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-quality-md">Características:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {spec.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant="cta"
                  className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
                  onClick={() => handleWhatsAppQuote(spec.type)}
                >
                  <BsWhatsapp className="w-4 h-4 mr-2" />
                  Solicitar Cotação - {spec.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-quality-md">
              Precisa de Mais Informações?
            </h3>
            <p className="text-muted-foreground mb-6 text-quality">
              Nossa equipe técnica está pronta para auxiliar na especificação ideal para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta"
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => handleWhatsAppQuote("Perfilados - Consultoria Técnica")}
              >
                <BsWhatsapp className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-5 h-5 mr-2" />
                (11) 94540-3008
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Mail className="w-5 h-5 mr-2" />
                Vendas@cearaperfil.com.br
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Perfilados;