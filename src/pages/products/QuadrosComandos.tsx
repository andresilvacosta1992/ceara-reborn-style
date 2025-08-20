import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Zap, Shield, Settings, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import quadrosComandosImage from "@/assets/products/quadros-comandos.jpg";

const QuadrosComandos = () => {
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Zap, Shield, Settings, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import quadrosComandosImage from "@/assets/products/quadros-comandos.jpg";
import { getWhatsAppUrl } from "@/lib/utils";

const QuadrosComandos = () => {
  const handleWhatsAppQuote = (productType: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productType}. Poderia me enviar mais informações sobre preços, medidas disponíveis e especificações técnicas?`;
    window.open(getWhatsAppUrl("5511945403008", message), "_blank");
  };

  const features = [
    {
      icon: Zap,
      title: "Controle Elétrico",
      description: "Painéis especializados para controle e distribuição elétrica industrial"
    },
    {
      icon: Shield,
      title: "Proteção Segura",
      description: "Compartimentos modulares com proteção IP adequada para cada aplicação"
    },
    {
      icon: Settings,
      title: "Montagem Modular",
      description: "Estrutura em chapa metálica com perfis de dobras perfurados"
    },
    {
      icon: Cpu,
      title: "Automação",
      description: "Preparados para sistemas de automação e controle industrial"
    }
  ];

  const productTypes = [
    {
      name: "Quadro de Distribuição",
      description: "Para distribuição de energia elétrica em instalações prediais e industriais",
      applications: ["Distribuição predial", "Instalações comerciais", "Controle de circuitos"]
    },
    {
      name: "Painel de Comando",
      description: "Para controle de motores, máquinas e equipamentos industriais",
      applications: ["Controle de motores", "Automação industrial", "Máquinas e equipamentos"]
    },
    {
      name: "Quadro de Automação",
      description: "Para sistemas automatizados com CLPs e dispositivos inteligentes",
      applications: ["Automação predial", "Controle de processos", "Sistemas inteligentes"]
    },
    {
      name: "Painel Customizado",
      description: "Desenvolvido conforme especificações técnicas do cliente",
      applications: ["Projetos especiais", "Aplicações específicas", "Soluções sob medida"]
    }
  ];

  const specifications = [
    {
      item: "Material",
      value: "Chapa de aço galvanizada"
    },
    {
      item: "Estrutura",
      value: "Perfis de dobras perfurados"
    },
    {
      item: "Fechamento",
      value: "Chapas e portas com sistema de fecho"
    },
    {
      item: "Proteção",
      value: "IP20 a IP65 conforme aplicação"
    },
    {
      item: "Montagem",
      value: "Modular para facilitar instalação"
    },
    {
      item: "Pintura",
      value: "Tinta em pó eletrostática"
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
          <h1 className="text-5xl font-bold mb-6 text-quality-lg">Quadros de Comandos</h1>
          <p className="text-xl text-primary-foreground/90 max-w-4xl text-quality leading-relaxed">
            Painéis elétricos de comando e montagem industrial para controle e distribuição elétrica segura e eficiente.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
              Sobre os Quadros de Comandos
            </h2>
            <div className="prose prose-lg text-muted-foreground text-quality leading-relaxed">
              <p className="mb-4">
                Um <strong>painel elétrico de comando</strong> e montagem industrial pode ser definido como um compartimento modular utilizado para alocar dispositivos eletrônicos em seu interior.
              </p>
              <p className="mb-6">
                Geralmente, os painéis são construídos em estruturas em chapa metálica, com perfis de dobras perfurados ou não, possuindo fechamentos em chapas e portas com sistema de fecho seguro e eficiente.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={quadrosComandosImage} 
              alt="Quadros de Comandos Ceará Perfil"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-quality-md">
            Principais Características
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2 text-quality-md">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm text-quality">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-quality-md">
            Tipos de Quadros
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

        {/* Technical Specifications */}
        <Card className="mb-16 bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground text-quality-md">
              Especificações Técnicas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-foreground text-quality-md">{spec.item}:</h4>
                  <p className="text-muted-foreground text-sm text-quality">{spec.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-quality-md">
                Vantagens dos Nossos Quadros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-quality">Fabricação sob medida conforme projeto</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-quality">Estrutura robusta e resistente</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-quality">Facilidade de instalação e manutenção</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-quality">Proteção adequada para cada aplicação</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-quality">Acabamento profissional</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-quality-md">
                Processo de Fabricação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-quality-md">Análise do Projeto</h4>
                    <p className="text-sm text-muted-foreground text-quality">Estudo das especificações técnicas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-quality-md">Desenvolvimento</h4>
                    <p className="text-sm text-muted-foreground text-quality">Criação da estrutura modular</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-quality-md">Fabricação</h4>
                    <p className="text-sm text-muted-foreground text-quality">Produção com controle de qualidade</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-quality-md">Acabamento</h4>
                    <p className="text-sm text-muted-foreground text-quality">Pintura e finalização profissional</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-quality-md">
              Projeto Personalizado
            </h3>
            <p className="text-muted-foreground mb-6 text-quality">
              Desenvolvemos quadros de comando sob medida para suas necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta"
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => handleWhatsAppQuote("Quadros de Comandos - Projeto Personalizado")}
              >
                <BsWhatsapp className="w-5 h-5 mr-2" />
                Solicitar Projeto
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

export default QuadrosComandos;