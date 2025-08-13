import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const Projects = ({ darkMode }: { darkMode: boolean }) => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description:
        "Plataforma completa de e-commerce com carrinho de compras, pagamento integrado e painel administrativo. Desenvolvido com React, Node.js e PostgreSQL.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      liveUrl: "https://exemplo-ecommerce.vercel.app",
      githubUrl: "https://github.com/usuario/ecommerce-projeto",
      date: "2024",
      featured: true,
    },
    {
      title: "Sistema de Gerenciamento",
      description:
        "Dashboard administrativo para gerenciamento de usuários, produtos e vendas. Interface intuitiva com gráficos e relatórios em tempo real.",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Chart.js", "Express", "MongoDB"],
      liveUrl: "https://dashboard-exemplo.netlify.app",
      githubUrl: "https://github.com/usuario/sistema-gerenciamento",
      date: "2024",
      featured: true,
    },
    {
      title: "App de Clima",
      description:
        "Aplicação meteorológica com previsão do tempo, geolocalização e interface responsiva. Integração com APIs externas de clima.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "API Integration", "Geolocation", "CSS3"],
      liveUrl: "https://weather-app-exemplo.vercel.app",
      githubUrl: "https://github.com/usuario/weather-app",
      date: "2023",
      featured: false,
    },
    {
      title: "Landing Page Corporativa",
      description:
        "Site institucional responsivo para empresa de tecnologia. Design moderno com animações suaves e otimização SEO completa.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveUrl: "https://landing-corporativa.netlify.app",
      githubUrl: "https://github.com/usuario/landing-corporativa",
      date: "2023",
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
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Alguns dos trabalhos que desenvolvi, demonstrando minhas
              habilidades práticas
            </p>
          </motion.div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
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
              className={`text-2xl font-bold mb-8 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Outros Projetos
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
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
