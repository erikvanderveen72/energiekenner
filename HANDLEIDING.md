# Energievergelijker — Deployment Handleiding

## Wat heb je gebouwd?
Een moderne energievergelijker met Next.js, Tailwind CSS en Supabase. De app bevat:
- **Homepage** met hero, marktdata (TTF-grafiek), en vergelijkingstabel met filters
- **Dynamische tarieven** pagina (Frank Energie, Tibber, etc.)
- **Zonnepanelen** pagina (terugleverkosten & vergoedingen)
- **Netbeheer** pagina (kosten per netbeheerder)

---

## STAP 1: Supabase Database opzetten

1. Ga naar [supabase.com](https://supabase.com) en maak een gratis account aan
2. Klik **New Project** — kies een naam en wachtwoord
3. Ga naar **SQL Editor** (linker menu)
4. Plak de volledige inhoud van `supabase-schema.sql` in de editor
5. Klik **Run** — je tabellen en data staan nu klaar
6. Ga naar **Settings → API** en kopieer:
   - **Project URL** (bijv. `https://abcdef.supabase.co`)
   - **anon public key** (de lange string)

---

## STAP 2: Code naar GitHub pushen

1. Ga naar [github.com](https://github.com) en maak een nieuw repository aan
   - Naam: `energiekenner` (of wat je wilt)
   - Zet op **Private**
2. Open een terminal in de `energievergelijker` map en voer uit:

```bash
git init
git add .
git commit -m "Initial commit: Energievergelijker MVP"
git branch -M main
git remote add origin https://github.com/JOUW-USERNAME/energiekenner.git
git push -u origin main
```

---

## STAP 3: Vercel deployment

1. Ga naar [vercel.com](https://vercel.com) en log in met je GitHub account
2. Klik **Add New → Project**
3. Importeer je `energiekenner` repository
4. Bij **Environment Variables** voeg toe:
   - `NEXT_PUBLIC_SUPABASE_URL` → je Supabase Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → je Supabase anon key
5. Klik **Deploy** — klaar!

---

## STAP 4: Custom domein (energiekenner.nl)

### In Vercel:
1. Ga naar je project → **Settings → Domains**
2. Voeg toe: `energiekenner.nl` en `www.energiekenner.nl`
3. Vercel geeft je DNS-records (CNAME of A-record)

### In InternetToday (mijn.internettoday.nl):
1. Log in op mijn.internettoday.nl
2. Ga naar **DNS-beheer** voor energiekenner.nl
3. Voeg de volgende records toe:

| Type  | Naam | Waarde                      |
|-------|------|-----------------------------|
| A     | @    | `76.76.21.21`               |
| CNAME | www  | `cname.vercel-dns.com`      |

4. Wacht 5-30 minuten op DNS-propagatie
5. Vercel regelt automatisch het SSL-certificaat (HTTPS)

---

## STAP 5: Data bijwerken

Om tarieven bij te werken:
1. Ga naar Supabase → **Table Editor**
2. Klik op `energy_providers`
3. Pas de tarieven aan of voeg nieuwe leveranciers toe
4. De website toont automatisch de nieuwe data (na refresh)

---

## Lokaal draaien (voor ontwikkeling)

```bash
cd energievergelijker
npm install
cp .env.example .env.local
# Vul je Supabase credentials in .env.local
npm run dev
# Open http://localhost:3000
```

---

## Technische stack
- **Next.js 16** (App Router, Server Components)
- **Tailwind CSS v4** (utility-first styling)
- **Supabase** (PostgreSQL database)
- **Vercel** (hosting, CDN, SSL)
- **TypeScript** (type safety)

De app werkt ook zonder Supabase-verbinding dankzij ingebouwde fallback data.
