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

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" ? false : true;
  });

  const { toasts, removeToast } = useToast();

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
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Certifications darkMode={darkMode} />
          <Projects darkMode={darkMode} />
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
