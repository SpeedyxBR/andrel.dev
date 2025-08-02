import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" ? false : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.classList.toggle("dark-background", darkMode);
    document.body.classList.toggle("light-background", !darkMode);
  }, [darkMode]);

  return (
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
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
