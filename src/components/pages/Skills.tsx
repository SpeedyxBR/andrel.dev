import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaGitAlt } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiVite,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const techs = [
  {
    name: "React",
    icon: (
      <FaReact
        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-cyan-400 to-blue-500",
    level: 70,
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript
        className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-blue-500 to-indigo-600",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: (
      <FaJs
        className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-yellow-400 to-orange-500",
    level: 79,
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss
        className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-teal-400 to-cyan-500",
    level: 88,
  },
  {
    name: "HTML5",
    icon: (
      <FaHtml5
        className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-orange-500 to-red-500",
    level: 95,
  },
  {
    name: "CSS3",
    icon: (
      <FaCss3Alt
        className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-blue-500 to-indigo-600",
    level: 90,
  },
  {
    name: "Node.js",
    icon: (
      <SiNodedotjs
        className="text-green-500 hover:text-green-400 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-green-500 to-emerald-600",
    level: 70,
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs
        className="text-black hover:text-gray-800 transition-colors duration-300 dark:text-white dark:hover:text-gray-200"
        size={52}
      />
    ),
    color: "from-gray-900 to-black",
    level: 70,
  },
  // {
  //   name: "Express.js",
  //   icon: (
  //     <SiExpress
  //       className="text-gray-600 hover:text-gray-500 transition-colors duration-300"
  //       size={52}
  //     />
  //   ),
  //   color: "from-gray-600 to-gray-700",
  //   level: 85,
  // },
  {
    name: "PostgreSQL",
    icon: (
      <SiPostgresql
        className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-blue-600 to-indigo-700",
    level: 70,
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb
        className="text-green-600 hover:text-green-500 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-green-600 to-emerald-700",
    level: 75,
  },
  {
    name: "Git",
    icon: (
      <FaGitAlt
        className="text-orange-600 hover:text-orange-500 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-orange-600 to-red-600",
    level: 85,
  },
  {
    name: "GitHub",
    icon: (
      <TbBrandGithub
        className="text-black hover:text-gray-800 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-gray-800 to-black",
    level: 90,
  },
  {
    name: "Figma",
    icon: (
      <SiFigma
        className="text-purple-500 hover:text-purple-400 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-purple-500 to-pink-600",
    level: 75,
  },
  {
    name: "VS Code",
    icon: (
      <VscVscodeInsiders
        className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-blue-500 to-indigo-600",
    level: 95,
  },
  {
    name: "Postman",
    icon: (
      <SiPostman
        className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-orange-500 to-red-500",
    level: 80,
  },
  // {
  //   name: "Docker",
  //   icon: (
  //     <SiDocker
  //       className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
  //       size={52}
  //     />
  //   ),
  //   color: "from-blue-500 to-indigo-600",
  //   level: 65,
  // },
  {
    name: "Vite",
    icon: (
      <SiVite
        className="text-purple-500 hover:text-purple-400 transition-colors duration-300"
        size={52}
      />
    ),
    color: "from-purple-500 to-pink-600",
    level: 90,
  },
];

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      id="skills"
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-50 ${
          darkMode
            ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        }`}
        style={{
          transformOrigin: "0%",
          scaleX: 0,
        }}
        whileInView={{
          scaleX: [0, 1],
          transition: { duration: 2, ease: "easeOut" },
        }}
        viewport={{ once: true }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full opacity-30 ${
            darkMode ? "bg-blue-400" : "bg-gray-600"
          }`}
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
              className={`text-3xl sm:text-4xl ipad:text-4xl lg:text-5xl font-bold mb-6 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  : "text-gray-900"
              }`}
            >
              Habilidades Técnicas
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
              Tecnologias e ferramentas que domino para criar soluções completas
              e inovadoras
            </p>
          </motion.div>
        </div>
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 ipad:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ipad:gap-8 lg:gap-8 skills-grid">
            {techs.map((tech, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl group ${
                  darkMode
                    ? "bg-gray-800/50 hover:bg-gray-800/80 text-white"
                    : "bg-white/50 hover:bg-white/80 text-gray-700 shadow-lg hover:shadow-xl"
                } backdrop-blur-sm border border-opacity-20 transition-all duration-300 ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">{tech.icon}</div>

                {/* Barra de Progresso removida */}

                <motion.span
                  className={`text-sm font-semibold tracking-wide text-center ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  } group-hover:text-opacity-80 transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                >
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
