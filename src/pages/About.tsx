import AdvantagesSection from "@/components/AdvantagesSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-quality-lg">
              Sobre a Ceará Perfil
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-quality">
              Há mais de 20 anos no mercado, a Ceará Perfil é especializada em soluções 
              completas para infraestrutura elétrica industrial e comercial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
                Nossa História
              </h2>
              <p className="text-muted-foreground mb-4 text-quality leading-relaxed">
                Fundada com o compromisso de oferecer produtos de alta qualidade para o setor elétrico, 
                a Ceará Perfil conquistou a confiança de milhares de clientes em todo o Brasil.
              </p>
              <p className="text-muted-foreground text-quality leading-relaxed">
                Nossa experiência e dedicação nos tornaram referência em perfilados, eletrocalhas, 
                leitos para cabos e uma vasta gama de produtos para infraestrutura elétrica.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 text-quality-md">
                Nossos Valores
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground text-quality">Qualidade superior em todos os produtos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground text-quality">Atendimento personalizado e especializado</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground text-quality">Inovação constante em soluções elétricas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground text-quality">Compromisso com prazos e entregas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <AdvantagesSection />
    </div>
  );
};

export default About;