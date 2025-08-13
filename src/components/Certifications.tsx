import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Tag } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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
      title: "Node.js Developer",
      issuer: "IBM",
      date: "2024",
      link: "https://coursera.org/verify/professional-cert/example",
      description: "Backend development com Node.js e Express",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express", "Backend", "API"],
      featured: true,
    },
    {
      title: "TypeScript Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      link: "https://coursera.org/verify/professional-cert/example",
      description: "Programação tipada e desenvolvimento escalável",
      image:
        "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["TypeScript", "JavaScript", "Programming"],
      featured: false,
    },
    {
      title: "Full Stack Development",
      issuer: "Udemy",
      date: "2023",
      link: "https://udemy.com/certificate/example",
      description: "Desenvolvimento completo frontend e backend",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Full Stack", "Web Development", "MERN"],
      featured: false,
    },
    {
      title: "Git & GitHub",
      issuer: "GitHub",
      date: "2023",
      link: "https://github.com/skills/example",
      description: "Controle de versão e colaboração em equipe",
      image:
        "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Git", "GitHub", "Version Control"],
      featured: false,
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      link: "https://freecodecamp.org/certification/example",
      description: "Design responsivo e acessibilidade web",
      image:
        "https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["CSS3", "HTML5", "Responsive Design"],
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
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
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
