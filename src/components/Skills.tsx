import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiVite,
} from "react-icons/si";

const techs = [
  { name: "React", icon: <FaReact className="text-blue-400" size={48} /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" size={48} />,
  },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={48} /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" size={48} />,
  },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={48} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={48} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={48} /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-500" size={48} /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700" size={48} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-800" size={48} />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" size={48} /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" size={48} /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" size={48} /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" size={48} /> },
];

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      id="skills"
      className={`py-20 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Habilidades Técnicas
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>
        <div className="overflow-hidden relative max-w-3xl mx-auto">
          <div className="marquee flex items-center gap-10">
            {techs.concat(techs).map((tech, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center min-w-[80px] ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                {tech.icon}
                <span
                  className={`mt-2 text-sm font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          <style>{`
            .marquee {
              animation: marquee 18s linear infinite;
              width: max-content;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Skills;
