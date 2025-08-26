import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const Projects = ({ darkMode }: { darkMode: boolean }) => {
  const projects = [
    {
      title: "PetPals - Petshop",
      description:
        "Aplicação web de petshop com interface moderna e responsiva.",
      image: "/petpals.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://petshop-sand-delta.vercel.app",
      githubUrl: "https://github.com/SpeedyxBR/petshop",
      date: "Julho 2024",
      featured: false,
    },
    {
      title: "Yu-Gi-Oh | Jo-ken-po Edition",
      description:
        "Jogo de jokenpo que criei para explicar conceitos de lógica de programação aplicados a jogos. Conceitos abordados: Armazenamento e gerenciamento de estado manual, Funções limpas, Organização de código.",
      image: "/yugioh.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://js-yugioh-assets-gray.vercel.app",
      githubUrl: "https://github.com/SpeedyxBR/js-yugioh-assets",
      date: "Dezembro 2024",
      featured: true,
    },
    {
      title: "BEWEAR - Ecommerce",
      description:
        "Um e-commerce de moda em desenvolvimento, projetado para oferecer uma jornada de compra intuitiva e de alta performance. O front-end, construído com Next.js, garante carregamento instantâneo e uma navegação fluida. O back-end, desenvolvido em Node.js, assegura a gestão segura do catálogo e a autenticação de usuários, além de gerenciar a integração de pagamentos para uma experiência de compra completa e confiável.",
      image: "/Capa.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js, Node.js, Stripe, Drizzle, PostgreSQL",
      ],
      liveUrl: "https://bewear-one.vercel.app",
      githubUrl: "https://github.com/SpeedyxBR/bewear",
      date: "Agosto 2025",
      featured: true,
    },

    {
      title: "Jogo Detona Ralph",
      description: "Quebra-cabeça de 8 bits",
      image:
        "https://images.pexels.com/photos/1293267/pexels-photo-1293267.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://speedyxbr.github.io/DETONA-RALPH-JOGO/",
      githubUrl: "https://github.com/SpeedyxBR/DETONA-RALPH-JOGO",
      date: "2023",
      featured: false,
    },
    {
      title: "Jogo da Memória",
      description:
        "Tabuleiro 4x4 com 16 cartas e emojis de animais. O objetivo é encontrar pares iguais. Inclui reinício rápido e design responsivo para diferentes telas.",
      image: "/Jogodamemoria.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://speedyxbr.github.io/JOGO-DA-MEMORIA/",
      githubUrl: "https://github.com/SpeedyxBR/JOGO-DA-MEMORIA",
      date: "2024",
      featured: false,
    },
    {
      title: "Gerenciador de Tarefas",
      description:
        "Aplicação para organizar e acompanhar tarefas diárias, com listagem, anotações e suporte a múltiplas tarefas. Layout responsivo.",
      image: "/gerenciadordetarefas.png",
      technologies: ["HTML5", "JavaScript", "CSS3", "React", "Tailwind CSS"],
      liveUrl: "https://curso-de-react-yt-kohl.vercel.app",
      githubUrl: "https://github.com/SpeedyxBR/curso-de-react-yt",
      date: "2024",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
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
        <div className="text-center mb-12 ipad:mb-16 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-2xl sm:text-3xl ipad:text-3xl lg:text-4xl font-bold mb-4 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  : "text-gray-900"
              }`}
            >
              Projetos em Destaque
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p
              className={`text-lg sm:text-xl ipad:text-xl lg:text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Alguns dos trabalhos que desenvolvi, demonstrando minhas
              habilidades práticas
            </p>
          </motion.div>
        </div>

        {/* Featured Projects */}
        <div className="grid ipad:grid-cols-2 lg:grid-cols-2 gap-6 ipad:gap-8 lg:gap-8 mb-12 ipad:mb-16 lg:mb-16 projects-grid">
          {featuredProjects.map((project, index) => (
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
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
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
                  {project.date}
                </div>

                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
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
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Ver Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 border-2 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${
                      darkMode
                        ? "border-gray-700 text-gray-200 hover:border-gray-500"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-xl sm:text-2xl ipad:text-2xl lg:text-2xl font-bold mb-6 ipad:mb-8 lg:mb-8 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Outros Projetos
            </h3>
          </motion.div>
          <div className="grid ipad:grid-cols-2 md:grid-cols-2 gap-4 ipad:gap-6 lg:gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                className={`rounded-lg p-6 transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-50 hover:bg-gray-100"
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
                <div
                  className={`flex items-center gap-2 text-sm mb-2 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <Calendar size={16} />
                  {project.date}
                </div>

                <h4
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h4>

                <p
                  className={`mb-4 text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs ${
                        darkMode
                          ? "bg-gray-700 text-gray-200"
                          : "bg-white text-gray-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm transition-colors duration-200 ${
                      darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-700"
                    }`}
                  >
                    <Github size={14} />
                    Código
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
