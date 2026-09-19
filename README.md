# Coca-Cola — Landing Page

Landing page moderna e animada da Coca-Cola, construída do zero com **React**, **TypeScript** e **Vite**. Inclui modo claro/escuro, seletor de idioma (PT/EN), e animações discretas em cada secção.

![tech](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![tech](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![tech](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

---

## ✨ Funcionalidades

- **Hero** com garrafa em foco fotográfico, lata de destaque e mensagem de marca
- **Faixa de estatísticas** em movimento contínuo (marquee)
- **Secção "Juntos é melhor"** com fotografia de estilo de vida
- **A nossa história** com timeline e um cartão interativo (flip on hover)
- **Porque escolher Coca-Cola** — cartões editoriais numerados, sem ícones genéricos
- **Pelo mundo** — comparação garrafa vs. lata com estatísticas globais
- **Rodapé completo** com newsletter, redes sociais e créditos
- **Modo claro / escuro** com preferência guardada e deteção do tema do sistema
- **Idioma PT / EN** — todo o conteúdo do site muda a partir de um único ficheiro de traduções
- Totalmente responsivo (telemóvel, tablet, desktop)

## 🚀 Como correr o projeto

```bash
npm install
npm run dev
```

Depois abre o endereço que aparece no terminal (normalmente `http://localhost:5173`).

### Outros scripts

| Comando           | O que faz                                              |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento                     |
| `npm run build`   | Compila o TypeScript e gera a build de produção em `dist/` |
| `npm run preview` | Serve a build de produção localmente, para testar        |

## 📁 Estrutura do projeto

```
src/
├── assets/              imagens do produto, logotipo e fotografias
├── components/
│   ├── Navbar.tsx       barra de navegacao fixa, com toggles de tema/idioma
│   ├── Hero.tsx          seccao principal
│   ├── Marquee.tsx       faixa de estatisticas em loop
│   ├── Lifestyle.tsx     seccao emocional com fotografia
│   ├── Story.tsx         historia da marca + cartao interativo
│   ├── FlipCard.tsx      cartao que expande ao passar o rato
│   ├── Features.tsx      razoes para escolher a marca
│   ├── Showcase.tsx      garrafa vs. lata, estatisticas globais
│   ├── Footer.tsx        rodape com newsletter e creditos
│   ├── ThemeToggle.tsx   botao de alternancia claro/escuro
│   └── LanguageToggle.tsx botao de alternancia PT/EN
├── hooks/
│   └── useTheme.ts       logica do tema (guarda escolha, deteta o sistema)
├── i18n/
│   ├── LanguageContext.tsx  contexto React do idioma ativo
│   └── translations.ts      dicionario central PT/EN
├── styles/
│   └── index.css         tokens de design (cores, tipografia, espacamentos)
├── App.tsx                junta todas as seccoes
└── main.tsx               ponto de entrada da aplicacao
```

## 🎨 Personalizar

- **Cores e tipografia** — editar os tokens em `src/styles/index.css` (blocos `:root`, `[data-theme='dark']`, `[data-theme='light']`)
- **Texto do site (PT/EN)** — editar `src/i18n/translations.ts`; cada secção lê a sua parte de lá (`t.hero`, `t.story`, `t.footer`, etc.)
- **Imagens** — substituir os ficheiros em `src/assets/`

## 🛠️ Stack

- [React 18](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [lucide-react](https://lucide.dev) — ícones

## 👤 Autor

**Nongo António**
Software Engineer · Web Development · UI/UX Design
Angola · Remote Friendly

---

Projeto criado para fins de estudo e prática de desenvolvimento front-end. Coca-Cola® é uma marca registada da The Coca-Cola Company; este projeto não tem afiliação oficial com a marca.
