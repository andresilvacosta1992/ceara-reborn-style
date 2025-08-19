import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Catálogo", href: "#produtos" },
    { label: "Contatos", href: "#contato" },
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
      <header className="bg-background shadow-ceara sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Ceará Perfil" className="h-12 w-12" />
              <div>
                <h1 className="text-xl font-bold text-ceara-gray">CEARÁ</h1>
                <p className="text-sm text-muted-foreground">PERFIL</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-ceara font-medium"
                >
                  {item.label}
                </a>
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
        <div className="bg-primary/95 text-primary-foreground py-3">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {productCategories.map((category, index) => (
                <a
                  key={index}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-accent transition-ceara px-2 py-1 rounded"
                >
                  {category}
                </a>
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