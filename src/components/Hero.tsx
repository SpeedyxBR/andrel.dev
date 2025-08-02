import React, { useEffect, useState } from "react";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

// Estilos animados para os fundos
import "../styles/background-dark.scss";
import "../styles/background-light.scss";

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  const greetings = [
    { lang: "pt", text: "Olá, eu sou o Andrel" },
    { lang: "en", text: "Hi, I'm Andrel" },
    { lang: "es", text: "Hola, soy Andrel" },
    { lang: "fr", text: "Salut, je suis Andrel" },
    { lang: "de", text: "Hallo, ich bin Andrel" },
  ];

  const [index, setIndex] = useState(0);
  const [greeting, setGreeting] = useState(greetings[0].text);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setGreeting(greetings[index].text);
  }, [index]);

  // ⬇️ Aplica classe no <body> dinamicamente
  useEffect(() => {
    document.body.classList.toggle("dark-background", darkMode);
    document.body.classList.toggle("light-background", !darkMode);
  }, [darkMode]);

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
      className={`min-h-screen flex items-center justify-center pt-16 transition-colors duration-500 relative ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="stars"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-blue-600 animate-float">
            <img
              src="/andrel.jpeg"
              alt="Andrel Carvalho"
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {greeting}
            <span className="blinking-cursor">|</span>
          </h1>

          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Criando experiências digitais com{" "}
            <span className="font-semibold text-[#61DAFB]">React</span>,{" "}
            <span className="font-semibold text-[#3C873A]">Node.js</span> e{" "}
            <span className="font-semibold text-[#3178C6]">TypeScript</span>. Focado em código limpo, performance e experiência do usuário.
          </p>

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
              className={`border-2 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 ${
                darkMode
                  ? "border-gray-500 text-gray-200"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              Ver Projetos
            </button>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com/SpeedyxBR"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${
                darkMode ? "bg-gray-800 text-white hover:text-blue-400" : "bg-white text-gray-700 hover:text-gray-900"
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/andrel-carvalho"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${
                darkMode ? "bg-gray-800 text-white hover:text-blue-400" : "bg-white text-gray-700 hover:text-blue-600"
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:andrel.cilva@gmail.com"
              className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${
                darkMode ? "bg-gray-800 text-white hover:text-green-400" : "bg-white text-gray-700 hover:text-green-600"
              }`}
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce cursor-pointer" onClick={scrollToProjects}>
            <ChevronDown size={32} className={`mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
