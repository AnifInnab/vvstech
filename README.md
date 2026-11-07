# VVS tech – webbplats

Företagswebbplats för VVS tech byggd med **Vite + React + TypeScript + Tailwind CSS v4**.

## Kom igång

```bash
npm install
npm run dev        # http://localhost:5173/vvstech/
npm run build      # produktionsbygge till dist/
npm run preview    # förhandsgranska bygget
```

## Deploy till GitHub Pages

1. Skapa repot `anifinnab/vvstech` på GitHub och pusha koden.
2. Kör `npm run deploy` – bygger och pushar `dist/` till branchen `gh-pages`.
3. Under *Settings → Pages* väljer du branch `gh-pages` (root).
4. Sajten publiceras på <https://anifinnab.github.io/vvstech/>.

`base` i `vite.config.ts` och `homepage` i `package.json` måste matcha repo-namnet.

## Struktur

```
src/
  components/   Header, Footer, Section, ServiceCard, QuoteForm, CtaBand, PageHero
  data/         company.ts (kontaktuppgifter – platshållare), services.ts (tjänsteutbud)
  lib/          quote.ts (offertförfrågan → e-post), utils.ts
  pages/        Home, Services, ServiceDetail, About, Contact, NotFound
public/         logo.svg, logo-white.svg, mark-white.svg, favicon.svg
```

## Att göra innan lansering

- [ ] Byt platshållare i `src/data/company.ts` (telefon, e-post, adress, org.nr)
- [ ] Ersätt kundcitat och nyckeltal i `src/pages/Home.tsx`
- [ ] Lägg in Google Maps-embed i `src/pages/Contact.tsx`
- [ ] Bokningssystem: ersätt `submitQuote()` i `src/lib/quote.ts` med riktig backend/formulärtjänst
