import type { Metadata } from 'next'
import AdvantagesSection from "@/components/AdvantagesSection"

export const metadata: Metadata = {
  title: 'Sobre - Ceará Perfil | Nossa História e Valores',
  description: 'Conheça a história da Ceará Perfil, empresa especializada em infraestrutura elétrica há mais de 15 anos. Descubra nossos valores e compromisso com a qualidade.',
  keywords: 'sobre ceará perfil, história, valores, empresa infraestrutura elétrica, São Bernardo do Campo',
  openGraph: {
    title: 'Sobre - Ceará Perfil | Nossa História e Valores',
    description: 'Conheça nossa história e compromisso com soluções de qualidade em infraestrutura elétrica.',
    url: 'https://cearaperfil.com.br/sobre',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-quality-lg">
              Sobre a Ceará Perfil
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-quality">
              Há mais de 15 anos, dedicamos nossa expertise ao fornecimento de soluções 
              completas em infraestrutura elétrica, sempre priorizando qualidade e inovação.
            </p>
          </div>
        </div>
      </div>

      {/* Nossa História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-quality-lg">Nossa História</h2>
            <div className="prose prose-lg max-w-none text-quality">
              <p className="text-lg text-muted-foreground mb-6">
                A Ceará Perfil nasceu em 2008 com o objetivo de oferecer soluções inovadoras 
                e de alta qualidade para o setor de infraestrutura elétrica. Localizada em 
                São Bernardo do Campo, no coração do ABC Paulista, nossa empresa cresceu 
                e se consolidou como referência no mercado.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Ao longo dos anos, desenvolvemos um portfólio completo de produtos que 
                atendem desde pequenos projetos residenciais até grandes empreendimentos 
                industriais. Nossa missão sempre foi clara: fornecer produtos de excelência 
                que garantam segurança, durabilidade e eficiência em todas as instalações.
              </p>
              <p className="text-lg text-muted-foreground">
                Hoje, contamos com uma equipe especializada e um amplo catálogo de produtos, 
                incluindo eletrocalhas, perfilados, leitos para cabos, eletrodutos e muito mais. 
                Nosso compromisso é continuar evoluindo para atender às necessidades do mercado 
                com soluções cada vez mais eficientes e sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-quality-lg">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-quality">Qualidade</h3>
                <p className="text-muted-foreground text-quality">
                  Compromisso com a excelência em todos os nossos produtos, 
                  garantindo durabilidade e performance superior.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-quality">Inovação</h3>
                <p className="text-muted-foreground text-quality">
                  Busca constante por soluções tecnológicas que agreguem valor 
                  e facilitem a vida de nossos clientes.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-quality">Confiabilidade</h3>
                <p className="text-muted-foreground text-quality">
                  Relacionamentos sólidos baseados na transparência, 
                  pontualidade e cumprimento de compromissos.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-quality">Atendimento</h3>
                <p className="text-muted-foreground text-quality">
                  Suporte personalizado e especializado para garantir 
                  a melhor experiência de compra e pós-venda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdvantagesSection />
    </div>
  )
}