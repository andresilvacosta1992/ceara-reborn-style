import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { ArrowUp } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"
import { getWhatsAppUrl } from "@/lib/utils"
import ClientProviders from '@/components/ClientProviders'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Ceará Perfil - Soluções em Infraestrutura Elétrica',
  description: 'Eletrocalhas, perfilados, leitos para cabos e eletrodutos em São Bernardo do Campo - SP. Mais de 15 anos fornecendo soluções em infraestrutura elétrica com qualidade garantida. Solicite seu orçamento!',
  keywords: 'eletrocalhas, perfilados, leitos para cabos, eletrodutos, infraestrutura elétrica, abraçadeiras, dutos de piso, São Bernardo do Campo, SP',
  authors: [{ name: 'Ceará Perfil' }],
  creator: 'Ceará Perfil',
  publisher: 'Ceará Perfil',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cearaperfil.com.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cearaperfil.com.br',
    siteName: 'Ceará Perfil',
    title: 'Ceará Perfil - Soluções em Infraestrutura Elétrica',
    description: 'Eletrocalhas, perfilados e eletrodutos em São Bernardo do Campo - SP. Especialistas em infraestrutura elétrica há mais de 15 anos. Solicite seu orçamento!',
    images: [
      {
        url: '/lovable-uploads/2be4463d-78ac-47bd-8d07-3dbde9601d00.png',
        width: 1200,
        height: 630,
        alt: 'Ceará Perfil - Infraestrutura Elétrica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceará Perfil - Soluções em Infraestrutura Elétrica',
    description: 'Eletrocalhas, perfilados e eletrodutos em São Bernardo do Campo - SP. Especialistas em infraestrutura elétrica há mais de 15 anos.',
    images: ['/lovable-uploads/2be4463d-78ac-47bd-8d07-3dbde9601d00.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/lovable-uploads/2be4463d-78ac-47bd-8d07-3dbde9601d00.png" type="image/png" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ceará Perfil",
              "description": "Especialistas em soluções para infraestrutura elétrica: eletrocalhas, perfilados, leitos para cabos e eletrodutos",
              "url": "https://cearaperfil.com.br",
              "logo": "/lovable-uploads/2be4463d-78ac-47bd-8d07-3dbde9601d00.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Madeira, 39 - Vila Vivaldi",
                "addressLocality": "São Bernardo do Campo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-94540-3008",
                "contactType": "sales",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://wa.me/5511945403008"
              ],
              "foundingDate": "2008",
              "numberOfEmployees": "10-50",
              "areaServed": {
                "@type": "Place",
                "name": "Brasil"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ClientProviders>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  )
}