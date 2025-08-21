import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, Facebook, MapPin, ExternalLink } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "vendas@cearaperfil.com.br",
      link: "mailto:vendas@cearaperfil.com.br"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "(11) 94540-3008",
      link: getWhatsAppUrl("5511945403008", "Olá, Gostaria de Solicitar um Orçamento...")
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@cearaperfil",
      link: "https://www.instagram.com/cearaperfil/"
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "Ceará Perfil",
      link: "https://www.facebook.com/cearaperfil"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contato
          </h2>
          <p className="text-xl text-muted-foreground">
            Entre em contato conosco e solicite seu orçamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-ceara bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-ceara">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {contact.title}
                  </h3>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-ceara text-sm inline-flex items-center gap-1"
                  >
                    {contact.content}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Location Card */}
        <Card className="max-w-2xl mx-auto bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">
                  Ceará Perfil
                </h3>
                <p className="text-muted-foreground mb-2">
                  São Bernardo do Campo
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  R. Madeira, 39 - Vila Vivaldi, São Bernardo do Campo - SP
                </p>
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/goEHHr75E8TUiNDz9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Abrir no Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            className="btn-success text-lg px-8 py-4"
            onClick={() => window.open(getWhatsAppUrl("5511945403008", "Olá! Gostaria de solicitar um orçamento."), "_blank")}
          >
            SOLICITAR ORÇAMENTO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;