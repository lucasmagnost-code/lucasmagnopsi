# Lucas Magno Psi — Homepage v4

Site oficial de Lucas Magno dos Santos Teixeira | Neuropsicólogo e Psicólogo Clínico | CRP 01/24403

**Status:** v4.0 — produção local ✅ | aguardando aprovação do cliente para deploy

---

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS v3
- Lucide React (ícones)
- React Router v6

## Como rodar localmente

```bash
npm install
npm run dev
# Acesse: http://localhost:8080
```

## Build para produção

```bash
npm run build
npm run preview  # preview do build
```

## Deploy

Pronto para deploy em **Vercel** ou **Netlify** (SPA com Vite).

### Vercel (recomendado)
1. Importe este repositório no [Vercel](https://vercel.com)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify
1. Importe este repositório no [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Adicione `_redirects` em `/public` com: `/* /index.html 200`

---

## Importar no Lovable

1. Acesse [lovable.dev](https://lovable.dev)
2. Clique em **Import from GitHub**
3. Selecione `lucasmagnost-code/lucasmagnopsi`
4. O Lovable reconhece o projeto automaticamente (React + Vite + Tailwind)

---

## Estrutura do projeto

```
src/
├── assets/
│   ├── lucas-hero.png       ← Foto profissional (jaleco) — Hero section
│   └── lucas-sobre.jpeg     ← Foto casual (céu azul) — Seção Sobre
├── components/
│   └── landing/
│       ├── Navbar.tsx        ← Nav sticky com blur + mobile overlay
│       ├── Hero.tsx          ← Hero dark, arch frame, parallax magnético
│       ├── Ticker.tsx        ← Strip animado de credenciais
│       ├── Credentials.tsx   ← 4 stats: UnB/IPOG/FGV, 5 anos, ACP·TCC, Híbrido
│       ├── Sobre.tsx         ← Circular photo + texto + pull quote
│       ├── Specialties.tsx   ← 9 especialidades expansíveis (accordion)
│       ├── Avaliacao.tsx     ← Avaliação neuropsicológica, 4 steps
│       ├── Abordagem.tsx     ← 3 cards: ACP, TCC, Psicoterapia Breve
│       ├── ComoFunciona.tsx  ← Timeline 3 passos
│       ├── CtaCentral.tsx    ← CTA dark, headline impactante
│       ├── Faq.tsx           ← 8 perguntas em accordion
│       ├── Footer.tsx        ← Footer navy
│       └── WhatsAppFloat.tsx ← Botão flutuante WhatsApp
├── hooks/
│   └── useScrollAnimation.ts ← IntersectionObserver p/ fade-up/slide
├── pages/
│   └── Index.tsx             ← Página principal (orquestra tudo)
└── index.css                 ← Design system completo (cores, animações)
```

---

## Design System

**Paleta:**
| Token | Hex | Uso |
|---|---|---|
| Navy | `#071739` | Hero, Footer, textos principais |
| Slate | `#4B6382` | Links, ícones, texto secundário |
| Slate Light | `#A4B5C4` | Bordas sutis, elementos suaves |
| Silver | `#CDD5DB` | Backgrounds alternativos |
| Gold | `#A68B68` | Acentos, CTAs, destaques |
| Champagne | `#E3C39D` | Seções quentes, highlights |
| Off-white | `#FAFAF8` | Background principal |

**Fontes:**
- Display: `Cormorant Garamond` (headlines, pull quotes)
- Body: `Inter` (textos, botões, labels)

---

## Fotos

As fotos atuais são do banco pessoal do Lucas:
- `lucas-hero.png` → Foto profissional (jaleco branco, consultório)
- `lucas-sobre.jpeg` → Foto casual (cachecol preto, céu azul)

Para trocar a foto, substitua os arquivos em `src/assets/` mantendo os mesmos nomes.
O enquadramento foi projetado para funcionar com **qualquer foto**:
- Hero: arch frame vertical (funciona com qualquer portrait)
- Sobre: círculo (funciona com qualquer foto de rosto)

---

## Inovação UX

**Parallax magnético no hero:** a foto do Lucas "segue" o cursor do mouse (±10px) ao passar pela seção. Implementado em `Hero.tsx` via `mousemove` listener + `transform: translate()`.

**Especialidades expansíveis:** em vez de grid estático de 9 cards, as especialidades são um accordion — cada item expande ao clicar mostrando a descrição completa. Implementado em `Specialties.tsx`.

---

## Informações do cliente

- **Nome:** Lucas Magno dos Santos Teixeira
- **CRP:** 01/24403
- **Especialidade:** Neuropsicólogo + Psicólogo Clínico
- **Atendimento:** Híbrido (Brasília + Online)
- **WhatsApp:** https://whatsa.me/5514991335995/
- **Instagram:** @lucasmagno.psi
- **Público-alvo:** adultos e idosos (18+), principalmente 20-35 anos
- **Abordagens:** ACP + TCC + Psicoterapia Breve

---

*Projeto JARVIS — Jarvis Web Designer | v4.0 — 04/05/2026*
