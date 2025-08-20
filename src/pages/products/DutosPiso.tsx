import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Building, Zap, Network } from "lucide-react";
import { Link } from "react-router-dom";
import dutosPisoImage from "@/assets/products/dutos-piso.jpg";

const DutosPiso = () => {
  const handleWhatsAppQuote = (productType: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productType}. Poderia me enviar mais informações sobre preços, medidas disponíveis e especificações técnicas?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511945403008?text=${encodedMessage}`, "_blank");
  };

  const features = [
    {
      icon: Building,
      title: "Sistema Modular",
      description: "Dutos retangulares de 25×70 mm montados paralelamente conforme necessidade"
    },
    {
      icon: Zap,
      title: "Múltiplos Circuitos",
      description: "Permite separação eficiente entre circuitos de energia, telefonia e dados"
    },
    {
      icon: Network,
      title: "Distribuição Integrada",
      description: "Ideal para alimentação de pontos telefônicos, energia elétrica e lógica"
    }
  ];

  const specifications = [
    {
      item: "Dimensões dos Dutos",
      value: "25×70 mm"
    },
    {
      item: "Material",
      value: "Aço carbono pré-zincado a fogo"
    },
    {
      item: "Montagem",
      value: "Paralela conforme necessidade"
    },
    {
      item: "Acessórios",
      value: "Linha completa para montagem"
    }
  ];

  const applications = [
    "Edifícios comerciais e corporativos",
    "Instalações prediais modernas",
    "Escritórios e salas de reunião",
    "Ambientes que exigem cabeamento organizado",
    "Projetos de automação predial",
    "Instalações de telefonia e dados"
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
          <h1 className="text-5xl font-bold mb-6 text-quality-lg">Dutos de Piso</h1>
          <p className="text-xl text-primary-foreground/90 max-w-4xl text-quality leading-relaxed">
            Sistema modular para distribuição eficiente de cabeamento embutido em pisos, ideal para instalações modernas.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
              Sobre os Dutos de Piso
            </h2>
            <div className="prose prose-lg text-muted-foreground text-quality leading-relaxed">
              <p className="mb-4">
                Os <strong>dutos de piso</strong> são um sistema constituído por dutos retangulares medindo 25×70 mm montados paralelamente na dimensão desejada, dependendo da necessidade e números de circuitos a serem separados entre si.
              </p>
              <p className="mb-6">
                Permitem eficiente distribuição de alimentação dos pontos telefônicos, energia elétrica e lógica. São fabricados em aço carbono pré-zincado a fogo e possuem uma ampla linha de acessórios necessários para a montagem.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={dutosPisoImage} 
              alt="Dutos de Piso Ceará Perfil"
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

        {/* Technical Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-quality-md">
                Especificações Técnicas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium text-foreground text-quality-md">{spec.item}:</span>
                    <span className="text-muted-foreground text-quality">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-quality-md">
                Aplicações Recomendadas
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
        </div>

        {/* Advantages */}
        <Card className="mb-16 bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground text-quality-md">
              Vantagens dos Dutos de Piso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-quality-md">Funcionalidades:</h4>
                <ul className="space-y-2 text-muted-foreground text-quality">
                  <li>• Organização eficiente do cabeamento</li>
                  <li>• Facilita manutenção e expansões</li>
                  <li>• Proteção contra danos mecânicos</li>
                  <li>• Instalação limpa e discreta</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-quality-md">Benefícios:</h4>
                <ul className="space-y-2 text-muted-foreground text-quality">
                  <li>• Separação segura entre circuitos</li>
                  <li>• Flexibilidade para mudanças</li>
                  <li>• Acabamento profissional</li>
                  <li>• Durabilidade garantida</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-quality-md">
              Solicite seu Orçamento
            </h3>
            <p className="text-muted-foreground mb-6 text-quality">
              Nossos especialistas podem ajudar a dimensionar a solução ideal para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta"
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => handleWhatsAppQuote("Dutos de Piso - Orçamento Personalizado")}
              >
                <BsWhatsapp className="w-5 h-5 mr-2" />
                Solicitar Orçamento
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

export default DutosPiso;