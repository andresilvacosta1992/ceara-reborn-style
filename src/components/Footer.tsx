import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
const logoUrl = "/lovable-uploads/94dc3378-d11e-4dc5-b109-de257013d848.png";

const Footer = () => {
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center">
            <a href="/" className="flex items-center justify-center space-x-2 mb-6 hover:opacity-80 transition-ceara">
              <img src={logoUrl} alt="Ceará Perfil" className="h-16 w-auto" />
            </a>
            <p className="text-sm opacity-80 mb-4 text-quality font-inter leading-relaxed">
              Mais de 15 anos fornecendo soluções em perfilados para construção civil com qualidade, agilidade e confiança.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/cearaperfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-ceara"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/cearaperfil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-ceara"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-quality-md font-playfair">Produtos</h4>
            <ul className="space-y-2">
              {productCategories.slice(0, 6).map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.url}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-ceara text-quality font-inter"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-quality-md font-playfair">Mais Produtos</h4>
            <ul className="space-y-2">
              {productCategories.slice(6).map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.url}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-ceara text-quality font-inter"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-quality-md font-playfair">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href={getWhatsAppUrl("5511945403008", "Olá! Gostaria de saber mais sobre seus produtos.")}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-ceara"
                >
                  (11) 94540-3008
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:vendas@cearaperfil.com.br"
                  className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-ceara"
                >
                  vendas@cearaperfil.com.br
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div className="text-sm opacity-80">
                  <p>R. Madeira, 39 - Vila Vivaldi</p>
                  <p>São Bernardo do Campo - SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80 text-quality font-inter">
            © {new Date().getFullYear()} Ceará Perfil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;