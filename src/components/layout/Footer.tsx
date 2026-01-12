import Link from "next/link";
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  User,
  Code,
  Award,
  Briefcase,
  Mail as MailIcon,
  ArrowUp,
  MapPin,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "/jornada", label: "Minha Jornada", icon: <User size={16} /> },
    { href: "/habilidades", label: "Habilidades", icon: <Code size={16} /> },
    { href: "/projetos", label: "Projetos", icon: <Briefcase size={16} /> },
    { href: "/certificacoes", label: "Certificações", icon: <Award size={16} /> },
    { href: "/contato", label: "Contato", icon: <MailIcon size={16} /> },
  ];

  return (
    <footer
      className={`relative pt-20 pb-10 overflow-hidden ${
        darkMode
          ? "bg-[#0B0F19] border-t border-gray-800"
          : "bg-white border-t border-gray-200"
      } transition-colors duration-300`}
    >
      {/* Background Decorations */}
      {darkMode && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <h3 className="text-2xl font-bold">
                <span className={darkMode ? "text-white" : "text-gray-900"}>Andrel</span>
                <span className="text-blue-500">.dev</span>
              </h3>
            </Link>
            <p
              className={`text-base leading-relaxed max-w-xs ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Transformando ideias complexas em experiências digitais elegantes, funcionais e de alto impacto.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <MapPin size={16} className="text-blue-500" />
              <span>Brasil</span>
              <span className="mx-2">•</span>
              <Globe size={16} className="text-blue-500" />
              <span>Remoto / Híbrido</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Navegação
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group flex items-center gap-3 text-sm transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:andrel.cilva@gmail.com"
                  className={`flex items-center gap-3 text-sm transition-colors duration-200 ${
                    darkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Mail size={18} />
                  andrel.cilva@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/andrel-carvalho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-sm transition-colors duration-200 ${
                    darkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SpeedyxBR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-sm transition-colors duration-200 ${
                    darkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Github size={18} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* CTA / Newsletter Placeholder */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Vamos Trabalhar Juntos?
            </h4>
            <p
              className={`text-sm mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Estou sempre aberto a novos projetos e desafios. Entre em contato para discutirmos sua próxima ideia.
            </p>
            <Link href="/contato">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
              >
                Iniciar Projeto
              </Button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px w-full my-8 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            © {currentYear} Andrel Carvalho. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <span className={`text-sm flex items-center gap-1.5 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
              Feito com <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> e Next.js
            </span>
            
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white"
                  : "bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white"
              }`}
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
