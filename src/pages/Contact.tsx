import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-quality-lg">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-quality">
              Estamos prontos para atender suas necessidades. Solicite seu orçamento 
              e tire todas as suas dúvidas com nossa equipe especializada.
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default Contact;