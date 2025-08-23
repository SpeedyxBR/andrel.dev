import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envio real via EmailJS
      const result = await emailjs.send(
        "service_chpxeg8", // service_id do Gmail
        "template_36ziwcd", // template_id correto do painel EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "etBf3wOiNQMarCXAU" // public_key do EmailJS
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "andrel.cilva@gmail.com",
      link: "mailto:contato@exemplo.com",
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Telefone",
      value: "+55 (11) 98797-9507",
      link: "tel:+5511999999999",
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 ipad:mb-16 lg:mb-16">
          <h2
            className={`text-2xl sm:text-3xl ipad:text-3xl lg:text-4xl font-bold mb-4 ${
              darkMode
                ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                : "text-gray-900"
            }`}
          >
            Entre em Contato
          </h2>
          <p
            className={`text-lg sm:text-xl ipad:text-xl lg:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Vamos conversar sobre oportunidades, projetos ou apenas trocar
            ideias sobre tecnologia
          </p>
        </div>

        <div className="grid ipad:grid-cols-1 lg:grid-cols-3 gap-8 ipad:gap-12 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-xl p-8 shadow-lg`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`${
                        darkMode ? "bg-gray-900" : "bg-gray-50"
                      } p-2 rounded-lg`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4
                        className={`font-semibold mb-1 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`${
                            darkMode
                              ? "text-gray-300 hover:text-blue-400"
                              : "text-gray-600 hover:text-blue-600"
                          } transition-colors duration-200`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className={`${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4
                  className={`font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Redes Sociais
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/SpeedyxBR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      darkMode
                        ? "bg-gray-900 text-gray-200 hover:bg-gray-700 hover:text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    } p-3 rounded-lg transition-colors duration-200`}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/andrel-carvalho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      darkMode
                        ? "bg-gray-900 text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    } p-3 rounded-lg transition-colors duration-200`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-xl p-8 shadow-lg`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Envie uma Mensagem
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Sua mensagem foi enviada! Obrigado pelo contato, retornarei
                    em breve.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    Não foi possível enviar sua mensagem. Por favor, tente
                    novamente ou utilize outro meio de contato.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 contact-form">
                <div className="grid ipad:grid-cols-1 md:grid-cols-2 gap-4 ipad:gap-6 lg:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${
                        darkMode
                          ? "border-gray-700 bg-gray-900 text-white"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200`}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${
                        darkMode
                          ? "border-gray-700 bg-gray-900 text-white"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200`}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${
                      darkMode
                        ? "border-gray-700 bg-gray-900 text-white"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${
                      darkMode
                        ? "border-gray-700 bg-gray-900 text-white"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none`}
                    placeholder="Descreva sua mensagem, proposta ou dúvida..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
