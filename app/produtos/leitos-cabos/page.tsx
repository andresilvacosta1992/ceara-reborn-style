import type { Metadata } from 'next'
import LeitosCabos from '@/src/pages/products/LeitosCabos'

export const metadata: Metadata = {
  title: 'Leitos para Cabos - Ceará Perfil | Suporte Estrutural para Cabos',
  description: 'Leitos para cabos elétricos com excelente capacidade de suporte. Ideais para instalações industriais e comerciais de grande porte.',
  keywords: 'leitos cabos, suporte cabos elétricos, bandeja cabos, infraestrutura industrial, leitos metálicos',
  openGraph: {
    title: 'Leitos para Cabos - Ceará Perfil',
    description: 'Leitos para cabos elétricos com alta capacidade de suporte.',
    url: 'https://cearaperfil.com.br/produtos/leitos-cabos',
  },
}

export default function LeitosCabosPage() {
  return <LeitosCabos />
}