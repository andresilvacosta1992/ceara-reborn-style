import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/utils";
const logoUrl = "/lovable-uploads/94dc3378-d11e-4dc5-b109-de257013d848.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Catálogo", href: "/produtos" },
    { label: "Contatos", href: "/contato" },
  ];

  const productCategories = [
    { name: "Perfilados", url: "/produtos/perfilados" },
    { name: "Eletrocalhas", url: "/produtos/eletrocalhas" }, 
    { name: "Leitos para cabos", url: "/produtos/leitos-cabos" },
    { name: "Acessórios para fixação", url: "/produtos/acessorios-fixacao" },
    { name: "Abraçadeiras", url: "/produtos/abracadeiras" },
    { name: "Eletrodutos", url: "/produtos/eletrodutos" },
    { name: "Dutos de piso", url: "/produtos/dutos-piso" },
    { name: "Rodapés Metálicos", url: "/produtos/rodapes-metalicos" },
    { name: "Quadros de comandos", url: "/produtos/quadros-comandos" },
    { name: "Caixa para telefonia", url: "/produtos/caixa-telefonia" },
    { name: "Abrigos para incêndios", url: "/produtos/abrigos-incendios" }
  ];

  return (
    <>
      {/* Top Header - Hidden on mobile */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4 text-center md:text-left">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(11) 94540-3008</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span className="text-xs md:text-sm">vendas@cearaperfil.com.br</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1 md:mt-0">
            <a href="https://facebook.com/cearaperfil" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Facebook">
              <Facebook className="w-4 h-4 cursor-pointer hover:opacity-80 transition-ceara" />
            </a>
            <a href="https://instagram.com/cearaperfil" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Instagram">
              <Instagram className="w-4 h-4 cursor-pointer hover:opacity-80 transition-ceara" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-ceara z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu de navegação"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo - Centered on mobile */}
            <a href="/" className="flex items-center hover:opacity-80 transition-ceara md:flex-none flex-1 justify-center md:justify-start">
              <div className="relative">
                <img src={logoUrl} alt="Ceará Perfil" className="h-16 md:h-20 w-auto drop-shadow-sm" />
              </div>
            </a>

            {/* Mobile WhatsApp Button */}
            <div className="md:hidden">
              <Button 
                variant="cta" 
                size="sm"
                className="interactive-glow shadow-success px-3"
                onClick={() => window.open(getWhatsAppUrl("5511945403008", "Olá! Gostaria de solicitar um orçamento."), "_blank")}
                aria-label="Solicitar orçamento via WhatsApp"
              >
                <BsWhatsapp className="w-4 h-4" />
              </Button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-ceara font-medium text-quality relative px-3 py-2 rounded-md hover:bg-muted/50 font-inter"
                  >
                    {item.label}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </a>
                  {index < navItems.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-4 bg-border opacity-30"></div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="cta" 
                size="lg" 
                className="interactive-glow shadow-success"
                onClick={() => window.open(getWhatsAppUrl("5511945403008", "Olá! Gostaria de solicitar um orçamento."), "_blank")}
              >
                <BsWhatsapp className="w-5 h-5" />
                <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-ceara"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="cta" 
                className="mobile-full mt-4"
                onClick={() => window.open(getWhatsAppUrl("5511945403008", "Olá! Gostaria de solicitar um orçamento completo."), "_blank")}
              >
                <BsWhatsapp className="w-5 h-5" />
                <span className="relative z-10">SOLICITAR ORÇAMENTO COMPLETO</span>
              </Button>
            </nav>
          </div>
        )}

        {/* Product Categories Bar */}
        <div className="bg-gradient-to-r from-primary/95 to-primary text-primary-foreground py-3 border-t border-primary-foreground/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {productCategories.map((category, index) => (
                <div key={index} className="relative group">
                  <a
                    href={category.url}
                    className="hover:text-white transition-ceara px-3 py-1.5 rounded-md text-quality hover:bg-[hsl(var(--ceara-blue-hover))] relative inline-flex items-center"
                  >
                    <span className="relative z-10">{category.name}</span>
                    <div className="absolute inset-0 bg-[hsl(var(--ceara-blue-soft)/0.2)] rounded-md scale-0 group-hover:scale-100 transition-transform"></div>
                  </a>
                  {index < productCategories.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-px h-3 bg-primary-foreground/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;