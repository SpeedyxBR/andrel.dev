import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma completa de e-commerce com carrinho de compras, pagamento integrado e painel administrativo. Desenvolvido com React, Node.js e PostgreSQL.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://exemplo-ecommerce.vercel.app",
      githubUrl: "https://github.com/usuario/ecommerce-projeto",
      date: "2024",
      featured: true
    },
    {
      title: "Sistema de Gerenciamento",
      description: "Dashboard administrativo para gerenciamento de usuários, produtos e vendas. Interface intuitiva com gráficos e relatórios em tempo real.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Chart.js", "Express", "MongoDB"],
      liveUrl: "https://dashboard-exemplo.netlify.app",
      githubUrl: "https://github.com/usuario/sistema-gerenciamento",
      date: "2024",
      featured: true
    },
    {
      title: "App de Clima",
      description: "Aplicação meteorológica com previsão do tempo, geolocalização e interface responsiva. Integração com APIs externas de clima.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "API Integration", "Geolocation", "CSS3"],
      liveUrl: "https://weather-app-exemplo.vercel.app",
      githubUrl: "https://github.com/usuario/weather-app",
      date: "2023",
      featured: false
    },
    {
      title: "Landing Page Corporativa",
      description: "Site institucional responsivo para empresa de tecnologia. Design moderno com animações suaves e otimização SEO completa.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveUrl: "https://landing-corporativa.netlify.app",
      githubUrl: "https://github.com/usuario/landing-corporativa",
      date: "2023",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alguns dos trabalhos que desenvolvi, demonstrando minhas habilidades práticas
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar size={16} />
                  {project.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
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
                    className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Outros Projetos
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar size={16} />
                  {project.date}
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-gray-600 px-2 py-1 rounded text-xs"
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
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-700 transition-colors duration-200 flex items-center gap-1 text-sm"
                  >
                    <Github size={14} />
                    Código
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;