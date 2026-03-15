# Energiekenner.nl — Project Context

## Git & Deployment Workflow

Bij het pushen van wijzigingen altijd dit commando gebruiken:

```bash
cd ~/energievergelijker\ v2/energievergelijker && git add -A && git commit -m "feat: beschrijving van wijziging" && git push
```

Het project is gehost op Vercel en deployed automatisch bij elke push naar main.

## Technische Stack
- Next.js 16 (App Router, Server Components, ISR)
- Tailwind CSS v4
- Supabase (PostgreSQL)
- TypeScript
- Vercel hosting

## Domein
- Productie: https://energiekenner.nl
- DNS: InternetToday (mijn.internettoday.nl)

## Database
- Supabase project met tabellen: energy_providers, dynamic_providers, ttf_prices
- Fallback data in src/lib/fallback-data.ts als Supabase niet bereikbaar is

## Structuur
- Alle pagina's hebben breadcrumbs, canonical URLs en structured data
- PageHero component voor hero secties op subpagina's
- ComparisonTable met sorteer/filter functionaliteit
- StructuredData.tsx bevat JSON-LD schemas (Website, Organization, Service, FAQ, Breadcrumb, Article)
