import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Shield, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import rodapesImage from "@/assets/products/rodapes-metalicos.jpg";

const RodapesMetalicos = () => {
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Shield, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import rodapesImage from "@/assets/products/rodapes-metalicos.jpg";
import { getWhatsAppUrl } from "@/lib/utils";

const RodapesMetalicos = () => {
  const handleWhatsAppQuote = (productType: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productType}. Poderia me enviar mais informações sobre preços, medidas disponíveis e especificações técnicas?`;
    window.open(getWhatsAppUrl("5511945403008", message), "_blank");
  };

  const productTypes = [
    {
      type: "Rodapé Metálico Liso",
      description: "Acabamento elegante para instalações elétricas, oferecendo proteção e organização dos cabos na base das paredes.",
      features: [
        "Acabamento liso e uniforme",
        "Facilita passagem de cabos",
        "Instalação simplificada",
        "Múltiplas alturas disponíveis"
      ]
    },
    {
      type: "Rodapé Metálico com Compartimentos", 
      description: "Solução completa com compartimentos internos para organização e separação de diferentes tipos de cabos.",
      features: [
        "Compartimentos internos",
        "Separação de circuitos",
        "Acesso facilitado",
        "Design funcional"
      ]
    }
  ];

  const applications = [
    { icon: Shield, title: "Escritórios", description: "Ambientes corporativos e comerciais" },
    { icon: Zap, title: "Salas Técnicas", description: "Data centers e salas de equipamentos" },
    { icon: Settings, title: "Instalações Prediais", description: "Edifícios residenciais e comerciais" }
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
          <h1 className="text-5xl font-bold mb-6 text-quality-lg">Rodapés Metálicos</h1>
          <p className="text-xl text-primary-foreground/90 max-w-4xl text-quality leading-relaxed">
            Soluções elegantes para acabamento e organização de instalações elétricas na base das paredes.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
              Sobre os Rodapés Metálicos
            </h2>
            <div className="prose prose-lg text-muted-foreground text-quality leading-relaxed">
              <p className="mb-4">
                Os <strong>Rodapés Metálicos Ceará Perfil</strong> são elementos de acabamento que combinam funcionalidade e estética, oferecendo uma solução elegante para instalações elétricas.
              </p>
              <p className="mb-6">
                Fabricados em chapa de aço com acabamento de alta qualidade, proporcionam proteção e organização dos cabos na base das paredes.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={rodapesImage} 
              alt="Rodapés Metálicos Ceará Perfil"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-quality-md">
            Principais Aplicações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="text-center bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <app.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-quality-md">{app.title}</h3>
                  <p className="text-muted-foreground text-quality">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {productTypes.map((product, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-quality-md">
                  {product.type}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-quality leading-relaxed">
                  {product.description}
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-quality-md">Características:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant="cta"
                  className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
                  onClick={() => handleWhatsAppQuote(product.type)}
                >
                  <BsWhatsapp className="w-4 h-4 mr-2" />
                  Solicitar Cotação - {product.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <Card className="mb-16 bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground text-quality-md">
              Especificações Técnicas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-quality-md">Material e Acabamento:</h4>
                <ul className="space-y-2 text-muted-foreground text-quality">
                  <li>• Fabricado em chapa de aço</li>
                  <li>• Acabamento pintado ou galvanizado</li>
                  <li>• Múltiplas alturas disponíveis</li>
                  <li>• Resistência mecânica adequada</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-quality-md">Vantagens:</h4>
                <ul className="space-y-2 text-muted-foreground text-quality">
                  <li>• Acabamento estético superior</li>
                  <li>• Organização dos cabos</li>
                  <li>• Facilita manutenção</li>
                  <li>• Proteção contra danos</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

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
                onClick={() => handleWhatsAppQuote("Rodapés Metálicos - Consultoria Técnica")}
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

export default RodapesMetalicos;