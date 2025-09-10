import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Tag } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const Certifications = ({ darkMode }: { darkMode: boolean }) => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: featuredRef, isVisible: featuredVisible } =
    useScrollReveal();
  const { elementRef: otherRef, isVisible: otherVisible } = useScrollReveal();

  const certifications = [
    {
      title: "Ri Happy - Front-end do Zero",
      issuer: "DIO",
      date: "Dezembro 2024",
      link: "https://www.dio.me/certificate/O7LVHQSU/share",
      description:
        "Bootcamp completo em desenvolvimento frontend com HTML, CSS e JavaScript - 75 horas de formação",
      image: "/fronthtmlcssejs.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Frontend"],
      featured: true,
    },
    {
      title: "Bootcamp Ecommerce",
      issuer: "Full Stack Club",
      date: "Agosto 2025",
      link: "https://drive.google.com/file/d/1VxXc7k_QlfmKoQsT4AXwBk-sxdYuon05/view",
      description:
        "Desenvolvimento full-stack de um projeto de e-commerce utilizando React, Next.js, TypeScript e Node.js. Habilidades validadas incluem a criação de interfaces de alta performance, construção de um backend robusto, integração de pagamentos com Stripe e aplicação prática de IA para otimização de fluxo de trabalho.",
      image: "/bootcamp-certificado.png",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Stripe",
        "IA",
      ],
      featured: true,
    },
    {
      title: "Fundamentos do Node.js",
      issuer: "Full Stack Club",
      date: "Agosto 2025",
      link: "https://drive.google.com/file/d/1dJAHG6gammRuxC-9ArADrxNmxHYIpeH3/view",
      description:
        "Este módulo me deu uma base sólida para a construção de backends, APIs e a lógica de servidor, complementando minhas habilidades em desenvolvimento frontend. A união desses conhecimentos reforça meu objetivo de atuar como um Desenvolvedor Full Stack completo e versátil.",
      image: "/fundamentosnodejs.png",
      technologies: ["Node.js"],
      featured: true,
    },

    {
      title: "Módulos do Node.js",
      issuer: "Full Stack Club",
      date: "Agosto 2025",
      link: "https://drive.google.com/file/d/1yh1tIaNRKX6xFNDDMd1HiOIaDD6VgILL/view?usp=drive_link",
      description:
        "Aprofundamento no sistema modular do Node.js, incluindo CommonJS e ES Modules, criação de módulos customizados, NPM, gerenciamento de dependências e estruturação de projetos escaláveis. Desenvolvimento de bibliotecas reutilizáveis e aplicação de boas práticas de arquitetura modular para construção de aplicações robustas e maintíveis.",
      image: "/fundamentosnodejs.png",
      technologies: ["Node.js", "CommonJS", "ES Modules", "NPM"],
      featured: true,
    },

    {
      title: "Node.js Assíncrono",
      issuer: "Full Stack Club",
      date: "Agosto 2025",
      link: "https://drive.google.com/file/d/18dTCp39FwLpezUUK1-Nm2-QT6PKCO7fc/view?usp=drive_link",
      description:
        "Aprendendo a criar aplicações assíncronas com Node.js, incluindo callbacks, promises e async/await, além de entender como lidar com erros e gerenciar fluxos de execução de forma eficiente. Aprendendo a criar APIs robustas e escaláveis, com integração de bancos de dados e uso de middlewares para melhorar a segurança e a performance.",
      image: "/nodejsac.png",
      technologies: ["Node.js", "Async/Await", "Promises", "Callbacks"],
      featured: true,
    },

    {
      title: "Docker - Containerização de Aplicações",
      issuer: "Full Stack Club",
      date: "Dezembro 2024",
      link: "https://drive.google.com/file/d/1example/view",
      description:
        "Aprendendo a containerizar aplicações com Docker, incluindo criação de Dockerfiles, gerenciamento de containers, volumes, redes e orquestração. Desenvolvimento de aplicações escaláveis e portáveis com tecnologias de containerização modernas.",
      image: "/docker-certificado.png",
      technologies: ["Docker", "Containerização", "DevOps", "Deployment"],
      featured: true,
    },

    {
      title: "Estruturas de Repetição e Arrays em JavaScript",
      issuer: "DIO",
      date: "2024",
      link: "https://www.dio.me/certificate/TIQHRWLS/share",
      description:
        "Aprenda a utilizar estruturas de repetição e arrays para manipular dados em JavaScript.",
      image: "/matrizes.webp",
      technologies: ["JavaScript", "Arrays", "Programming Logic"],
      featured: false,
    },
    {
      title: "Funções e Manipulação de Listas com JavaScript",
      issuer: "DIO",
      date: "2024",
      link: "https://www.dio.me/certificate/N0RCOVMA/share",
      description:
        "Explore o uso de funções e métodos para manipular listas e objetos em JavaScript.",
      image: "/funcoesjs.webp",
      technologies: ["JavaScript", "Functions", "Lists"],
      featured: false,
    },
    {
      title: "Trabalhando com Variáveis em JavaScript",
      issuer: "DIO",
      date: "2024",
      link: "https://www.dio.me/certificate/SWVUDSSC/share",
      description:
        "Conceitos fundamentais sobre como declarar e utilizar variáveis e tipos de dados em JavaScript.",
      image: "/variaveis.webp",
      technologies: ["JavaScript", "Variables", "Programming"],
      featured: false,
    },
    {
      title: "Introdução ao CSS na Prática",
      issuer: "DIO",
      date: "2024",
      link: "https://www.dio.me/certificate/YBZMJPLI/share",
      description:
        "Curso prático sobre como estilizar páginas web com os fundamentos do CSS.",
      image: "/css.webp",
      technologies: ["CSS", "HTML", "Web Development"],
      featured: false,
    },
    {
      title: "Introdução ao HTML na Prática",
      issuer: "DIO",
      date: "2024",
      link: "https://www.dio.me/certificate/EBEOYJFT/share",
      description:
        "Aprenda a estruturar páginas web utilizando as principais tags do HTML.",
      image: "/html.webp",
      technologies: ["HTML", "Web Development", "Frontend"],
      featured: false,
    },
    {
      title: "Introdução à Semântica com HTML",
      issuer: "DIO",
      date: "2024",
      link: "https://www.dio.me/certificate/MNA8O4P4/share",
      description:
        "Entenda a importância e a aplicação de tags semânticas para acessibilidade e SEO em HTML.",
      image: "/htmlsm.webp",
      technologies: ["HTML", "Semantic HTML", "Web Development"],
      featured: false,
    },
    {
      title: "Pensamento Computacional",
      issuer: "DIO",
      date: "2024",
      link: "https://www.dio.me/certificate/DSHXKLF3/share",
      description:
        "Desenvolva a base da lógica de programação e o pensamento computacional para resolver problemas.",
      image: "/logica.webp",
      technologies: ["Logic", "Problem Solving", "Algorithms"],
      featured: false,
    },
    {
      title: "Introdução a Classes e Objetos com JavaScript",
      issuer: "DIO",
      date: "2024",
      link: "https://www.dio.me/certificate/R8DUM8GP/share",
      description:
        "Fundamentos da Programação Orientada a Objetos (POO) aplicada em JavaScript.",
      image: "/classeseobjetos.webp",
      technologies: ["JavaScript", "OOP", "Classes"],
      featured: false,
    },
  ];
  const featuredCertifications = certifications.filter((cert) => cert.featured);
  const otherCertifications = certifications.filter((cert) => !cert.featured);

  return (
    <section
      id="certifications"
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
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-reveal ${
            titleVisible ? "visible" : ""
          }`}
        >
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
              Certificações em Destaque
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
              Credenciais e certificados que validam minhas habilidades técnicas
            </p>
          </motion.div>
        </div>

        {/* Featured Certifications */}
        <div
          ref={featuredRef}
          className={`grid lg:grid-cols-2 gap-8 mb-16 scroll-reveal ${
            featuredVisible ? "visible" : ""
          }`}
        >
          {featuredCertifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={`w-full ${
                    cert.title === "Bootcamp Ecommerce" ||
                    cert.title === "Ri Happy - Front-end do Zero"
                      ? "h-56 sm:h-72"
                      : "h-72"
                  } object-cover group-hover:scale-105 transition-transform duration-300`}
                />
                <div
                  className={`absolute inset-0 bg-black ${
                    darkMode ? "bg-opacity-40" : "bg-opacity-20"
                  } group-hover:bg-opacity-50 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div
                  className={`flex items-center gap-2 text-sm mb-2 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <Calendar size={16} />
                  {cert.date}
                </div>

                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {cert.title}
                </h3>

                <p
                  className={`text-sm mb-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {cert.issuer}
                </p>

                <p
                  className={`mb-4 leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                        darkMode
                          ? "bg-gray-700 text-gray-200"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Tag size={12} />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Award size={16} />
                    Ver Certificado
                  </a>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 border-2 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${
                      darkMode
                        ? "border-gray-700 text-gray-200 hover:border-gray-500"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <ExternalLink size={16} />
                    Verificar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Certifications */}
        <div
          ref={otherRef}
          className={`scroll-reveal ${otherVisible ? "visible" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl font-bold mb-8 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Outras Certificações
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {otherCertifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-black ${
                      darkMode ? "bg-opacity-30" : "bg-opacity-10"
                    } group-hover:bg-opacity-40 transition-opacity duration-300`}
                  ></div>
                </div>

                <div className="p-4">
                  <div
                    className={`flex items-center gap-2 text-xs mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Calendar size={14} />
                    {cert.date}
                  </div>

                  <h4
                    className={`font-semibold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {cert.title}
                  </h4>

                  <p
                    className={`text-xs mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {cert.issuer}
                  </p>

                  <p
                    className={`text-sm mb-3 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded-full text-xs ${
                          darkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                      darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    Ver certificado
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Continuo sempre aprendendo e buscando novas certificações para
            aprimorar minhas habilidades.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
