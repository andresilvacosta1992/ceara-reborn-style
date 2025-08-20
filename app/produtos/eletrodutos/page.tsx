import type { Metadata } from 'next'
import Eletrodutos from '@/src/pages/products/Eletrodutos'

export const metadata: Metadata = {
  title: 'Eletrodutos - Ceará Perfil | Proteção para Instalações Elétricas',
  description: 'Eletrodutos metálicos e acessórios para proteção de fiação elétrica. Diversos diâmetros e tipos para todas as aplicações.',
  keywords: 'eletrodutos, proteção fiação elétrica, tubos elétricos, eletrodutos metálicos, condutores elétricos',
  openGraph: {
    title: 'Eletrodutos - Ceará Perfil',
    description: 'Eletrodutos para proteção de instalações elétricas.',
    url: 'https://cearaperfil.com.br/produtos/eletrodutos',
  },
}

export default function EletrodutosPage() {
  return <Eletrodutos />
}