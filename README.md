# Beyond the Mat

Serious practice literacy for yoga practitioners and teachers: **Primary + Intermediate Series** anatomy & alignment, **Yoga Sūtras** and **Bhagavad Gītā** philosophy (with Vedic Listen), **Class Design** assist, upload alignment feedback, breath starter, and a **Continuity** preview (full cohorts post people-testing).

**Product name:** Beyond the Mat (Cursor Project chat may still say “Beyond Yoga”).

**v1 shape (Option A, locked):** series as the practice spine; Philosophy and Class Design as equal pillars. Continuity cohorts / marketplace are out of scope for the live product loop — preview only.

**Delivery:** Responsive **web app first**. Native App Store packaging only after human testing validates the product.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Rule-based class outline generator (no required LLM API)
- Heuristic upload-alignment checklist (browser-local image preview)

## Run locally

```bash
npm install
npm run dev -- --port 43127
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Product surfaces

| Path | What |
|------|------|
| `/` | Brand home — Beyond the Mat |
| `/series` | Primary Series |
| `/series?path=intermediate` | Intermediate Series |
| `/philosophy` | Yoga Sūtras modules |
| `/philosophy?track=gita` | Bhagavad Gītā modules |
| `/philosophy/listen` | Vedic Listen |
| `/design` | Class design assist |
| `/alignment` | Upload alignment |
| `/breath` | Breath starter |
| `/continuity` | Continuity preview (+ shareable practice card toe-hold) |

## Brand

SVG mark + wordmark live in `public/beyond-the-mat-mark.svg` and `public/beyond-the-mat-wordmark.svg` (inline React mark used in header/hero).

## Out of scope (this slice)

Auth, database, live Continuity cohorts/events/graph, encyclopedia-scale pose libraries, live CV, payments, native App Store builds, unlicensed commercial mantra albums.
