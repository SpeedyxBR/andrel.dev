import { motion } from "framer-motion";
import { Laptop, Rocket, Trophy } from "lucide-react";
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaPython, FaDesktop, FaLanguage } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNodedotjs } from "react-icons/si";

const About = ({ darkMode }: { darkMode: boolean }) => {
  const timeline = [
    {
      year: "2007-2010",
      title: "Fundação e Desenvolvimento de Habilidades",
      description:
        "Minha paixão pela tecnologia nasceu na infância, formatando e otimizando computadores com Windows. A curiosidade de entender como as coisas funcionavam foi o primeiro passo.",
      icon: <FaDesktop className="w-6 h-6" />,
      category: "Fundação",
      color: "from-amber-500 to-orange-600",
      borderColor: "border-amber-500/50",
      bgColor: "bg-amber-500/10",
    },
    {
      year: "2020",
      title: "Disciplina e Aprendizado",
      description:
        "Iniciei um curso de francês de três anos, desenvolvendo disciplina e capacidade de processar informações complexas - habilidades essenciais para programação.",
      icon: <FaLanguage className="w-6 h-6" />,
      category: "Crescimento",
      color: "from-purple-500 to-pink-600",
      borderColor: "border-purple-500/50",
      bgColor: "bg-purple-500/10",
    },
    {
      year: "2021",
      title: "Primeiro Contato com Python",
      description:
        "Tive meu primeiro contato com Python e consegui desenvolver minha lógica de programação. Foi um momento crucial que me mostrou o poder da programação.",
      icon: <FaPython className="w-6 h-6" />,
      category: "Lógica",
      color: "from-yellow-500 to-green-600",
      borderColor: "border-yellow-500/50",
      bgColor: "bg-yellow-500/10",
    },
    {
      year: "2023",
      title: "Desenvolvimento Web",
      description:
        "Comecei a cursar Análise e Desenvolvimento de Sistemas, onde tive meu primeiro contato formal com as bases do desenvolvimento web: HTML, CSS e JavaScript.",
      icon: <Laptop className="w-6 h-6" />,
      category: "Educação",
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-500/50",
      bgColor: "bg-cyan-500/10",
      techs: [
        { icon: <FaHtml5 className="w-4 h-4" />, color: "text-orange-500" },
        { icon: <FaCss3Alt className="w-4 h-4" />, color: "text-blue-500" },
        { icon: <FaJs className="w-4 h-4" />, color: "text-yellow-500" },
      ],
    },
    {
      year: "2024",
      title: "Frontend Avançado",
      description:
        "Aprendi React e comecei a criar interfaces interativas. Descobri o poder dos componentes reutilizáveis e do estado dinâmico.",
      icon: <FaReact className="w-6 h-6" />,
      category: "Frontend",
      color: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-500/50",
      bgColor: "bg-blue-500/10",
      techs: [
        { icon: <FaReact className="w-4 h-4" />, color: "text-cyan-500" },
      ],
    },
    {
      year: "2025",
      title: "Tecnologias de Ponta",
      description:
        "Aprofundei meus estudos em projetos com tecnologias modernas como React, Next.js, Node.js e TypeScript. Transformando ideias em realidade.",
      icon: <Rocket className="w-6 h-6" />,
      category: "Full Stack",
      color: "from-indigo-500 to-purple-600",
      borderColor: "border-indigo-500/50",
      bgColor: "bg-indigo-500/10",
      techs: [
        { icon: <SiNextdotjs className="w-4 h-4" />, color: "text-white" },
        { icon: <SiNodedotjs className="w-4 h-4" />, color: "text-green-500" },
        { icon: <SiTypescript className="w-4 h-4" />, color: "text-blue-500" },
      ],
    },
    {
      year: "Presente",
      title: "Objetivo e Aspiração",
      description:
        "Usar minhas habilidades para construir soluções que resolvam problemas reais, sejam eficientes, escaláveis e causem impacto positivo.",
      icon: <Trophy className="w-6 h-6" />,
      category: "Objetivo",
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-500/50",
      bgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <section
      id="about"
      className={`py-16 md:py-20 relative overflow-hidden ${
        darkMode ? "bg-transparent" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      {/* Background Effects */}
      {darkMode && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  : "text-gray-900"
              }`}
            >
              Minha Jornada
            </h2>
            <p
              className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Uma linha do tempo da minha evolução como desenvolvedor, desde a
              curiosidade infantil até as tecnologias de ponta
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
              darkMode
                ? "bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                : "bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"
            }`}
            style={{ transform: "translateX(-50%)" }}
          />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <div
                  className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 ${
                    darkMode
                      ? "bg-gray-900 border-blue-500"
                      : "bg-white border-blue-500"
                  } z-10`}
                  style={{ transform: "translateX(-50%)" }}
                />

                {/* Year Badge - Mobile */}
                <div
                  className={`absolute left-16 md:hidden px-3 py-1 rounded-full text-xs font-bold ${
                    darkMode
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-blue-500/20 text-blue-600"
                  }`}
                >
                  {item.year}
                </div>

                {/* Content Card */}
                <motion.div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`relative p-6 rounded-2xl transition-all duration-500 ${
                      darkMode
                        ? `bg-gray-900/80 backdrop-blur-sm border ${item.borderColor} hover:border-opacity-100 shadow-xl hover:shadow-2xl`
                        : `bg-white backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl`
                    }`}
                  >
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.bgColor} blur-xl`}
                    />

                    {/* Year Badge - Desktop */}
                    <div
                      className={`hidden md:inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                        darkMode
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-blue-500/20 text-blue-600"
                      }`}
                    >
                      {item.year}
                    </div>

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg`}
                      >
                        <span className="text-white">{item.icon}</span>
                      </div>

                      <div>
                        {/* Category */}
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            darkMode ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {item.category}
                        </span>
                        {/* Title */}
                        <h3
                          className={`text-lg font-bold ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed mb-4 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Tech Icons */}
                    {item.techs && (
                      <div className="flex items-center gap-3">
                        {item.techs.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`${tech.color} transition-transform hover:scale-125`}
                          >
                            {tech.icon}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Pronto para criar algo incrível juntos?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
