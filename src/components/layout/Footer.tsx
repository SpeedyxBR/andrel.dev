import Link from "next/link";
import {
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
import Button from "@/components/ui/Button";

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "/jornada", label: "Jornada", icon: <User size={16} /> },
    { href: "/habilidades", label: "Skills", icon: <Code size={16} /> },
    { href: "/projetos", label: "Projetos", icon: <Briefcase size={16} /> },
    { href: "/certificacoes", label: "Certificações", icon: <Award size={16} /> },
    { href: "/contato", label: "Contato", icon: <MailIcon size={16} /> },
  ];

  return (
    <footer
      className={`relative pt-12 md:pt-20 pb-8 md:pb-10 overflow-hidden ${
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Info - Full width on mobile, 4 cols on desktop */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="block">
              <h3 className="text-2xl font-bold">
                <span className={darkMode ? "text-white" : "text-gray-900"}>Andrel</span>
                <span className="text-blue-500">.dev</span>
              </h3>
            </Link>
            <p
              className={`text-sm md:text-base leading-relaxed max-w-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Transformando ideias complexas em experiências digitais elegantes, funcionais e de alto impacto.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-blue-500" />
                <span>Brasil</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe size={16} className="text-blue-500" />
                <span>Remoto / Híbrido</span>
              </div>
            </div>
          </div>

          {/* Links & Contact - 2 cols on mobile, 5 cols on desktop */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-12">
            {/* Navigation */}
            <div>
              <h4 className={`text-lg font-bold mb-4 md:mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Navegação
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group flex items-center gap-2 md:gap-3 text-sm transition-colors duration-200 ${
                        darkMode
                          ? "text-gray-400 hover:text-blue-400"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      <span className="text-blue-500/70 group-hover:text-blue-500 transition-colors">
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
              <h4 className={`text-lg font-bold mb-4 md:mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Contato
              </h4>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <a
                    href="mailto:andrel.cilva@gmail.com"
                    className={`flex items-center gap-2 md:gap-3 text-sm transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Mail size={18} className="shrink-0 text-blue-500/70" />
                    <span className="truncate">Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/andrel-carvalho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 md:gap-3 text-sm transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Linkedin size={18} className="shrink-0 text-blue-500/70" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/SpeedyxBR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 md:gap-3 text-sm transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Github size={18} className="shrink-0 text-blue-500/70" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA - Full width on mobile/tablet, 3 cols on desktop */}
          <div className="lg:col-span-3">
            <div className={`p-6 rounded-2xl ${
              darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-blue-50 border border-blue-100"
            }`}>
              <h4 className={`text-lg font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Vamos conversar?
              </h4>
              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tem um projeto em mente? Estou disponível para novos desafios.
              </p>
              <Link href="/contato" className="block">
                <Button 
                  fullWidth={true}
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                >
                  Iniciar Projeto
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px w-full my-6 md:my-8 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`} />

        {/* Bottom Bar - Stacked on mobile, row on desktop */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className={`text-xs md:text-sm text-center md:text-left ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            © {currentYear} Andrel Carvalho. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              darkMode
                ? "bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-800"
                : "bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200"
            }`}
          >
            Voltar ao topo
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
