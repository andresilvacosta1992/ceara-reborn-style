import type { Metadata } from 'next'
import Perfilados from '@/src/pages/products/Perfilados'

export const metadata: Metadata = {
  title: 'Perfilados - Ceará Perfil | Estruturas Metálicas para Eletrificação',
  description: 'Perfilados metálicos de alta qualidade para suporte de instalações elétricas. Durabilidade e resistência garantidas. Solicite seu orçamento!',
  keywords: 'perfilados metálicos, estruturas elétricas, suporte instalações, perfis metálicos, infraestrutura',
  openGraph: {
    title: 'Perfilados - Ceará Perfil',
    description: 'Perfilados metálicos para suporte de instalações elétricas.',
    url: 'https://cearaperfil.com.br/produtos/perfilados',
  },
}

export default function PerfiladosPage() {
  return <Perfilados />
}