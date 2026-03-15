/**
 * Server-only configuratie
 * Deze waarden worden NOOIT naar de browser gestuurd.
 * Ze worden alleen gebruikt in API routes (server-side).
 *
 * BELANGRIJK: Stel deze in als Vercel Environment Variables:
 *   - ADMIN_PASSWORD (voor /admin login)
 *   - SUPABASE_SERVICE_ROLE_KEY (voor database schrijftoegang)
 *
 * Of gebruik build-time variabelen:
 *   - NEXT_PUBLIC_ADMIN_PW (fallback, wordt bij build ingebakken)
 *   - NEXT_PUBLIC_SRK (fallback, wordt bij build ingebakken)
 */

// Admin wachtwoord voor de /admin pagina
export const ADMIN_PASSWORD =
  process.env.ADMIN_PASSWORD ||
  process.env.NEXT_PUBLIC_ADMIN_PW ||
  "energiekenner2026";

// Supabase service role key voor schrijftoegang
export const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SRK ||
  "";

// Supabase URL
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://gbpbnhywwwhyxtbazawh.supabase.co";
