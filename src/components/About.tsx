import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Código Limpo",
      description: "Escrevo código semântico, bem estruturado e fácil de manter, seguindo as melhores práticas da indústria."
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={24} />,
      title: "Inovação",
      description: "Sempre buscando novas tecnologias e soluções criativas para resolver problemas complexos."
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Colaboração",
      description: "Experiência em trabalho em equipe, utilizando metodologias ágeis e controle de versão com Git."
    },
    {
      icon: <Target className="text-purple-600" size={24} />,
      title: "Foco em Resultados",
      description: "Comprometido em entregar soluções que realmente funcionam e agregam valor ao negócio."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvedor em formação apaixonado por criar soluções digitais modernas e eficientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Sou um <strong>Desenvolvedor Web Fullstack</strong> em formação, focado em criar 
                experiências digitais excepcionais. Minha jornada começou com curiosidade sobre 
                como a web funciona e se transformou em uma paixão por resolver problemas através 
                do código.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Especializo-me em <strong>React</strong> e <strong>TypeScript</strong> no frontend, 
                criando interfaces intuitivas e responsivas. No backend, trabalho com 
                <strong> Node.js</strong> e <strong>NestJS</strong>, desenvolvendo APIs robustas 
                e escaláveis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Acredito que o código deve ser não apenas funcional, mas também limpo, 
                testável e mantível. Cada projeto é uma oportunidade de aprender algo novo 
                e aplicar as melhores práticas de desenvolvimento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;