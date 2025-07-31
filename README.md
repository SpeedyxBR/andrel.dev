# Portfólio Profissional - Andrel Carvalho

Este é o projeto do portfólio profissional de Andrel Carvalho, desenvolvido em React + Vite, com integração de envio de e-mail via EmailJS.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- TailwindCSS
- EmailJS
- Lucide Icons

## Funcionalidades

- Página de apresentação profissional
- Seção de projetos
- Formulário de contato funcional (envio direto para o e-mail via EmailJS)
- Responsivo e moderno

## Como rodar o projeto localmente

1. **Clone o repositório:**

   ```bash
   git clone git@github.com:SpeedyxBR/andrel.dev.git
   cd andrel.dev
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o EmailJS:**

   - Crie uma conta em [EmailJS](https://www.emailjs.com/).
   - Conecte seu serviço de e-mail (ex: Gmail).
   - Crie um template e copie o `service_id`, `template_id` e `public_key`.
   - Atualize o arquivo `src/components/Contact.tsx` com seus dados do EmailJS.

4. **Rode o projeto:**

   ```bash
   npm run dev
   ```

5. **Build para produção:**
   ```bash
   npm run build
   ```

## Deploy

- O projeto pode ser hospedado facilmente no Vercel, Netlify ou GitHub Pages.
- Basta subir o conteúdo da pasta `dist` após o build.

## Contato

- [LinkedIn](https://linkedin.com/in/andrelcarvalho)
- [GitHub](https://github.com/SpeedyxBR)
- Email: contato@exemplo.com

---

Projeto feito com 💙 por Andrel Carvalho.
