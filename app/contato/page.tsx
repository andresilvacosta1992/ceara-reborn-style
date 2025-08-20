import type { Metadata } from 'next'
import ContactSection from "@/components/ContactSection"

export const metadata: Metadata = {
  title: 'Contato - Ceará Perfil | Solicite seu Orçamento',
  description: 'Entre em contato conosco para solicitar orçamentos e tirar dúvidas sobre nossos produtos de infraestrutura elétrica. Atendimento especializado em São Bernardo do Campo - SP.',
  keywords: 'contato ceará perfil, orçamento, atendimento, whatsapp, são bernardo do campo, infraestrutura elétrica',
  openGraph: {
    title: 'Contato - Ceará Perfil | Solicite seu Orçamento',
    description: 'Entre em contato para orçamentos e informações sobre produtos de infraestrutura elétrica.',
    url: 'https://cearaperfil.com.br/contato',
  },
}

export default function ContactPage() {
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
  )
}