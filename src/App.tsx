import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/pages/SEO";
import Header from "./components/pages/Header";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Certifications from "./components/pages/Certifications";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Toast from "./components/ui/Toast";
import { useToast } from "./hooks/useToast";
import { useAnalytics } from "./hooks/useAnalytics";

// Componente SEO específico para diferentes seções
const SectionSEO = ({ section }: { section: string }) => {
  const seoData = {
    home: {
      title: "Andrel Carvalho - Desenvolvedor Web Full Stack",
      description:
        "Portfólio profissional de Andrel Carvalho, desenvolvedor web fullstack especializado em React, Node.js, Next.js e TypeScript. Conheça meus projetos e habilidades.",
      keywords:
        "desenvolvedor web, full stack, react, node.js, typescript, portfólio, projetos, habilidades técnicas",
    },
    about: {
      title: "Sobre - Andrel Carvalho",
      description:
        "Conheça a trajetória profissional de Andrel Carvalho, desenvolvedor web fullstack com experiência em React, Node.js e tecnologias modernas.",
      keywords:
        "sobre, trajetória, experiência, desenvolvedor, full stack, carreira",
    },
    skills: {
      title: "Habilidades Técnicas - Andrel Carvalho",
      description:
        "Explore as habilidades técnicas de Andrel Carvalho em desenvolvimento web, incluindo React, TypeScript, Node.js, bancos de dados e ferramentas modernas.",
      keywords:
        "habilidades técnicas, competências, tecnologias, ferramentas, desenvolvimento web, programação",
    },
    projects: {
      title: "Projetos - Andrel Carvalho",
      description:
        "Portfólio de projetos desenvolvidos por Andrel Carvalho, showcasing aplicações web modernas com React, Node.js e outras tecnologias.",
      keywords:
        "projetos, portfólio, aplicações web, desenvolvimento, react, node.js, full stack",
    },
    certifications: {
      title: "Certificações - Andrel Carvalho",
      description:
        "Certificações profissionais de Andrel Carvalho em desenvolvimento web, programação e tecnologias modernas.",
      keywords:
        "certificações, cursos, formações, desenvolvimento web, tecnologia, profissional",
    },
    contact: {
      title: "Contato - Andrel Carvalho",
      description:
        "Entre em contato com Andrel Carvalho para oportunidades de trabalho, projetos ou parcerias em desenvolvimento web.",
      keywords:
        "contato, email, telefone, localização, oportunidades, trabalho, projetos, parceria",
    },
  };

  const data = seoData[section as keyof typeof seoData] || seoData.home;

  return (
    <SEO
      title={data.title}
      description={data.description}
      keywords={data.keywords}
      url={`https://andrelcarvalho.dev#${section}`}
    />
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" ? false : true;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");
  const { toasts, removeToast } = useToast();
  const { trackPageView, trackEvent } = useAnalytics();

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Rastrear page view inicial
      trackPageView({
        page_title: "Andrel Carvalho - Portfolio",
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [trackPageView]);

  // Observer para rastrear navegação entre seções
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && sectionId !== currentSection) {
            setCurrentSection(sectionId);

            // Rastrear mudança de seção
            trackPageView({
              page_title: `Andrel Carvalho - ${
                sectionId.charAt(0).toUpperCase() + sectionId.slice(1)
              }`,
              page_location: `${window.location.origin}${window.location.pathname}#${sectionId}`,
              page_path: `${window.location.pathname}#${sectionId}`,
            });

            trackEvent({
              action: "section_view",
              category: "navigation",
              label: sectionId,
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observar todas as seções
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [currentSection, trackPageView, trackEvent]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.classList.toggle("dark-background", darkMode);
    document.body.classList.toggle("light-background", !darkMode);

    // Aplicar classe 'dark' para o Tailwind CSS
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  if (isLoading) {
    return (
      <HelmetProvider>
        <SEO />
        <div
          className={`min-h-screen flex items-center justify-center ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          <div className="text-center">
            <Loading
              size="xl"
              variant="dots"
              color={darkMode ? "text-blue-400" : "text-blue-600"}
              text="Carregando portfólio..."
              className="mb-4"
            />
          </div>
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <SEO />
      <div
        className={
          darkMode
            ? "min-h-screen bg-transparent text-white transition-colors duration-300 relative"
            : "min-h-screen bg-white text-gray-900 transition-colors duration-300 relative"
        }
      >
        {darkMode && (
          <>
            <div className="stars"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
          </>
        )}

        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <SectionSEO section="home" />
          <Hero darkMode={darkMode} />
          <SectionSEO section="about" />
          <About darkMode={darkMode} />
          <SectionSEO section="skills" />
          <Skills darkMode={darkMode} />
          <SectionSEO section="projects" />
          <Projects darkMode={darkMode} />
          <SectionSEO section="certifications" />
          <Certifications darkMode={darkMode} />
          <SectionSEO section="contact" />
          <Contact darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />

        {/* Toast Container */}
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            isVisible={true}
            onClose={() => removeToast(toast.id)}
            duration={toast.duration}
          />
        ))}
      </div>
    </HelmetProvider>
  );
}

export default App;
