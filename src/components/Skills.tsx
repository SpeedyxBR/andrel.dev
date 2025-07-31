import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript ES6+", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Backend",
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "NestJS", level: 75 },
        { name: "Express.js", level: 82 },
        { name: "RESTful APIs", level: 85 },
        { name: "SQL/PostgreSQL", level: 78 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Ferramentas & DevOps",
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 70 },
        { name: "Webpack/Vite", level: 75 },
        { name: "NPM/Yarn", level: 88 },
        { name: "Linux/Terminal", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                <span className="text-white font-bold text-lg">
                  {category.title.slice(0, 2)}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;