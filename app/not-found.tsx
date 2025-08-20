import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Página não encontrada | Ceará Perfil',
  description: 'A página que você procura não foi encontrada. Retorne à página inicial da Ceará Perfil.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Página não encontrada</p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}