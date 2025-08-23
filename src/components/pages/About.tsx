import React from "react";
import { motion } from "framer-motion";
import { Code, BookOpen, Laptop, Rocket, Trophy } from "lucide-react";
import { Particles } from "../ui/Particles";

const About = ({ darkMode }: { darkMode: boolean }) => {
  const timeline = [
    {
      year: "2007-2010",
      title: "Fundação e Desenvolvimento de Habilidades",
      description:
        "Minha paixão pela tecnologia nasceu na infância, formatando e otimizando computadores com Windows. Em 2020, iniciei um curso de francês de três anos, desenvolvendo disciplina e capacidade de processar informações complexas.",
      icon: <BookOpen className="text-white w-6 h-6" />,
      category: "Fundação",
    },
    {
      year: "2021",
      title: "Primeiro Contato com Python",
      description:
        "Tive meu primeiro contato com Python e consegui desenvolver minha lógica de programação. Foi um momento crucial que me mostrou o poder da programação para resolver problemas.",
      icon: <Code className="text-white w-6 h-6" />,
      category: "Lógica",
    },
    {
      year: "2023",
      title: "Primeiro Contato com Programação",
      description:
        "Comecei a cursar Análise e Desenvolvimento de Sistemas, onde tive meu primeiro contato formal com as bases do desenvolvimento web: HTML, CSS e JavaScript.",
      icon: <Laptop className="text-white w-6 h-6" />,
      category: "Educação",
    },
    {
      year: "2024",
      title: "Desenvolvimento Frontend",
      description:
        "Aprendi React e comecei a criar interfaces interativas. Descobri o poder dos componentes reutilizáveis e do estado dinâmico.",
      icon: <Laptop className="text-white w-6 h-6" />,
      category: "Frontend",
    },
    {
      year: "2025",
      title: "Tecnologias de Ponta",
      description:
        "Aprofundei meus estudos em projetos com tecnologias modernas como React, Next.js, Node.js e TypeScript. Transformando ideias em realidade.",
      icon: <Rocket className="text-white w-6 h-6" />,
      category: "Avançado",
    },
    {
      year: "Presente",
      title: "Objetivo e Aspiração",
      description:
        "Usar minhas habilidades para construir soluções que resolvam problemas reais, sejam eficientes, escaláveis e causem impacto positivo.",
      icon: <Trophy className="text-white w-6 h-6" />,
      category: "Objetivo",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      {/* Particles */}
      <Particles darkMode={darkMode} count={6} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  : "text-gray-900"
              }`}
            >
              Minha Jornada
            </h2>
            <p
              className={`text-xl lg:text-2xl max-w-4xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Uma linha do tempo da minha evolução como desenvolvedor, desde a
              curiosidade infantil até as tecnologias de ponta
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="grid gap-8 md:gap-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Item */}
                <div className="flex items-start gap-6">
                  {/* Icon and Year */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        darkMode
                          ? "bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 shadow-2xl hover:shadow-blue-500/25"
                          : "bg-gradient-to-br from-blue-500 via-blue-400 to-purple-500 shadow-2xl hover:shadow-blue-500/25"
                      }`}
                    >
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div
                      className={`text-center mt-3 text-sm font-bold ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                        darkMode
                          ? "bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-600 shadow-xl"
                          : "bg-gradient-to-br from-white via-gray-50 to-gray-100 hover:from-gray-50 hover:to-white border border-gray-200 shadow-xl"
                      }`}
                    >
                      {/* Category Badge */}
                      <div
                        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                          darkMode
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        }`}
                      >
                        {item.category}
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-4 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-base leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`text-center p-8 rounded-3xl ${
            darkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600"
              : "bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Por que Programação?
          </h3>
          <p
            className={`text-lg leading-relaxed max-w-4xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Minha paixão pelo mundo da tecnologia nasceu na infância, não com
            códigos, mas com o fascínio por desvendar o que havia por trás da
            tela. O que começou como uma curiosidade inocente, formatando e
            otimizando computadores com Windows, se transformou no alicerce da
            minha carreira. Essa experiência prática me ensinou sobre a lógica e
            a estrutura dos sistemas, lições que se provaram inestimáveis no meu
            caminho.
          </p>
          <p
            className={`text-lg leading-relaxed max-w-4xl mx-auto mt-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Em um movimento que pode parecer inesperado, mas que aprimorou
            minhas habilidades de aprendizado, iniciei um curso de francês de
            três anos em 2020. Dominar uma nova língua me deu a disciplina e a
            capacidade de processar informações complexas, qualidades essenciais
            para qualquer desenvolvedor.
          </p>
          <p
            className={`text-lg leading-relaxed max-w-4xl mx-auto mt-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A transição para a minha área de atuação veio com a faculdade. Em
            2023, comecei a cursar Análise e Desenvolvimento de Sistemas, onde
            tive meu primeiro contato formal com as bases do desenvolvimento
            web: HTML, CSS e JavaScript. Foi o momento em que a teoria e a
            prática do meu passado se uniram.
          </p>
          <p
            className={`text-lg leading-relaxed max-w-4xl mx-auto mt-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A partir de 2025, aprofundei meus estudos em projetos com
            tecnologias de ponta, como React, Next.js, Node.js e TypeScript. A
            cada novo desafio, sinto a empolgação de transformar ideias em
            realidade. Minha jornada é uma prova do meu comprometimento em
            evoluir continuamente e em me adaptar ao ritmo acelerado do mercado.
          </p>
          <p
            className={`text-lg leading-relaxed max-w-4xl mx-auto mt-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Hoje, meu objetivo é simples, mas ambicioso: usar minhas habilidades
            para construir soluções que resolvam problemas reais, que sejam
            eficientes, escaláveis e que causem um impacto positivo. Estou
            pronto para o próximo desafio e para continuar essa jornada de
            aprendizado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
