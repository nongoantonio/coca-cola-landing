# Coca-Cola — Landing Page

Landing page animada da Coca-Cola, feita com **React + TypeScript + Vite**.

## Como correr o projeto

```bash
npm install
npm run dev
```

Depois abra o endereco que aparece no terminal (normalmente `http://localhost:5173`).

## Scripts disponiveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — compila o TypeScript e gera a build de producao em `dist/`
- `npm run preview` — serve a build de producao localmente para testar

## Estrutura

```
src/
  assets/          imagens do produto e logotipo
  components/      cada seccao da pagina (Navbar, Hero, Story, Features, Showcase, Footer...)
  styles/          estilos globais e tokens de design (cores, fontes, espacamentos)
  App.tsx          junta todas as seccoes
  main.tsx         ponto de entrada da aplicacao
```

## Notas

- Todo o codigo (variaveis, classes, ficheiros) esta em ingles; os comentarios e o conteudo visivel estao em portugues.
- O cartao interativo da seccao "Historia" (`FlipCard`) e uma adaptacao do componente CSS fornecido, com as cores e imagens da marca.
- Os icones vêm da biblioteca `lucide-react`.
- As fontes `Fraunces` e `Poppins` sao carregadas via Google Fonts no `src/styles/index.css`.

## Modo claro / escuro

O site tem um botao na barra de navegacao que alterna entre **modo escuro** (predefinido) e **modo claro**.

- A escolha fica guardada no `localStorage`, por isso mantem-se entre visitas.
- Na primeira visita, o site segue a preferencia do sistema operativo do utilizador.
- As cores estao definidas como *tokens* em `src/styles/index.css` (`--bg`, `--text`, `--border`, etc.).
  Para ajustar qualquer tema basta mudar os valores nos blocos `:root` / `[data-theme='light']`.
