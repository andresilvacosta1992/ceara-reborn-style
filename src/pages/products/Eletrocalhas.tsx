import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { ArrowLeft, Phone, Mail, Shield, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import eletrocalhasImage from "@/assets/products/eletrocalhas.jpg";

const Eletrocalhas = () => {
  const handleWhatsAppQuote = (productType: string) => {
    const message = `Olá! Gostaria de solicitar uma cotação para ${productType}. Poderia me enviar mais informações sobre preços, medidas disponíveis e especificações técnicas?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511945403008?text=${encodedMessage}`, "_blank");
  };

  const productTypes = [
    {
      type: "Eletrocalha Lisa",
      description: "Utilizada para passagem de fios e cabos, distribuição de energia elétrica, telefonia e dados. Proporciona rápida instalação e oferece fácil manutenção e inspeção periódica.",
      features: [
        "Instalação rápida e eficiente",
        "Fácil manutenção e inspeção",
        "Ideal para qualquer tipo de instalação elétrica",
        "Acabamento liso e uniforme"
      ]
    },
    {
      type: "Eletrocalha Perfurada", 
      description: "Produto utilizado para passagem de fios e cabos, distribuição de energia elétrica, telefonia e dados. Disponível em diferentes medidas conforme a necessidade.",
      features: [
        "Ventilação natural dos cabos",
        "Facilita dissipação do calor",
        "Múltiplas medidas disponíveis",
        "Ideal para grandes instalações"
      ]
    }
  ];

  const applications = [
    { icon: Shield, title: "Instalações Prediais", description: "Edifícios residenciais e comerciais" },
    { icon: Zap, title: "Shopping Centers", description: "Grandes centros comerciais" },
    { icon: Settings, title: "Instalações Industriais", description: "Fábricas e parques industriais" }
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
          <h1 className="text-5xl font-bold mb-6 text-quality-lg">Eletrocalhas</h1>
          <p className="text-xl text-primary-foreground/90 max-w-4xl text-quality leading-relaxed">
            Bandejas metálicas destinadas à condução e distribuição segura de fios e cabos elétricos, telefônicos e de dados.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
              Sobre as Eletrocalhas
            </h2>
            <div className="prose prose-lg text-muted-foreground text-quality leading-relaxed">
              <p className="mb-4">
                As <strong>Eletrocalhas Ceará Perfil</strong> são bandejas destinadas à condução e distribuição de fios e cabos, fabricadas em chapas de aço SAE 1008/1010, conforme as normas NBR 11888-2 e NBR 7013.
              </p>
              <p className="mb-6">
                Utilizadas na condução de fios e cabos para distribuição de energia elétrica, telefonia e dados, podem ser aplicadas em instalações prediais, comerciais, shopping centers, industriais e muito mais.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={eletrocalhasImage} 
              alt="Eletrocalhas Ceará Perfil"
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
                  <li>• Fabricadas em chapas de aço SAE 1008/1010</li>
                  <li>• Conforme NBR 11888-2 e NBR 7013</li>
                  <li>• Acabamento galvanizado ou pré-zincado</li>
                  <li>• Alta resistência à corrosão</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-quality-md">Vantagens:</h4>
                <ul className="space-y-2 text-muted-foreground text-quality">
                  <li>• Instalação rápida e econômica</li>
                  <li>• Facilita manutenção e expansões</li>
                  <li>• Proteção eficiente dos cabos</li>
                  <li>• Múltiplas opções de medidas</li>
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
                onClick={() => handleWhatsAppQuote("Eletrocalhas - Consultoria Técnica")}
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

export default Eletrocalhas;