# Componentes do Site

Esta pasta contém todos os componentes reutilizáveis do site, organizados por categoria.

## Estrutura Sugerida

```
components/
├── ui/           # Componentes de interface básicos (Button, Card, Input, etc.)
├── layout/       # Componentes de layout (Header, Footer, Sidebar, etc.)
├── sections/     # Seções específicas da página (Hero, About, Projects, etc.)
└── shared/       # Componentes compartilhados entre diferentes partes
```

## Como Usar

1. **Componentes UI**: Botões, cards, inputs, modais, etc.
2. **Componentes de Layout**: Estrutura principal da página
3. **Seções**: Blocos de conteúdo específicos
4. **Compartilhados**: Componentes usados em múltiplas páginas

## Importação

Para usar estes componentes, importe-os assim:

```tsx
import { Button } from "../components/ui/Button";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/sections/Hero";
```

## Vantagens desta Organização

- ✅ Separação clara de responsabilidades
- ✅ Fácil manutenção e reutilização
- ✅ Melhor organização do código
- ✅ Facilita o trabalho em equipe
- ✅ Componentes fora do ambiente de desenvolvimento (src)
