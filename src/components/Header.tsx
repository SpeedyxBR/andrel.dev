import React, { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

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
    // Simulação do download - em produção, você substituiria por um link real para seu PDF
    const link = document.createElement("a");
    link.href = "/cv-portfolio.pdf"; // Substitua pelo caminho real do seu CV
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

  return (
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
              Dev<span className="text-blue-600">Portfolio</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contato
            </button>
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
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                darkMode ? "text-white hover:text-blue-300" : ""
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Contato
              </button>
              <button
                onClick={handleDownloadCV}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 w-fit"
              >
                <Download size={16} />
                Baixar CV
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
