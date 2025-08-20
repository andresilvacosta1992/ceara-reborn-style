import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Shield, Zap, Settings, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import eletrodutosImage from "@/assets/products/eletrodutos.jpg";

const Eletrodutos = () => {
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Shield, Zap, Settings, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import eletrodutosImage from "@/assets/products/eletrodutos.jpg";
import { getWhatsAppUrl } from "@/lib/utils";

const Eletrodutos = () => {
  const handleWhatsAppQuote = (productType: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productType}. Poderia me enviar mais informações sobre preços, medidas disponíveis e especificações técnicas?`;
    window.open(getWhatsAppUrl("5511945403008", message), "_blank");
  };

  const features = [
    {
      icon: Shield,
      title: "Proteção Completa",
      description: "Tubulações para proteção integral de cabos e fiação elétrica"
    },
    {
      icon: Zap,
      title: "Segurança Elétrica",
      description: "Conformidade com normas de segurança elétrica brasileiras"
    },
    {
      icon: Settings,
      title: "Fácil Instalação",
      description: "Sistemas práticos para instalação e manutenção eficientes"
    }
  ];

  const productTypes = [
    {
      name: "Eletroduto Rígido Roscável",
      description: "Tubulação rígida com rosca para conexões seguras e duráveis",
      features: ["Rosca padrão NBR", "Alta resistência mecânica", "Conexões seguras", "Durabilidade superior"],
      applications: ["Instalações aparentes", "Áreas industriais", "Ambientes agressivos"]
    },
    {
      name: "Eletroduto Flexível",
      description: "Tubulação flexível para instalações que exigem mobilidade",
      features: ["Flexibilidade total", "Fácil curvamento", "Instalação rápida", "Ideal para curvas"],
      applications: ["Instalações embutidas", "Passagens complexas", "Conexões móveis"]
    },
    {
      name: "Eletroduto Corrugado",
      description: "Tubulação corrugada para máxima flexibilidade e proteção",
      features: ["Alta flexibilidade", "Resistente à tração", "Proteção UV", "Múltiplos diâmetros"],
      applications: ["Instalações externas", "Enterramento", "Passagem de lajes"]
    }
  ];

  const applications = [
    "Instalações elétricas residenciais",
    "Sistemas prediais comerciais", 
    "Instalações industriais",
    "Proteção de cabeamento estruturado",
    "Sistemas de automação",
    "Infraestrutura elétrica"
  ];

  const standards = [
    { code: "NBR 15465", description: "Eletrodutos de PVC rígido" },
    { code: "NBR 6150", description: "Eletrodutos de PVC flexível" },
    { code: "NBR 15715", description: "Eletrodutos corrugados" },
    { code: "NBR 5410", description: "Instalações elétricas de baixa tensão" }
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
          <h1 className="text-5xl font-bold mb-6 text-quality-lg">Eletrodutos</h1>
          <p className="text-xl text-primary-foreground/90 max-w-4xl text-quality leading-relaxed">
            Tubulações especializadas para proteção e organização de cabos elétricos em instalações residenciais, comerciais e industriais.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
              Sobre os Eletrodutos
            </h2>
            <div className="prose prose-lg text-muted-foreground text-quality leading-relaxed">
              <p className="mb-4">
                Os <strong>eletrodutos</strong> são tubulações essenciais para a proteção e organização de cabos elétricos em instalações de todos os portes.
              </p>
              <p className="mb-6">
                Fabricados em conformidade com as normas brasileiras, oferecem proteção mecânica, organização do sistema elétrico e facilidade na manutenção, sendo fundamentais para instalações seguras e eficientes.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={eletrodutosImage} 
              alt="Eletrodutos Ceará Perfil"
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
            Tipos de Eletrodutos
          </h2>
          <div className="space-y-6">
            {productTypes.map((product, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground text-quality-md">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-4 text-quality leading-relaxed">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-quality-md">Características:</h4>
                          <ul className="space-y-1">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-quality-md">Aplicações:</h4>
                          <ul className="space-y-1">
                            {product.applications.map((app, idx) => (
                              <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <Button 
                        variant="cta"
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => handleWhatsAppQuote(product.name)}
                      >
                        <BsWhatsapp className="w-4 h-4 mr-2" />
                        Solicitar Cotação
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Standards and Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-quality-md">
                Normas Técnicas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {standards.map((standard, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary/10 rounded-lg px-3 py-1 mr-3 flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">{standard.code}</span>
                    </div>
                    <p className="text-muted-foreground text-sm text-quality">{standard.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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
        </div>

        {/* Benefits */}
        <Card className="mb-16 bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground text-quality-md">
              Vantagens dos Nossos Eletrodutos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-quality-md">Qualidade:</h4>
                <p className="text-muted-foreground text-sm text-quality">Materiais de primeira linha em conformidade com normas</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-quality-md">Durabilidade:</h4>
                <p className="text-muted-foreground text-sm text-quality">Resistência superior a impactos e intempéries</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-quality-md">Versatilidade:</h4>
                <p className="text-muted-foreground text-sm text-quality">Múltiplos diâmetros e tipos para cada aplicação</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-quality-md">Instalação:</h4>
                <p className="text-muted-foreground text-sm text-quality">Fácil manuseio e instalação rápida</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-quality-md">Economia:</h4>
                <p className="text-muted-foreground text-sm text-quality">Redução de custos de instalação e manutenção</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-quality-md">Segurança:</h4>
                <p className="text-muted-foreground text-sm text-quality">Proteção eficiente contra danos mecânicos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-quality-md">
              Precisa de Orientação Técnica?
            </h3>
            <p className="text-muted-foreground mb-6 text-quality">
              Nossa equipe técnica pode auxiliar na escolha do eletroduto ideal para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta"
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => handleWhatsAppQuote("Eletrodutos - Consultoria Técnica")}
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

export default Eletrodutos;