import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-portfolio.pdf';
    link.download = 'Curriculo-Desenvolvedor-Fullstack.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6">
              DEV
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Desenvolvedor
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Fullstack
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Criando experiências digitais modernas e funcionais com{' '}
              <span className="font-semibold text-blue-600">React</span>,{' '}
              <span className="font-semibold text-green-600">Node.js</span> e{' '}
              <span className="font-semibold text-indigo-600">TypeScript</span>.
              Focado em código limpo, performance e experiência do usuário.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={handleDownloadCV}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              Baixar Currículo
            </button>
            <button
              onClick={scrollToProjects}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
            >
              Ver Projetos
            </button>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-gray-900 transform hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-blue-600 transform hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contato@exemplo.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-green-600 transform hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;