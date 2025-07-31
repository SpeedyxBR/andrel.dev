import React, { useEffect, useState } from "react";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  const [langIndex, setLangIndex] = useState(0);

  const descriptions = [
    { lang: "pt", text: "Desenvolvedor Web Fullstack" },
    { lang: "en", text: "Fullstack Web Developer" },
    { lang: "es", text: "Desarrollador Web Fullstack" },
    { lang: "fr", text: "Développeur Web Fullstack" },
    { lang: "de", text: "Fullstack Webentwickler" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % descriptions.length);
    }, 3000); // troca a cada 3s
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-portfolio.pdf";
    link.download = "Curriculo-Desenvolvedor-Fullstack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* FOTO EM CÍRCULO */}
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-blue-600">
            <img
              src="/andrel.jpeg"
              alt="Andrel Carvalho"
              className="object-cover w-full h-full"
            />
          </div>

          {/* TÍTULO */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
            Desenvolvedor
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Web Fullstack
            </span>
          </h1>

          {/* DESCRIÇÃO EM LÍNGUAS */}
          <p className="text-xl mb-6 transition-opacity duration-500 h-8">
            <span lang={descriptions[langIndex].lang}>
              {descriptions[langIndex].text}
            </span>
          </p>

          {/* TEXTO BASE */}
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Criando experiências digitais com{" "}
            <span className="font-semibold" style={{ color: "#61DAFB" }}>
              React
            </span>
            ,{" "}
            <span className="font-semibold" style={{ color: "#3C873A" }}>
              Node.js
            </span>{" "}
            e{" "}
            <span className="font-semibold" style={{ color: "#3178C6" }}>
              TypeScript
            </span>
            . Focado em código limpo, performance e experiência do usuário.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={handleDownloadCV}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              Baixar Currículo
            </button>
            <button
              onClick={scrollToProjects}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
            >
              Ver Projetos
            </button>
          </div>

          {/* ÍCONES */}
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com/SpeedyxBR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-gray-900 transform hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/andrel-carvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-blue-600 transform hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="andrel.cilva@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-green-600 transform hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* ÍCONE DE ROLAGEM */}
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
