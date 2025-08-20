import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Eletrodutos = lazy(() => import("./pages/products/Eletrodutos"));
const QuadrosComandos = lazy(() => import("./pages/products/QuadrosComandos"));

// Loading component with inline styles for critical path
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/produtos/eletrodutos" element={<Eletrodutos />} />
            <Route path="/produtos/quadros-comandos" element={<QuadrosComandos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingActionButton 
        fabType="chat" 
        onClick={() => window.open('https://wa.me/5585987654321?text=Olá! Gostaria de mais informações sobre os produtos.', '_blank')}
      />
      <Toaster />
    </div>
  );
}

export default App;