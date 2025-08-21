import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Award, Users, Shield } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Rapidez",
      description: "Ceara Perfil se orgulha por atender seus clientes no prazo certo, afim de minimizar qualquer atraso em sua obra, por parte de atrasos na entrega de seus produtos."
    },
    {
      icon: Award,
      title: "Competência",
      description: "Ceara Perfil está apta a analisar o seu projeto com toda a competência, para produzir materiais sob medida para seu projeto."
    },
    {
      icon: Users,
      title: "Profissionalismo",
      description: "Na Ceara Perfil podemos contar com uma equipe totalmente treinada e qualificada, produzindo materiais de ponta afim de atender diversas áreas."
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Na Ceara Perfil, a confiança é essencial. Garantimos que nossos produtos sejam entregues conforme o prometido, com qualidade e no prazo certo, sem surpresas."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Vantagens de Escolher a Ceará Perfil
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra por que somos a escolha certa para seus projetos de infraestrutura elétrica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-ceara border-border bg-card">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-ceara">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-ceara">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;