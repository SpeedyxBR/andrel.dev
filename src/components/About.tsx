import React from "react";
import { motion } from "framer-motion";
import { Code, Lightbulb, Users, Target } from "lucide-react";

const About = ({ darkMode }: { darkMode: boolean }) => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Código Limpo",
      description:
        "Escrevo código semântico, bem estruturado e fácil de manter, seguindo as melhores práticas da indústria.",
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={24} />,
      title: "Inovação",
      description:
        "Sempre buscando novas tecnologias e soluções criativas para resolver problemas complexos.",
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Colaboração",
      description:
        "Experiência em trabalho em equipe, utilizando metodologias ágeis e controle de versão com Git.",
    },
    {
      icon: <Target className="text-purple-600" size={24} />,
      title: "Foco em Resultados",
      description:
        "Comprometido em entregar soluções que realmente funcionam e agregam valor ao negócio.",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            darkMode ? "bg-blue-400" : "bg-blue-600"
          } opacity-30`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  : "text-gray-900"
              }`}
            >
              Sobre Mim
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Desenvolvedor em formação apaixonado por criar soluções digitais
              modernas e eficientes
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg">
              <p
                className={`${
                  darkMode ? "text-gray-200" : "text-gray-700"
                } leading-relaxed mb-6`}
              >
                Sou um <strong>Desenvolvedor Web Full Stack</strong> em formação,
                focado em criar experiências digitais excepcionais. Minha
                jornada começou com curiosidade sobre como a web funciona e se
                transformou em uma paixão por resolver problemas através do
                código.
              </p>
              <p
                className={`${
                  darkMode ? "text-gray-200" : "text-gray-700"
                } leading-relaxed mb-6`}
              >
                Especializo-me em <strong>React</strong> e{" "}
                <strong>TypeScript</strong> no frontend, criando interfaces
                intuitivas e responsivas. No backend, trabalho com
                <strong> Node.js</strong> e <strong>Next.js</strong>,
                desenvolvendo APIs robustas e escaláveis.
              </p>
              <p className={`${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                Acredito que o código deve ser não apenas funcional, mas também
                limpo, testável e mantível. Cada projeto é uma oportunidade de
                aprender algo novo e aplicar as melhores práticas de
                desenvolvimento.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {highlight.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
