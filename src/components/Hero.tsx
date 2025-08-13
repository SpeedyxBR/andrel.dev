import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Button from "./ui/Button";

// Estilos animados para os fundos
import "../styles/background-dark.scss";
import "../styles/background-light.scss";

const greetings = [
  { lang: "pt", text: "Olá, eu sou o Andrel" },
  { lang: "en", text: "Hi, I'm Andrel" },
  { lang: "es", text: "Hola, soy Andrel" },
  { lang: "fr", text: "Salut, je suis Andrel" },
  { lang: "de", text: "Hallo, ich bin Andrel" },
];

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  const [index, setIndex] = useState(0);
  const [greeting, setGreeting] = useState(greetings[0].text);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setGreeting(greetings[index].text);
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReducedMotion(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ⬇️ Aplica classe no <body> dinamicamente
  useEffect(() => {
    document.body.classList.toggle("dark-background", darkMode);
    document.body.classList.toggle("light-background", !darkMode);
  }, [darkMode]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Andrel_Carvalho.CV.pdf.pdf";
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
      aria-labelledby="hero-title"
      className={`min-h-screen flex items-center justify-center pt-16 transition-colors duration-500 relative ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="stars" aria-hidden="true"></div>
      {!reducedMotion && (
        <>
          <div className="shooting-star" aria-hidden="true"></div>
          <div className="shooting-star" aria-hidden="true"></div>
          <div className="shooting-star" aria-hidden="true"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagem - Lado esquerdo em desktop */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="w-56 h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600"
              animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={
                reducedMotion
                  ? undefined
                  : { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <img
                src="/andrel.jpeg"
                alt="Foto de perfil de Andrel Carvalho"
                className="object-cover w-full h-full"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={320}
                height={320}
                sizes="(min-width: 1024px) 20rem, 14rem"
              />
            </motion.div>
          </motion.div>

          {/* Informações - Lado direito em desktop */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              id="hero-title"
              aria-live="polite"
            >
              {greeting}
              <span className="blinking-cursor" aria-hidden="true">
                |
              </span>
            </motion.h1>

            <motion.h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Desenvolvedor Web Fullstack
            </motion.h2>

            <motion.p
              className="text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Criando experiências digitais com{" "}
              <span className="font-semibold text-[#61DAFB]">React</span>,{" "}
              <span className="font-semibold text-[#3C873A]">Node.js</span> ,{" "}
              <span className="font-semibold text-[#3178C6]">TypeScript</span> e{" "}
              <span className="font-semibold text-[#353d46]">Next.js</span>.{" "}
              Focado em código limpo, performance e experiência do usuário.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10 lg:-translate-x-11"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button
                onClick={handleDownloadCV}
                icon={<Download size={20} />}
                size="lg"
                className="w-56 sm:w-64 whitespace-nowrap"
                aria-label="Baixar currículo em PDF"
              >
                Baixar Currículo
              </Button>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className={`${
                  darkMode ? "border-gray-500 text-gray-200" : ""
                } w-44 sm:w-52 whitespace-nowrap`}
                aria-label="Ir para a seção de projetos"
              >
                Ver Projetos
              </Button>
            </motion.div>

            <motion.nav
              className="flex justify-center gap-8 mb-20 lg:-translate-x-11"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              aria-label="Redes sociais"
            >
              <motion.a
                href="https://github.com/SpeedyxBR"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-800 text-white hover:text-blue-400"
                    : "bg-white text-gray-700 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Abrir GitHub de Andrel"
                title="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/andrel-carvalho"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-800 text-white hover:text-blue-400"
                    : "bg-white text-gray-700 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Abrir LinkedIn de Andrel"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:andrel.cilva@gmail.com"
                className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-800 text-white hover:text-green-400"
                    : "bg-white text-gray-700 hover:text-green-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Enviar e-mail para Andrel"
                title="E-mail"
              >
                <Mail size={24} />
              </motion.a>
            </motion.nav>

            <motion.div
              className={`flex justify-center lg:justify-start cursor-pointer mt-8 ${
                reducedMotion ? "" : "animate-bounce"
              }`}
              onClick={scrollToProjects}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <ChevronDown
                size={32}
                className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
