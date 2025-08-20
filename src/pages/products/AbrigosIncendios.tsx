import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Shield, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import abrigosImage from "@/assets/products/abrigos-incendios.jpg";

const AbrigosIncendios = () => {
  const handleWhatsAppQuote = (productType: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productType}. Poderia me enviar mais informações sobre preços, medidas disponíveis e especificações técnicas?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511945403008?text=${encodedMessage}`, "_blank");
  };

  const productTypes = [
    {
      type: "Abrigo para Hidrante",
      description: "Estruturas metálicas projetadas para abrigar equipamentos de combate a incêndio, garantindo fácil acesso em situações de emergência.",
      features: [
        "Acesso rápido em emergências",
        "Proteção contra intempéries",
        "Visibilidade e sinalização",
        "Conformidade com normas NBR"
      ]
    },
    {
      type: "Abrigo para Extintores", 
      description: "Soluções específicas para armazenamento seguro de extintores, facilitando a localização e o acesso durante emergências.",
      features: [
        "Proteção dos equipamentos",
        "Fácil identificação",
        "Instalação versátil",
        "Múltiplos tamanhos"
      ]
    }
  ];

  const applications = [
    { icon: Shield, title: "Edifícios Comerciais", description: "Escritórios e centros comerciais" },
    { icon: Zap, title: "Instalações Industriais", description: "Fábricas e plantas industriais" },
    { icon: Settings, title: "Condomínios", description: "Edifícios residenciais" }
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
          <h1 className="text-5xl font-bold mb-6 text-quality-lg">Abrigos para Incêndios</h1>
          <p className="text-xl text-primary-foreground/90 max-w-4xl text-quality leading-relaxed">
            Equipamentos essenciais para segurança contra incêndios, garantindo proteção e acesso rápido em emergências.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
              Sobre os Abrigos para Incêndios
            </h2>
            <div className="prose prose-lg text-muted-foreground text-quality leading-relaxed">
              <p className="mb-4">
                Os <strong>Abrigos para Incêndios Ceará Perfil</strong> são estruturas fundamentais para sistemas de segurança contra incêndio, projetadas para proteger e organizar equipamentos de combate ao fogo.
              </p>
              <p className="mb-6">
                Fabricados conforme normas técnicas brasileiras, garantem durabilidade, resistência e facilidade de acesso em situações de emergência.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={abrigosImage} 
              alt="Abrigos para Incêndios Ceará Perfil"
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
                <h4 className="font-semibold text-foreground mb-3 text-quality-md">Material e Normas:</h4>
                <ul className="space-y-2 text-muted-foreground text-quality">
                  <li>• Chapa de aço galvanizado</li>
                  <li>• Conformidade com NBR 12693</li>
                  <li>• Pintura eletrostática</li>
                  <li>• Vidro temperado (quando aplicável)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-quality-md">Vantagens:</h4>
                <ul className="space-y-2 text-muted-foreground text-quality">
                  <li>• Proteção dos equipamentos</li>
                  <li>• Sinalização de emergência</li>
                  <li>• Facilidade de instalação</li>
                  <li>• Durabilidade e resistência</li>
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
                onClick={() => handleWhatsAppQuote("Abrigos para Incêndios - Consultoria Técnica")}
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

export default AbrigosIncendios;