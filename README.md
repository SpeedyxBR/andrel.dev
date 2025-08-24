# 🚀 Portfólio Profissional - Andrel Carvalho

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
</div>

<br />

<div align="center">
  <h3>✨ Desenvolvedor Web Full Stack ✨</h3>
  <p><strong>Criando experiências digitais com React, Node.js, TypeScript e Next.js</strong></p>
  <p><em>Focado em código limpo, performance e experiência do usuário</em></p>
</div>

---

## 🎯 Sobre o Projeto

Este é o portfólio profissional de **Andrel Carvalho**, um desenvolvedor web full stack apaixonado por tecnologia. O projeto demonstra habilidades avançadas em desenvolvimento frontend e backend, com um design moderno e responsivo que reflete a qualidade do trabalho desenvolvido.

### 🌟 Características Principais

- **🎨 Design Moderno**: Interface elegante com tema escuro e partículas animadas
- **📱 Totalmente Responsivo**: Otimizado para todos os dispositivos
- **⚡ Performance Otimizada**: Construído com Vite para máxima velocidade
- **🎭 Animações Suaves**: Framer Motion para transições fluidas
- **🌙 Tema Adaptativo**: Alternância automática entre modo claro e escuro
- **📧 Formulário Funcional**: Integração com EmailJS para contato direto

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos e escaláveis

### Build & Deploy

- **Vite** - Build tool ultra-rápido
- **PostCSS** - Processamento CSS avançado
- **ESLint** - Linting de código

### Integrações

- **EmailJS** - Envio de emails direto do frontend
- **React Icons** - Biblioteca de ícones populares

---

## ✨ Funcionalidades Implementadas

### 🏠 **Seção Hero**

- Apresentação profissional com avatar 3D
- Call-to-action para download do currículo
- Links para redes sociais (LinkedIn, GitHub, Email)
- Partículas animadas de fundo

### 📚 **Seção Sobre**

- Timeline interativa da jornada profissional
- Carousel Slick com 3 slides informativos
- Ícones das tecnologias com cores personalizadas
- Animações de entrada com Framer Motion

### 🎯 **Seção Habilidades**

- Cards interativos com níveis de proficiência
- Hover effects elegantes
- Categorização por área de conhecimento

### 🏆 **Seção Certificações**

- Exibição de certificados profissionais
- Layout responsivo e organizado

### 🚀 **Seção Projetos**

- Grid de projetos com imagens e descrições
- Links para repositórios e demos
- Tecnologias utilizadas em cada projeto

### 📞 **Seção Contato**

- Formulário funcional integrado ao EmailJS
- Layout side-by-side elegante
- Validação de campos em tempo real

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### 1. Clone o Repositório

```bash
git clone https://github.com/SpeedyxBR/andrel.dev.git
cd andrel.dev
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure o EmailJS

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Conecte seu serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Copie as credenciais: `service_id`, `template_id`, `public_key`
5. Atualize o arquivo `src/components/Contact.tsx`

### 4. Execute em Desenvolvimento

```bash
npm run dev
```

### 5. Build para Produção

```bash
npm run build
```

---

## 📱 Responsividade

O portfólio é totalmente responsivo e otimizado para:

- 📱 **Mobile** (320px - 768px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (1024px+)
- 🖥️ **iPad** com breakpoints específicos

### 🎨 Breakpoints Personalizados

```javascript
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

## 🎭 Animações e Interações

### ✨ **Framer Motion**

- Entrada suave dos elementos
- Hover effects nos cards
- Transições de página fluidas

### 🎪 **Slick Carousel**

- Navegação por setas elegantes
- Bolinhas indicadoras personalizadas
- Transições suaves entre slides

### 🌟 **Partículas Animadas**

- Fundo dinâmico com partículas
- Adaptação automática ao tema
- Performance otimizada

---

## 🌙 Sistema de Temas

- **Modo Escuro**: Tema principal com gradientes azul-roxo
- **Modo Claro**: Alternativa clara para melhor legibilidade
- **Transição Suave**: Mudança automática entre temas
- **Persistência**: Lembra a preferência do usuário

---

## 📊 Performance

- **⚡ Vite**: Build ultra-rápido
- **🎯 Code Splitting**: Carregamento sob demanda
- **🖼️ Otimização de Imagens**: Lazy loading automático
- **📱 Mobile First**: Otimizações específicas para dispositivos móveis

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Conecte seu repositório GitHub
2. Configure build command: `npm run build`
3. Deploy automático a cada push

### GitHub Pages

```bash
npm run build
# Faça upload da pasta dist/
```

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── pages/          # Componentes principais
│   │   ├── Hero.tsx    # Seção de apresentação
│   │   ├── About.tsx   # Sobre com timeline
│   │   ├── Skills.tsx  # Habilidades técnicas
│   │   ├── Projects.tsx # Portfólio de projetos
│   │   └── Contact.tsx # Formulário de contato
│   └── ui/             # Componentes reutilizáveis
│       ├── Button.tsx  # Botões personalizados
│       ├── Card.tsx    # Cards com hover effects
│       └── Particles.tsx # Sistema de partículas
├── hooks/               # Hooks customizados
├── styles/              # Estilos SCSS
└── constants/           # Configurações e temas
```

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

- **LinkedIn**: [Andrel Carvalho](https://linkedin.com/in/andrelcarvalho)
- **GitHub**: [@SpeedyxBR](https://github.com/SpeedyxBR)
- **Email**: andrel.cilva58@gmail.com
- **Portfólio**: [andrel.dev](https://andrel.dev)

---

<div align="center">
  <p><strong>Feito com 💙 e ☕ por Andrel Carvalho</strong></p>
  <p><em>Transformando ideias em experiências digitais incríveis</em></p>
</div>
