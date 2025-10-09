import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Download,
  Sun,
  Moon,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Award,
} from "lucide-react";

const Header = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Andrel_Carvalho.CV.pdf (4).pdf";
    link.download = "Curriculo-Desenvolvedor-Fullstack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "Minha Jornada", icon: <User size={20} /> },
    { id: "skills", label: "Habilidades", icon: <Code size={20} /> },
    { id: "projects", label: "Projetos", icon: <Briefcase size={20} /> },
    { id: "certifications", label: "Certificações", icon: <Award size={20} /> },
    { id: "contact", label: "Contato", icon: <Mail size={20} /> },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
              : "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 header-nav"
          role="navigation"
          aria-label="Navegação principal"
        >
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-lg sm:text-xl ipad:text-xl lg:text-xl font-bold hover:scale-105 transition-transform duration-200 cursor-pointer header-logo ${
                  darkMode ? "text-white" : "text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded`}
                aria-label="Ir para o início da página"
              >
                Andrel <span className="text-blue-600">Carvalho</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex ipad:flex lg:flex items-center space-x-6 sm:space-x-8 ipad:space-x-8 lg:space-x-8"
              role="menubar"
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group text-black dark:text-gray-200 transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                  role="menuitem"
                  aria-label={`Ir para a seção ${item.label}`}
                >
                  <span
                    className="text-blue-600 group-hover:text-blue-500 transition-colors duration-200"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span className="z-10 relative">{item.label}</span>
                  <span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                    aria-hidden="true"
                  />
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Baixar currículo em PDF"
              >
                <Download size={16} aria-hidden="true" />
                CV
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg border ${
                  darkMode
                    ? "border-gray-700 bg-gray-800 text-white"
                    : "border-gray-300 bg-white text-gray-900"
                } hover:bg-blue-50 transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                aria-label={
                  darkMode ? "Ativar modo claro" : "Ativar modo escuro"
                }
                aria-pressed={darkMode}
              >
                {darkMode ? (
                  <Sun size={20} aria-hidden="true" />
                ) : (
                  <Moon size={20} aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg border ${
                  darkMode
                    ? "border-gray-700 bg-gray-800 text-white"
                    : "border-gray-300 bg-white text-gray-900"
                } hover:bg-blue-50 transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                aria-label={
                  darkMode ? "Ativar modo claro" : "Ativar modo escuro"
                }
                aria-pressed={darkMode}
              >
                {darkMode ? (
                  <Sun size={20} aria-hidden="true" />
                ) : (
                  <Moon size={20} aria-hidden="true" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`text-gray-700 hover:text-blue-600 ${
                  darkMode ? "text-white hover:text-blue-300" : ""
                } transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded`}
                aria-label={
                  isMenuOpen
                    ? "Fechar menu de navegação"
                    : "Abrir menu de navegação"
                }
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMenuOpen ? (
                  <X size={24} aria-hidden="true" />
                ) : (
                  <Menu size={24} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className={`fixed top-0 right-0 h-full w-80 z-[9999] ${
              darkMode
                ? "bg-gradient-to-b from-gray-900 via-gray-800 to-black"
                : "bg-gradient-to-b from-white via-gray-50 to-gray-100"
            } shadow-2xl border-l ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação móvel"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                darkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-200"
              } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              aria-label="Fechar menu de navegação"
            >
              <X size={24} aria-hidden="true" />
            </motion.button>

            <nav className="flex flex-col p-6 space-y-6 h-full">
              {/* Profile Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`flex items-center gap-4 pb-6 border-b ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-600 shadow-lg"
                >
                  <img
                    src="/andrel.jpeg"
                    alt="Andrel Carvalho"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <div>
                  <h2
                    className={`text-lg font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Andrel Carvalho
                  </h2>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Desenvolvedor Web Full Stack
                  </p>
                </div>
              </motion.div>

              {/* Menu Items */}
              <div className="flex-1 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative group text-left w-full p-4 rounded-xl transition-all duration-200 flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      darkMode
                        ? "text-gray-200 hover:text-blue-400 hover:bg-gray-800/50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    role="menuitem"
                    aria-label={`Ir para a seção ${item.label}`}
                  >
                    <motion.span
                      whileHover={{ rotate: 5 }}
                      className={`p-2 rounded-lg ${
                        darkMode
                          ? "bg-blue-600/20 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="font-medium">{item.label}</span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 origin-left"
                    />
                  </motion.button>
                ))}
              </div>

              {/* Download CV Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-3 justify-center shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Baixar currículo em PDF"
              >
                <Download size={20} />
                Baixar Currículo
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para fechar o menu clicando fora */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-30 z-[9998] backdrop-blur-sm"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
