import { motion } from "framer-motion";
import { BookOpen, Code, Laptop, Rocket } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface JourneyStep {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutSummary = ({ darkMode }: { darkMode: boolean }) => {
  const journeySteps: JourneyStep[] = [
    {
      number: 1,
      icon: <BookOpen className="w-6 h-6" />,
      title: "Fundação",
      description:
        "Paixão pela tecnologia desde a infância, formatando e otimizando computadores.",
    },
    {
      number: 2,
      icon: <Code className="w-6 h-6" />,
      title: "Lógica & Python",
      description:
        "Primeiro contato com programação e desenvolvimento da lógica de código.",
    },
    {
      number: 3,
      icon: <Laptop className="w-6 h-6" />,
      title: "Desenvolvimento Web",
      description:
        "HTML, CSS, JavaScript e início da jornada como desenvolvedor frontend.",
    },
    {
      number: 4,
      icon: <Rocket className="w-6 h-6" />,
      title: "Tecnologias Modernas",
      description:
        "React, Next.js, Node.js e TypeScript. Criando soluções de impacto.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="about-summary"
      className={`py-24 relative overflow-hidden ${
        darkMode ? "bg-transparent" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      {/* Background Effects */}
      {darkMode && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-widest uppercase rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            Sobre Mim
          </motion.span>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Como me tornei um{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              desenvolvedor
            </span>
          </h2>

          <p
            className={`text-lg lg:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Uma jornada de curiosidade, aprendizado contínuo e paixão por criar soluções que fazem a diferença.
          </p>
        </motion.div>

        {/* Journey Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div
                className={`relative p-6 rounded-2xl h-full transition-all duration-500 ${
                  darkMode
                    ? "bg-gray-900/50 hover:bg-gray-900/80 border border-gray-800 hover:border-blue-500/30"
                    : "bg-white hover:bg-gray-50 border border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Icon with Number Badge */}
                <div className="relative mb-6">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-500 ${
                      darkMode
                        ? "bg-blue-500/20 group-hover:opacity-100 opacity-50"
                        : "bg-blue-500/20 group-hover:opacity-100 opacity-50"
                    }`}
                    style={{ transform: "scale(1.5)" }}
                  />

                  {/* Icon Circle */}
                  <div
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      darkMode
                        ? "bg-gray-800 border-2 border-blue-500/50 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        : "bg-blue-50 border-2 border-blue-500/50 group-hover:border-blue-400"
                    }`}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        darkMode
                          ? "text-blue-400 group-hover:text-blue-300"
                          : "text-blue-500 group-hover:text-blue-600"
                      }`}
                    >
                      {step.icon}
                    </span>
                  </div>

                  {/* Number Badge */}
                  <div
                    className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      darkMode
                        ? "bg-blue-600 text-white group-hover:bg-blue-500 group-hover:scale-110"
                        : "bg-blue-500 text-white group-hover:bg-blue-600 group-hover:scale-110"
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    darkMode
                      ? "text-white group-hover:text-blue-400"
                      : "text-gray-900 group-hover:text-blue-600"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {step.description}
                </p>

                {/* Connecting Line (for larger screens) */}
                {index < journeySteps.length - 1 && (
                  <div
                    className={`hidden lg:block absolute top-8 -right-4 w-8 h-0.5 ${
                      darkMode
                        ? "bg-gradient-to-r from-blue-500/50 to-transparent"
                        : "bg-gradient-to-r from-blue-500/50 to-transparent"
                    }`}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/jornada"
            className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              darkMode
                ? "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400"
                : "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500"
            }`}
          >
            Ver jornada completa
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSummary;
