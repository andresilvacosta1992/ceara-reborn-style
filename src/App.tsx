import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import EnhancedLayout from "./components/EnhancedLayout";
import NotFound from "./pages/NotFound";
import Perfilados from "./pages/products/Perfilados";
import Eletrocalhas from "./pages/products/Eletrocalhas";
import LeitosCabos from "./pages/products/LeitosCabos";
import AcessoriosFixacao from "./pages/products/AcessoriosFixacao";
import DutosPiso from "./pages/products/DutosPiso";
import RodapesMetalicos from "./pages/products/RodapesMetalicos";
import Abracadeiras from "./pages/products/Abracadeiras";
import QuadrosComandos from "./pages/products/QuadrosComandos";
import CaixaTelefonia from "./pages/products/CaixaTelefonia";
import AbrigosIncendios from "./pages/products/AbrigosIncendios";
import Eletrodutos from "./pages/products/Eletrodutos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnhancedLayout />}>
            <Route index element={<Index />} />
            <Route path="home" element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="produtos" element={<Products />} />
            <Route path="produtos/perfilados" element={<Perfilados />} />
            <Route path="produtos/eletrocalhas" element={<Eletrocalhas />} />
            <Route path="produtos/leitos-cabos" element={<LeitosCabos />} />
            <Route path="produtos/acessorios-fixacao" element={<AcessoriosFixacao />} />
            <Route path="produtos/abracadeiras" element={<Abracadeiras />} />
            <Route path="produtos/eletrodutos" element={<Eletrodutos />} />
            <Route path="produtos/dutos-piso" element={<DutosPiso />} />
            <Route path="produtos/rodapes-metalicos" element={<RodapesMetalicos />} />
            <Route path="produtos/quadros-comandos" element={<QuadrosComandos />} />
            <Route path="produtos/caixa-telefonia" element={<CaixaTelefonia />} />
            <Route path="produtos/abrigos-incendios" element={<AbrigosIncendios />} />
            <Route path="contato" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
