"use client";
import { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Certifications from "../../components/pages/Certifications";
import Footer from "../../components/layout/Footer";

export default function CertificacoesPage() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      return stored === "light" ? false : true;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.classList.toggle("dark-background", darkMode);
    document.body.classList.toggle("light-background", !darkMode);

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
      <main className="pt-20">
        <Certifications darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
