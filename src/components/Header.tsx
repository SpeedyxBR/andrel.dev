import React, { useState, useEffect } from "react";
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
    link.href = "/cv-portfolio.pdf";
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
    { id: "about", label: "Sobre", icon: <User size={20} /> },
    { id: "skills", label: "Habilidades", icon: <Code size={20} /> },
    { id: "certifications", label: "Certificações", icon: <Award size={20} /> },
    { id: "projects", label: "Projetos", icon: <Briefcase size={20} /> },
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
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Andrel <span className="text-blue-600">Dev</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group text-black dark:text-gray-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-blue-600 group-hover:text-blue-500 transition-colors duration-200">
                    {item.icon}
                  </span>
                  <span className="z-10 relative">{item.label}</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
              >
                <Download size={16} />
                CV
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg border ${
                  darkMode
                    ? "border-gray-700 bg-gray-800 text-white"
                    : "border-gray-300 bg-white text-gray-900"
                } hover:bg-blue-50 transition-colors duration-200 flex items-center`}
                aria-label="Alternar tema"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
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
                } hover:bg-blue-50 transition-colors duration-200 flex items-center`}
                aria-label="Alternar tema"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`text-gray-700 hover:text-blue-600 ${
                  darkMode ? "text-white hover:text-blue-300" : ""
                } transition-colors duration-200 flex items-center`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-[9999] transform bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white shadow-lg border-l border-gray-700 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6 animate-fade-in-right">
          {/* Profile Section */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-700">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600">
              <img
                src="/andrel.jpeg"
                alt="Andrel Carvalho"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Andrel Carvalho</h2>
              <p className="text-sm text-gray-300">
                Desenvolvedor Web Fullstack
              </p>
            </div>
          </div>

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group text-left text-gray-200 hover:text-blue-400 transition-colors duration-200 flex items-center gap-3 py-2"
            >
              <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                {item.icon}
              </span>
              <span className="z-10 relative">{item.label}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          ))}
          <button
            onClick={handleDownloadCV}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 w-fit"
          >
            <Download size={16} />
            Baixar CV
          </button>
        </nav>
      </div>

      {/* Overlay para fechar o menu clicando fora */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-[9998]"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
