# Revisão Visual & Funcional — Site Lucas Magno (v4 → v5)

**Data:** 06/05/2026
**Sessão:** Lucas T. — Jarvis Web Designer
**Status atual:** v4 entregue (build limpo, localhost:8080), aguardando refinamento antes de aprovação do cliente Lucas M. e 30% sinal.

---

## 1. Base de Análise

**Referências internas consultadas:**
- `Jarvis-Vault/Clientes/Entregues/Manuela-Maltez/Padrões-Validados.md` (modelo institucional)
- `Jarvis-Vault/Clientes/Entregues/Milena-Portela/Padrões-Validados.md` (modelo funil)
- `Guia-Visual-Nicho.md` + `Referencias-Web-Copy.md` + `RESUMO-BASE-NICHO.md`

**Referências externas (Pasta "LPs Validadas - 02.2026" - Chrome):**
- `clinicaalimentapsi.com` → padrões de clínica de psicologia (form estruturado, 5-step process, contadores de impacto, nota CVV)
- `drrachelbarr.substack.com` → padrões de autoridade científica (newsletter como lead magnet, contador de subscribers como social proof)
- `psicoforadacaixa.com.br/metodoforadacaixa` → 403 (skipped)
- `psiconceito.com` → conteúdo dinâmico não capturável via fetch (skipped)

**Observação do Lucas T.:** referências externas são para padrões funcionais, não modelagem visual completa.

---

## 2. O Que o Site v4 Já Faz Bem

| Componente | Status | Observação |
|---|---|---|
| Design system (navy + gold) | ✅ Forte | Distinto do nicho (que tende ao sage/cream) — diferenciação positiva |
| Hero parallax do mouse | ✅ Funciona | ±10px, sutil |
| Specialties accordion (9 itens) | ⚠️ Funciona mas excessivo | Ver P1.4 |
| Avaliação Neuropsicológica | ✅ Bem detalhada | 4 passos numerados + box "O que é" + checklist |
| Abordagem (3 cards) | ✅ Variação visual | ACP/TCC/Breve com cores distintas |
| ComoFunciona (3 passos) | ✅ Conversão | Emoji + número + descrição |
| FAQ (8 itens) | ✅ Completo | Inclui pergunta-CTA no final |
| WhatsApp float | ✅ Implementado | Aparece após 3s ou scroll>300px |
| Wave dividers | ✅ Suaves entre seções | Padrão validado da Manuela |
| HTML lang=pt-BR | ✅ |  |

---

## 3. Diagnóstico — Lista Priorizada de Mudanças

### 🔴 P0 — CRÍTICO (Ética/Conversão/SEO)

