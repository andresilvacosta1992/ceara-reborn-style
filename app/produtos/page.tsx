import type { Metadata } from 'next'
import ProductsSection from "@/components/ProductsSection"

export const metadata: Metadata = {
  title: 'Produtos - Ceará Perfil | Catálogo Completo de Infraestrutura Elétrica',
  description: 'Descubra nossa linha completa de produtos para infraestrutura elétrica: eletrocalhas, perfilados, leitos para cabos, eletrodutos e mais. Soluções profissionais com qualidade garantida.',
  keywords: 'produtos infraestrutura elétrica, eletrocalhas, perfilados, leitos cabos, eletrodutos, abraçadeiras, dutos piso, rodapés metálicos',
  openGraph: {
    title: 'Produtos - Ceará Perfil | Catálogo Completo',
    description: 'Linha completa de produtos para infraestrutura elétrica com qualidade profissional.',
    url: 'https://cearaperfil.com.br/produtos',
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-quality-lg">
              Catálogo de Produtos
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-quality">
              Descubra nossa linha completa de produtos para infraestrutura elétrica. 
              Soluções profissionais com a qualidade que seu projeto merece.
            </p>
          </div>
        </div>
      </div>
      
      <ProductsSection />
    </div>
  )
}