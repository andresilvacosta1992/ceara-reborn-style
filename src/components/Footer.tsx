import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Ceará Perfil" className="h-12 w-12 brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">CEARÁ</h3>
                <p className="text-sm opacity-80">PERFIL</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Mais de 15 anos fornecendo soluções em perfilados para construção civil com qualidade, agilidade e confiança.
            </p>
            <div className="flex space-x-4">
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
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              {productCategories.slice(0, 6).map((product, index) => (
                <li key={index}>
                  <a 
                    href={`#${product.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-ceara"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Mais Produtos</h4>
            <ul className="space-y-2">
              {productCategories.slice(6).map((product, index) => (
                <li key={index}>
                  <a 
                    href={`#${product.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-ceara"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="https://api.whatsapp.com/send?phone=5511945403008"
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
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Ceará Perfil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;