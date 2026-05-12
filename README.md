# Comunicações de Redes Móveis — Webinar SPA

React 19 + Vite 7 + TailwindCSS 4. SPA pura, sem SSR. Node 22+.

## Requisitos
- Node.js 22 ou superior

## Desenvolvimento
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy

### Vercel
1. Importa o repositório em https://vercel.com/new
2. Framework: **Vite** (auto-detetado)
3. Build command: `npm run build` · Output: `dist`
4. O `vercel.json` já trata do fallback SPA.

### Cloudflare Pages
1. Cria um projeto em https://dash.cloudflare.com → Pages → Connect to Git
2. Build command: `npm run build` · Output directory: `dist`
3. Variável de ambiente: `NODE_VERSION=22`
4. O `public/_redirects` já trata do fallback SPA.

### Qualquer host estático (Netlify, GitHub Pages, S3, etc.)
Faz `npm run build` e publica o conteúdo de `dist/`.
