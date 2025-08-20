'use client'

import { useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { ArrowUp } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"
import { getWhatsAppUrl } from "@/lib/utils"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
        <Toaster />
        <Sonner />
        
        {/* Floating Action Buttons */}
        <FloatingActionButton
          fabType="custom"
          position="bottom-right"
          onClick={() => window.open(getWhatsAppUrl("5511945403008", "Olá! Gostaria de saber mais sobre seus produtos."), "_blank")}
          className="bg-green-600 hover:bg-green-700 bottom-20"
        >
          <BsWhatsapp className="w-6 h-6" />
        </FloatingActionButton>
        
        {showScrollTop && (
          <FloatingActionButton
            fabType="scroll"
            position="bottom-right"
            offset="normal"
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90"
          />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  )
}