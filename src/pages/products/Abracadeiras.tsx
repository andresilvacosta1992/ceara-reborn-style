import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Wrench, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import abracadeirasImage from "@/assets/products/abracadeiras.jpg";

const Abracadeiras = () => {
  const handleWhatsAppQuote = (productType: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productType}. Poderia me enviar mais informações sobre preços, medidas disponíveis e especificações técnicas?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511945403008?text=${encodedMessage}`, "_blank");
  };

  const features = [
    {
      icon: Wrench,
      title: "Fixação Segura",
      description: "Elementos de fixação e sustentação especializados para tubulações"
    },
    {
      icon: Shield,
      title: "Material Resistente",
      description: "Fabricadas em aço galvanizado para máxima durabilidade"
    },
    {
      icon: Settings,
      title: "Múltiplas Aplicações",
      description: "Adequadas para diversas instalações industriais e prediais"
    }
  ];

  const productTypes = [
    {
      name: "Abraçadeira Simples",
      description: "Para fixação básica de tubulações de pequeno e médio diâmetro",
      applications: ["Tubulações residenciais", "Instalações básicas", "Pequenos diâmetros"]
    },
    {
      name: "Abraçadeira Dupla",
      description: "Para fixação de múltiplas tubulações ou cabos em paralelo",
      applications: ["Instalações industriais", "Múltiplas tubulações", "Organizações complexas"]
    },
    {
      name: "Abraçadeira com Isolamento",
      description: "Com material isolante para evitar vibração e ruído",
      applications: ["Tubulações sensíveis", "Ambientes residenciais", "Redução de ruído"]
    },
    {
      name: "Abraçadeira Pesada",
      description: "Para tubulações de grande diâmetro e peso elevado",
      applications: ["Grandes diâmetros", "Instalações industriais", "Cargas pesadas"]
    }
  ];

  const applications = [
    "Fixação de tubulações hidráulicas",
    "Sustentação de eletrodutos",
    "Instalações de ar condicionado",
    "Sistemas de aquecimento",
    "Tubulações industriais",
    "Infraestrutura predial"
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
          <h1 className="text-5xl font-bold mb-6 text-quality-lg">Abraçadeiras</h1>
          <p className="text-xl text-primary-foreground/90 max-w-4xl text-quality leading-relaxed">
            Elementos especializados de fixação e sustentação para tubulações, oferecendo segurança e durabilidade.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
              Sobre as Abraçadeiras
            </h2>
            <div className="prose prose-lg text-muted-foreground text-quality leading-relaxed">
              <p className="mb-4">
                As <strong>abraçadeiras</strong> são elementos fundamentais de fixação e sustentação para tubulações em instalações hidráulicas, elétricas e industriais.
              </p>
              <p className="mb-6">
                Fabricadas com materiais de alta qualidade, garantem segurança, durabilidade e eficiência na fixação de tubulações de diversos diâmetros e aplicações.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={abracadeirasImage} 
              alt="Abraçadeiras Ceará Perfil"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-quality-md">
            Principais Características
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-quality-md">{feature.title}</h3>
                  <p className="text-muted-foreground text-quality">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-quality-md">
            Tipos de Abraçadeiras
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productTypes.map((product, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground text-quality-md">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-quality leading-relaxed">
                    {product.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-quality-md">Aplicações:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {product.applications.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="cta"
                    className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
                    onClick={() => handleWhatsAppQuote(product.name)}
                  >
                    <BsWhatsapp className="w-4 h-4 mr-2" />
                    Solicitar Cotação - {product.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Applications and Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-quality-md">
                Aplicações Principais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-quality">{application}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-quality-md">
                Vantagens Técnicas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-quality-md">Material:</h4>
                  <p className="text-muted-foreground text-sm text-quality">Aço galvanizado resistente à corrosão</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-quality-md">Instalação:</h4>
                  <p className="text-muted-foreground text-sm text-quality">Rápida e eficiente, com fixação segura</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-quality-md">Durabilidade:</h4>
                  <p className="text-muted-foreground text-sm text-quality">Longa vida útil em diversas condições</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-quality-md">Versatilidade:</h4>
                  <p className="text-muted-foreground text-sm text-quality">Adequada para múltiplas aplicações</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-quality-md">
              Precisa de Orientação Técnica?
            </h3>
            <p className="text-muted-foreground mb-6 text-quality">
              Nossa equipe pode ajudar na escolha da abraçadeira ideal para sua aplicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta"
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => handleWhatsAppQuote("Abraçadeiras - Consultoria Técnica")}
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

export default Abracadeiras;