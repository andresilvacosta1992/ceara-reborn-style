import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import EnhancedLayout from "./components/EnhancedLayout";
import { PageLoadingFallback } from "@/components/LoadingSuspense";
import {
  LazyIndex,
  LazyHome,
  LazyAbout,
  LazyProducts,
  LazyContact,
  LazyNotFound,
  LazyPerfilados,
  LazyEletrocalhas,
  LazyLeitosCabos,
  LazyAcessoriosFixacao,
  LazyAbracadeiras,
  LazyEletrodutos,
  LazyDutosPiso,
  LazyRodapesMetalicos,
  LazyQuadrosComandos,
  LazyCaixaTelefonia,
  LazyAbrigosIncendios
} from "@/components/LazyPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnhancedLayout />}>
            <Route 
              index 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyIndex />
                </Suspense>
              } 
            />
            <Route 
              path="home" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyHome />
                </Suspense>
              } 
            />
            <Route 
              path="sobre" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyAbout />
                </Suspense>
              } 
            />
            <Route 
              path="produtos" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyProducts />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/perfilados" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyPerfilados />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/eletrocalhas" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyEletrocalhas />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/leitos-cabos" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyLeitosCabos />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/acessorios-fixacao" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyAcessoriosFixacao />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/abracadeiras" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyAbracadeiras />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/eletrodutos" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyEletrodutos />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/dutos-piso" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyDutosPiso />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/rodapes-metalicos" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyRodapesMetalicos />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/quadros-comandos" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyQuadrosComandos />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/caixa-telefonia" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyCaixaTelefonia />
                </Suspense>
              } 
            />
            <Route 
              path="produtos/abrigos-incendios" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyAbrigosIncendios />
                </Suspense>
              } 
            />
            <Route 
              path="contato" 
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <LazyContact />
                </Suspense>
              } 
            />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route 
            path="*" 
            element={
              <Suspense fallback={<PageLoadingFallback />}>
                <LazyNotFound />
              </Suspense>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
