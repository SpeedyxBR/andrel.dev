# 🚀 Portfólio Profissional - Andrel Carvalho 3.0

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
</div>

<br />

<div align="center">
  <h3>✨ Desenvolvedor Web Full Stack ✨</h3>
  <p><strong>Criando experiências digitais com Next.js, React e TypeScript</strong></p>
  <p><em>Focado em código limpo, performance (SSR) e experiência do usuário</em></p>
</div>

---

## 📚 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#️-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Como Executar](#-como-executar)
- [Configuração do EmailJS](#-configuração-do-emailjs)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [SEO](#-seo)
- [Responsividade](#-responsividade)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Licença e Contato](#-licença-e-contato)

---

## 🎯 Sobre o Projeto

Este é o portfólio profissional de **Andrel Carvalho**, um desenvolvedor web full stack. O projeto foi migrado para **Next.js** para aproveitar os benefícios de **Server-Side Rendering (SSR)**, melhorando significativamente o SEO e a performance inicial. Apresenta um design moderno, animações fluidas e foco em acessibilidade.

### 🌟 Destaques

- **🚀 Next.js & SSR**: Renderização no servidor para melhor SEO e performance.
- **🎨 Design**: Visual moderno com tema escuro/claro e estilos globais em Sass.
- **📱 Responsivo**: Otimizado para mobile, tablet e desktop.
- **⚡ Performance**: Otimizações nativas do Next.js.
- **🎭 Animações**: Transições suaves com Framer Motion.
- **📧 Contato**: Integração com EmailJS.

---

## 🛠️ Tecnologias

### Core
- Next.js 14+ (App Router)
- React 18
- TypeScript

### Estilização
- Tailwind CSS
- Sass (SCSS)
- Framer Motion

### Integrações
- EmailJS
- React Icons / Lucide React
- Swiper / React Slick

---

## ✨ Funcionalidades

### 🏠 Hero
- Apresentação com CTA para currículo e redes sociais
- Partículas de fundo e animações de entrada

### 📚 Sobre
- Timeline/descrição da jornada profissional
- Conteúdo animado e ícones por tecnologia

### 🎯 Habilidades
- Cards interativos com níveis e categorias

### 🏆 Certificações
- Exibição responsiva de certificados

### 🚀 Projetos
- Grid com imagens, descrição, tecnologias e links

### 📞 Contato
- Formulário com EmailJS e validação de campos

---

## 🚀 Como Executar

Pré-requisitos:
- Node.js 18+
- npm (ou yarn/pnpm)

1. Clone o repositório
```bash
git clone https://github.com/SpeedyxBR/andrel.dev.git
cd andrel.dev
```

2. Instale dependências
```bash
npm install
```

3. Execute em desenvolvimento
```bash
npm run dev
# Acesse http://localhost:3000
```

4. Build de produção
```bash
npm run build
```

5. Iniciar produção
```bash
npm run start
```

---

## 🔐 Configuração do EmailJS

1. Crie conta em `https://www.emailjs.com/`
2. Conecte um serviço de email (Gmail/Outlook etc.)
3. Crie um Template e copie: `service_id`, `template_id`, `public_key`
4. Atualize as credenciais no arquivo `src/components/pages/Contact.tsx`

---

## 📜 Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento Next.js
- `npm run build`: gera o build de produção do Next.js
- `npm run start`: inicia o servidor de produção
- `npm run lint`: roda o ESLint

---

## 📁 Estrutura do Projeto

```
src/
├── app/                  # App Router do Next.js
│   ├── layout.tsx        # Layout raiz e Metadata (SEO)
│   └── page.tsx          # Página inicial
├── components/           # Componentes React
│   ├── pages/            # Seções da página (Hero, About, etc.)
│   └── ui/               # Componentes de UI reutilizáveis
├── hooks/                # Custom Hooks
├── styles/               # Estilos globais e SCSS
└── constants/            # Constantes e dados estáticos
```

---

## 🔎 SEO

O SEO é gerenciado nativamente pelo **Next.js Metadata API** no arquivo `src/app/layout.tsx`. Isso elimina a necessidade de bibliotecas externas como `react-helmet` e garante que as meta tags sejam geradas no servidor.

---

## 📱 Responsividade

- Mobile (≥320px), Tablet (≥768px), Desktop (≥1024px) e variações de iPad
- Breakpoints e utilitários definidos no Tailwind

---

## ☁️ Deploy

### Vercel (Recomendado para Next.js)

1. Instale a CLI da Vercel: `npm i -g vercel`
2. Execute o comando: `vercel`

Ou conecte seu repositório GitHub diretamente no dashboard da Vercel para deploys automáticos.

---

## 🤝 Contribuição

1. Faça um fork
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit (`git commit -m "feat: minha feature"`)
4. Push (`git push origin feature/minha-feature`)
5. Abra um Pull Request

Commits seguem o padrão Conventional Commits: `feat`, `fix`, `chore`, `docs`, `refactor`.

---

## 📄 Licença e Contato

Este projeto está sob a licença MIT.

- LinkedIn: Andrel Carvalho
- GitHub: `@SpeedyxBR`
- Email: `andrel.cilva58@gmail.com`
- Portfólio: `andrelcarvalho.dev`

---

<div align="center">
  <p><strong>Feito com 💙 e ☕ por Andrel Carvalho</strong></p>
  <p><em>Transformando ideias em experiências digitais incríveis</em></p>
</div>
