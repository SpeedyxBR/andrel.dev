import React, { useEffect, useState } from "react";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

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
      className={`min-h-screen flex items-center justify-center pt-16 transition-colors duration-500 overflow-hidden relative ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
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
            Criando experiências digitais com {" "}
            <span className="font-semibold text-[#61DAFB]">React</span>, {" "}
            <span className="font-semibold text-[#3C873A]">Node.js</span> e {" "}
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
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
            >
              Ver Projetos
            </button>
          </div>

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
              href="mailto:andrel.cilva@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-green-600 transform hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce cursor-pointer" onClick={scrollToProjects}>
            <ChevronDown size={32} className="text-gray-400 mx-auto" />
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          min-height: 100vh;
          background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f);
          overflow-x: hidden;
        }

        .stars {
          width: 1px;
          height: 1px;
          position: absolute;
          background: white;
          box-shadow: 2vw 5vh 2px white, 10vw 8vh 2px white, 15vw 15vh 1px white,
            22vw 22vh 1px white, 28vw 12vh 2px white, 32vw 32vh 1px white,
            38vw 18vh 2px white, 42vw 35vh 1px white, 48vw 25vh 2px white,
            53vw 42vh 1px white, 58vw 15vh 2px white, 63vw 38vh 1px white,
            68vw 28vh 2px white, 73vw 45vh 1px white, 78vw 32vh 2px white,
            83vw 48vh 1px white, 88vw 20vh 2px white, 93vw 52vh 1px white,
            98vw 35vh 2px white, 5vw 60vh 1px white, 12vw 65vh 2px white,
            18vw 72vh 1px white, 25vw 78vh 2px white, 30vw 85vh 1px white,
            35vw 68vh 2px white, 40vw 82vh 1px white, 45vw 92vh 2px white,
            50vw 75vh 1px white, 55vw 88vh 2px white, 60vw 95vh 1px white,
            65vw 72vh 2px white, 70vw 85vh 1px white, 75vw 78vh 2px white,
            80vw 92vh 1px white, 85vw 82vh 1px white, 90vw 88vh 1px white,
            95vw 75vh 2px white;
          animation: twinkle 8s infinite linear;
        }

        .shooting-star {
          position: absolute;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, white, transparent);
          animation: shoot 3s infinite ease-in;
        }

        .shooting-star:nth-child(1) {
          top: 20%;
          left: -100px;
          animation-delay: 0s;
        }

        .shooting-star:nth-child(2) {
          top: 35%;
          left: -100px;
          animation-delay: 1s;
        }

        .shooting-star:nth-child(3) {
          top: 50%;
          left: -100px;
          animation-delay: 2s;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }

        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(25deg);
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(50vh) rotate(25deg);
            opacity: 0;
          }
        }

        .stars::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          box-shadow: 8vw 12vh 2px white, 16vw 18vh 1px white, 24vw 25vh 2px white,
            33vw 15vh 1px white, 41vw 28vh 2px white, 49vw 35vh 1px white,
            57vw 22vh 2px white, 65vw 42vh 1px white, 73vw 28vh 2px white,
            81vw 48vh 1px white, 89vw 32vh 2px white, 97vw 45vh 1px white,
            3vw 68vh 2px white, 11vw 75vh 1px white, 19vw 82vh 2px white,
            27vw 88vh 1px white, 35vw 72vh 2px white, 43vw 85vh 1px white,
            51vw 92vh 2px white, 59vw 78vh 1px white;
          animation: twinkle 6s infinite linear reverse;
        }

        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