| # | Item | Arquivo | Justificativa |
|---|---|---|---|
| **P0.1** | **WhatsApp pré-preenchido** em todos CTAs | `Hero.tsx`, `Avaliacao.tsx`, `ComoFunciona.tsx`, `CtaCentral.tsx`, `Faq.tsx`, `Navbar.tsx`, `Footer.tsx`, `WhatsAppFloat.tsx` | Atualmente `https://whatsa.me/5514991335995/` envia link vazio. Manuela usa `?text=Olá...` que reduz fricção. Cada CTA pode ter mensagem contextual diferente (Hero/Avaliação/FAQ). |
| **P0.2** | **Nota de crise + CVV 188** | Novo bloco antes do Footer ou no Footer | Padrão da Alimenta Psi e exigência ética — site de psicologia precisa explicitar que **não é serviço de emergência** + linkar CVV 188. Risco ético se omitido. |
| **P0.3** | **Bloco Ética/Sigilo dedicado** | Novo componente `Etica.tsx` antes do CTA Central | Manuela tem seção própria com bg sage-muted + tags. Atualmente só aparece na FAQ (#3) e Footer. CFP + LGPD merecem destaque. |
| **P0.4** | **Meta tags SEO completas** | `index.html` | Faltando: `og:image`, `og:url`, `og:locale`, `keywords`, `canonical`, `theme-color`, favicon, Schema.org `Person`/`LocalBusiness`. WhatsApp/social compartilharão sem imagem de preview. |
| **P0.5** | **Footer link labels bug** | `Footer.tsx` linha 27 | `{href.replace("#", "").replace("-", " ")}` produz "como funciona" lowercase. Trocar por mapping de labels: Sobre / Especialidades / Avaliação / Como Funciona / FAQ. |
| **P0.6** | **Política de Privacidade** | Footer placeholder | Linha "© 2026 ... Política de Privacidade" não é link. Criar página `/privacidade` ou modal — exigência LGPD para captura via WhatsApp. |

---

### 🟡 P1 — ALTO IMPACTO (UX/Conversão)

| # | Item | Arquivo | Justificativa |
|---|---|---|---|
| **P1.1** | **Pain Points section** entre Sobre e Specialties | Novo `PainPoints.tsx` | Padrão validado da Milena. 4-6 frases em 1ª pessoa do paciente: "Me esforço o dobro e ainda assim sinto que falta algo." Cria identificação emocional antes do leque de especialidades. |
| **P1.2** | **Social proof metrics** (impacto numérico) | Inserir em `Credentials.tsx` ou novo bloco | Trocar "5 anos / Híbrido" por números mais quentes: "+ X pacientes atendidos · X horas de clínica · X laudos entregues" (números que Lucas M. precisará confirmar). Padrão Alimenta Psi/Substack. |
| **P1.3** | **Sticky Mobile Bar** | Novo `StickyMobileBar.tsx` | Padrão validado Milena — visível só em mobile (<768px), CTA persistente "Agendar pelo WhatsApp" no rodapé fixo. Mobile = 65%+ do tráfego no nicho. |
| **P1.4** | **Specialties: colapsar para top 6** | `Specialties.tsx` | 9 itens é muito (overwhelm). Mostrar 6 + botão "Ver mais especialidades" expansível. Manter Avaliação Neuropsicológica como destaque (já tem `cta: true`). |
| **P1.5** | **Avaliação: indicador de duração + investimento** | `Avaliacao.tsx` | Adicionar pequeno bloco "Processo completo: 4-6 sessões · Investimento: a partir de R$X" — reduz fricção (FAQ já cita preço). Não precisa tabela rígida; apenas faixa. |
| **P1.6** | **Hero CTA principal mais curto** | `Hero.tsx` linha 78 | "Quero agendar uma conversa" (5 palavras) → "Agendar Acolhimento" (2 palavras) — padrão validado. Inicial fica "Conheça minha abordagem" mas ela leva a #sobre que não é abordagem (é Sobre/Bio). Trocar para `#abordagem` ou ajustar copy. |
| **P1.7** | **Photo parallax na Sobre** | `Sobre.tsx` | Atualmente Hero tem parallax mouse mas Sobre photo é estática. Pequeno tilt no hover (rotate 2deg → 0deg) como Milena faz. |
| **P1.8** | **Scroll-triggered animations consistência** | `useScrollAnimation.ts` | Verificar que `slide-left` e `slide-right` (Sobre) estão funcionando — códig CSS existe mas a hook precisa ativar `.visible`. Risco: classes podem não estar sendo observadas. |
| **P1.9** | **Tom 2ª pessoa em mais lugares** | Vários componentes | Sobre está em 1ª pessoa do Lucas. CtaCentral fala "Quando você estiver pronto" (✅). Avaliação fala "como o seu cérebro processa" (✅). Mas Especialties.full alterna pessoas — uniformizar para "você". |

---

### 🟢 P2 — POLISH (Diferenciação/Refinamento)

| # | Item | Arquivo | Justificativa |
|---|---|---|---|
| **P2.1** | **Self-Assessment quiz** (3 perguntas) | Novo `SelfAssessment.tsx` | Padrão Milena. Aumenta engajamento + qualifica. **Decisão Lucas T.:** site é institucional ou hibrido com captura? Se institucional puro, pular. |
| **P2.2** | **Instagram preview block** | Novo bloco no fim ou Footer | Atualmente @lucasmagno.psi é só link. Mostrar 3-6 últimos posts via Instagram Basic Display API ou screenshot estático. |
| **P2.3** | **Section spacing variation** | `index.css` ou per-section | Todas seções usam `py-20 md:py-28`. Ritmo visual ganha se alternar 16/24/20 entre seções pesadas e leves. |
| **P2.4** | **Slate text contrast tweak** | `index.css` linha 12 | `--slate: 210 17% 40%` em texto sobre branco está em ~5.0:1 — passa WCAG AA mas justo. Escurecer 5% melhora leitura. |
| **P2.5** | **Eyebrow no formato `NICHE · METHOD · MODE`** | Aplicar uniforme | Hero já tem `CRP 01/24403 · Brasília, DF · Híbrido` (✅). Outras seções usam só `Sobre mim`, `Para quem atendo` — adicionar contexto onde fizer sentido. |
| **P2.6** | **FAQ #1 aberto por padrão** | `Faq.tsx` | Reduz fricção — primeira pergunta "Quanto custa" é a mais comum. Pequeno aumento de scroll. |
| **P2.7** | **Testimonials infrastructure** | Novo `Depoimentos.tsx` (oculto por padrão) | Componente pronto para quando Lucas M. coletar autorizações. CFP exige consentimento por escrito. Criar com 0-3 placeholders + flag `display: none` controlável. |
| **P2.8** | **Lead magnet opcional** | Novo `Newsletter.tsx` | Pequeno bloco "Receba conteúdo sobre saúde mental" com Formspree. **Decisão Lucas T.:** afasta do modelo institucional puro? Se sim, pular. |
| **P2.9** | **Avaliação: tempo médio nos passos** | `Avaliacao.tsx` | Adicionar `~30min`, `~3h`, `~1 semana`, `~1h` debaixo de cada step. Padrão Manuela. |
| **P2.10** | **Hero photo: gradient mais suave** | `Hero.tsx` linhas 117-124 | Gradient bottom 65%-100% pode ficar agressivo em fotos com fundo claro. Testar 75%-100%. |

---

## 4. Decisões Pendentes (Precisam de Lucas T.)

Antes de codar, preciso de resposta em:

1. **Modelo do site:** institucional puro (Manuela) ou híbrido com captura (mistura Manuela + Milena)?
   - **Se institucional puro:** pular P2.1 (quiz) e P2.8 (lead magnet)
   - **Se híbrido:** incluir os dois com Formspree

2. **Números reais para P1.2 (social proof):**
   - Quantos pacientes atendidos? Horas de clínica? Laudos entregues?
   - Lucas M. precisa confirmar — pode ser "+200 pacientes", "+1000h clínicas", "+50 laudos" (aprox.)
   - Se não confiável ainda: usar "5 anos · CRP ativo · Online + Brasília" sem inflar

3. **Faixa de preço da Avaliação (P1.5):**
   - FAQ diz R$100-200 (sessão). Avaliação completa custa quanto?
   - Padrão mercado: R$1.500-3.500 (4-6 sessões)
   - Lucas M. precisa confirmar antes de eu colocar

4. **Política de Privacidade (P0.6):**
   - Página dedicada `/privacidade` ou modal popup?
   - Texto pronto ou precisa que eu redija um base genérica LGPD?

5. **Política de Atendimento (informação adicional?):**
   - Menores de 18 anos: já está na FAQ que não atende. Suficiente?
   - "Quem não é meu público" (anti-ICP): inserir? (alguns sites fazem)

6. **Logotipo:**
   - Atualmente "Lucas Magno Psi" em texto Cormorant. Manter ou criar logo?
   - Logo vira **serviço adicional** (precificar separado) — só sinaliza se Lucas M. tem interesse

---

## 5. Plano de Execução (após aprovação)

**Sequência sugerida:**

1. **Bloco P0** (1.5h) — fundação ética/SEO/conversão
2. **Bloco P1** (3-4h) — UX/conversão visíveis
3. **Bloco P2** (1-2h) — polish (depende de decisões)
4. **Build limpo + dev server validation**
5. **Screenshots before/after (Playwright)** — registro
6. **Commit no GitHub** `lucasmagnost-code/lucasmagnopsi` com convencional commit:
   ```
   feat(v5): refino visual e funcional pós-revisão

   - P0: WhatsApp pré-preenchido, ética/CVV, SEO completo
   - P1: pain points, social proof, sticky mobile, specialties top 6
   - P2: animações, testimonials infra
   ```
7. **Atualizar memória** `project_lucas_magno_psi.md` com v5
8. **Notion:** atualizar página do projeto (será feita na Tarefa 3)

**Tempo estimado total:** 5-7h

---

## 6. Critério de Pronto

- [ ] Build sem erros (`npm run build`)
- [ ] Dev server roda em localhost:8080
- [ ] Lighthouse Mobile ≥90 (Performance, Accessibility, SEO)
- [ ] WhatsApp pre-fill funciona em todos CTAs
- [ ] Nenhuma frase fora do CFP
- [ ] CRP visível em Hero + Footer + meta tags
- [ ] CVV 188 + nota crise visível
- [ ] LGPD link/nota visível
- [ ] Mobile tested ≤375px e ≥768px
- [ ] Cliente Lucas M. recebe link e print do antes/depois

---

## CHECKPOINT 1 — DECISÃO DE LUCAS T.

**Aprova essa lista?** Posso prosseguir com:

- **Opção A (recomendada):** Executar **P0 + P1 completos**, e fazer P2 só os itens que não exigem decisão (P2.3, P2.4, P2.5, P2.6, P2.9, P2.10). Pular P2.1, P2.7, P2.8 até ter direção clara sobre modelo do site.

- **Opção B:** Executar **só P0** primeiro, validar comigo, depois P1, depois P2. Mais checkpoints, menos risco.

- **Opção C:** Você ajusta a lista antes de eu começar (remover/adicionar/repriorizar itens).

**Também preciso das respostas das 6 decisões pendentes (seção 4) para itens P1.2, P1.5, P0.6 e P2.x.**
