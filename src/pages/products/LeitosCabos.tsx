import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Shield, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import leitosImage from "@/assets/products/leitos-cabos.jpg";

const LeitosCabos = () => {
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Shield, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import leitosImage from "@/assets/products/leitos-cabos.jpg";
import { getWhatsAppUrl } from "@/lib/utils";

const LeitosCabos = () => {
  const handleWhatsAppQuote = (productType: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productType}. Poderia me enviar mais informações sobre preços, medidas disponíveis e especificações técnicas?`;
    window.open(getWhatsAppUrl("5511945403008", message), "_blank");
  };

  const productTypes = [
    {
      type: "Leito para Cabos Tipo Escada",
      description: "Ideal para sustentação de cabos em instalações elétricas, oferecendo ventilação natural e fácil acesso para manutenção.",
      features: [
        "Ventilação natural dos cabos",
        "Fácil acesso para manutenção",
        "Alta capacidade de carga",
        "Estrutura robusta em aço galvanizado"
      ]
    },
    {
      type: "Leito para Cabos Tipo Bandeja", 
      description: "Solução versátil para condução de cabos com proteção lateral, ideal para ambientes que requerem maior proteção dos cabos.",
      features: [
        "Proteção lateral dos cabos",
        "Múltiplas opções de largura",
        "Instalação simplificada",
        "Acabamento galvanizado resistente"
      ]
    }
  ];

  const applications = [
    { icon: Shield, title: "Instalações Industriais", description: "Fábricas e plantas industriais" },
    { icon: Zap, title: "Subestações", description: "Instalações de energia elétrica" },
    { icon: Settings, title: "Data Centers", description: "Centros de processamento de dados" }
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
          <h1 className="text-5xl font-bold mb-6 text-quality-lg">Leitos para Cabos</h1>
          <p className="text-xl text-primary-foreground/90 max-w-4xl text-quality leading-relaxed">
            Sistemas de sustentação e organização de cabos elétricos, projetados para oferecer máxima eficiência e segurança.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
              Sobre os Leitos para Cabos
            </h2>
            <div className="prose prose-lg text-muted-foreground text-quality leading-relaxed">
              <p className="mb-4">
                Os <strong>Leitos para Cabos Ceará Perfil</strong> são sistemas estruturais projetados para sustentar e organizar cabos elétricos em instalações industriais, comerciais e residenciais.
              </p>
              <p className="mb-6">
                Fabricados em aço galvanizado de alta qualidade, oferecem durabilidade, resistência à corrosão e facilidade de instalação e manutenção.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={leitosImage} 
              alt="Leitos para Cabos Ceará Perfil"
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
                  <li>• Fabricado em aço galvanizado</li>
                  <li>• Alta resistência à corrosão</li>
                  <li>• Acabamento uniforme e durável</li>
                  <li>• Soldas de alta qualidade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-quality-md">Vantagens:</h4>
                <ul className="space-y-2 text-muted-foreground text-quality">
                  <li>• Instalação rápida e econômica</li>
                  <li>• Facilita ventilação dos cabos</li>
                  <li>• Permite fácil acesso para manutenção</li>
                  <li>• Suporta altas cargas de cabos</li>
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
                onClick={() => handleWhatsAppQuote("Leitos para Cabos - Consultoria Técnica")}
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

export default LeitosCabos;