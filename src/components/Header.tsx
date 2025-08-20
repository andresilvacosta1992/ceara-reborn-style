import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
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
    "Perfilados",
    "Eletrocalhas", 
    "Leitos para cabos",
    "Acessórios para fixação",
    "Abraçadeiras",
    "Eletrodutos",
    "Dutos de piso",
    "Rodapés Metálicos",
    "Quadros de comandos",
    "Caixa para telefonia",
    "Abrigos para incêndios"
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(11) 94540-3008</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>vendas@cearaperfil.com.br</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Facebook className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Instagram className="w-4 h-4 cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-ceara z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center hover:opacity-80 transition-ceara">
              <div className="relative">
                <img src={logoUrl} alt="Ceará Perfil" className="h-20 w-auto drop-shadow-sm" />
              </div>
            </a>

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

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="btn-success">
                SOLICITAR ORÇAMENTO
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Product Categories Bar */}
        <div className="bg-gradient-to-r from-primary/95 to-primary text-primary-foreground py-3 border-t border-primary-foreground/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {productCategories.map((category, index) => (
                <div key={index} className="relative group">
                  <a
                    href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-accent transition-ceara px-3 py-1.5 rounded-md text-quality hover:bg-white/10 relative inline-flex items-center"
                  >
                    <span className="relative z-10">{category}</span>
                    <div className="absolute inset-0 bg-white/5 rounded-md scale-0 group-hover:scale-100 transition-transform"></div>
                  </a>
                  {index < productCategories.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-px h-3 bg-primary-foreground/20"></div>
                  )}
                </div>
              ))}
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
              <Button className="btn-success w-full mt-4">
                SOLICITAR ORÇAMENTO
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;