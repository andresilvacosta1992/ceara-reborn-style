import type { Metadata } from 'next'
import Eletrocalhas from '@/src/pages/products/Eletrocalhas'

export const metadata: Metadata = {
  title: 'Eletrocalhas - Ceará Perfil | Sistemas de Distribuição Elétrica',
  description: 'Eletrocalhas perfuradas e lisas para organização de cabos elétricos. Diversos tamanhos e acabamentos. Qualidade profissional garantida.',
  keywords: 'eletrocalhas, calhas elétricas, organização cabos, sistemas distribuição elétrica, eletrocalhas perfuradas',
  openGraph: {
    title: 'Eletrocalhas - Ceará Perfil',
    description: 'Sistemas de eletrocalhas para organização de cabos elétricos.',
    url: 'https://cearaperfil.com.br/produtos/eletrocalhas',
  },
}

export default function EletrocalhasPage() {
  return <Eletrocalhas />
}