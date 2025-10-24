# 🚀 Portfólio Profissional - Andrel Carvalho 2.0

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA" />
</div>

<br />

<div align="center">
  <h3>✨ Desenvolvedor Web Full Stack ✨</h3>
  <p><strong>Criando experiências digitais com React, TypeScript e Vite</strong></p>
  <p><em>Focado em código limpo, performance e experiência do usuário</em></p>
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
- [PWA](#-pwa)
- [SEO](#-seo)
- [Responsividade](#-responsividade)
- [Deploy](#-deploy)
- [Dicas e Troubleshooting](#-dicas-e-troubleshooting)
- [FAQ](#-faq)
- [Contribuição](#-contribuição)
- [Licença e Contato](#-licença-e-contato)

---

## 🎯 Sobre o Projeto

Este é o portfólio profissional de **Andrel Carvalho**, um desenvolvedor web full stack. O projeto apresenta um design moderno, animações fluidas, foco em acessibilidade e alto desempenho.

### 🌟 Destaques

- **🎨 Design**: visual moderno com tema escuro/claro
- **📱 Responsivo**: otimizado para mobile, tablet e desktop
- **⚡ Performance**: bundling com Vite e otimizações de imagens
- **🎭 Animações**: transições suaves com Framer Motion
- **📧 Contato**: integração com EmailJS
- **📦 PWA**: suporte a Progressive Web App (instalável)

---

## 🛠️ Tecnologias

### Frontend

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React / React Icons

### Build e Qualidade

- Vite 5
- PostCSS + Autoprefixer
- ESLint (React, Hooks, TypeScript)

### Integrações

- EmailJS
- react-slick / slick-carousel (carrossel)
- vite-plugin-pwa (PWA)

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

- Exibição responsiva de certificados (imagens em `public/`)

### 🚀 Projetos

- Grid com imagens, descrição, tecnologias e links

### 📞 Contato

- Formulário com EmailJS e validação de campos

---

## 🚀 Como Executar

Pré-requisitos:

- Node.js 16+ (recomendado 18+)
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
```

4. Build de produção

```bash
npm run build
```

5. Preview local do build

```bash
npm run preview
```

---

## 🔐 Configuração do EmailJS

1. Crie conta em `https://www.emailjs.com/`
2. Conecte um serviço de email (Gmail/Outlook etc.)
3. Crie um Template e copie: `service_id`, `template_id`, `public_key`
4. Atualize as credenciais no arquivo `src/components/pages/Contact.tsx` (ou onde estiver a integração)

Campos comuns do template: `from_name`, `from_email`, `message` (ajuste conforme o componente).

---

## 📜 Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento Vite
- `npm run build`: gera o build de produção em `dist/`
- `npm run preview`: serve o build de produção localmente
- `npm run lint`: roda o ESLint na base do projeto

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── pages/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Loading.tsx
│       ├── Particles.tsx
│       └── Toast.tsx
├── hooks/
├── styles/
└── constants/

public/
├── imagens e certificados (ex.: `bootcamp-certificado.png`, `andrel.jpeg`)
└── arquivos estáticos (ex.: currículo PDF)
```

---

## 📦 PWA

O projeto utiliza `vite-plugin-pwa` para oferecer experiência instalável:

- Gera manifest e service worker no build
- Suporte offline básico para rotas/ativos estáticos

Para testar o PWA:

```bash
npm run build
npm run preview
# acesse http://localhost:4173 e verifique o indicador de instalável no navegador
```

---

## 🔎 SEO

SEO e metatags são gerenciados via `react-helmet-async` no componente `src/components/pages/SEO.tsx`. Ajuste título, descrição e open graph para cada página/seção conforme necessário.

---

## 📱 Responsividade

- Mobile (≥320px), Tablet (≥768px), Desktop (≥1024px) e variações de iPad
- Breakpoints e utilitários definidos no Tailwind (`tailwind.config.js`)

Exemplo de screens personalizadas:

```js
screens: {
  xs: "475px",
  ipad: "768px",
  "ipad-pro": "1024px",
  "ipad-air": "820px",
  portrait: { raw: "(orientation: portrait)" },
  landscape: { raw: "(orientation: landscape)" }
}
```

---

## ☁️ Deploy

### Vercel (recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Conecte o repositório
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# publique a pasta dist/
```

---

## 🧩 Dicas e Troubleshooting

- Email não enviado: verifique `service_id`, `template_id`, `public_key` e permissões no EmailJS
- Imagens não aparecem: confirme o caminho dentro de `public/` e imports relativos
- Estilos não aplicam: cheque `src/index.css` e a configuração do Tailwind
- PWA não instala: teste em `npm run preview` e limpe caches do navegador
- Lint falhando: rode `npm run lint` e ajuste mensagens exibidas

---

## ❓ FAQ

- Posso usar este projeto como base? Sim, com atribuição ao autor
- Onde atualizo o currículo? Substitua o PDF em `public/` e ajuste o link no componente adequado
- Como adiciono um novo projeto? Inclua a imagem em `public/` e atualize a lista em `Projects.tsx`

---

## 🤝 Contribuição

1. Faça um fork
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit (`git commit -m "feat: minha feature"`)
4. Push (`git push origin feature/minha-feature`)
5. Abra um Pull Request

Commits: prefira o padrão `feat`, `fix`, `chore`, `docs`, `refactor`.

---

## 📄 Licença e Contato

Este projeto está sob a licença MIT. Consulte `LICENSE` (se aplicável).

- LinkedIn: Andrel Carvalho
- GitHub: `@SpeedyxBR`
- Email: `andrel.cilva58@gmail.com`
- Portfólio: `andrel.dev`

---

<div align="center">
  <p><strong>Feito com 💙 e ☕ por Andrel Carvalho</strong></p>
  <p><em>Transformando ideias em experiências digitais incríveis</em></p>
</div>
