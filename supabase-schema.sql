-- ============================================================
-- ENERGIEVERGELIJKER DATABASE SCHEMA
-- Supabase (PostgreSQL) - Maart 2026
-- ============================================================

-- 1. Energieleveranciers (vaste contracten)
CREATE TABLE energy_providers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT,
  kwh_rate NUMERIC(6,4) NOT NULL,        -- €/kWh
  gas_rate NUMERIC(6,4) NOT NULL,         -- €/m³
  welcome_bonus INTEGER DEFAULT 0,        -- € welkomstbonus (1 jaar vast)
  welcome_bonus_3yr INTEGER DEFAULT 0,    -- € welkomstbonus (3 jaar vast)
  contract_type TEXT NOT NULL DEFAULT 'vast_1jaar',
  green_energy BOOLEAN DEFAULT false,
  estimated_monthly NUMERIC(7,2),         -- geschat maandbedrag
  feed_in_cost_kwh NUMERIC(6,4),          -- terugleverkosten per kWh
  feed_in_compensation NUMERIC(6,4),      -- terugleververgoeding per kWh
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Dynamische tarieven leveranciers
CREATE TABLE dynamic_providers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT,
  fixed_cost_electricity NUMERIC(6,2),    -- vaste kosten stroom p/m
  fixed_cost_gas NUMERIC(6,2),            -- vaste kosten gas p/m
  purchase_fee_electricity NUMERIC(6,4),  -- inkoopvergoeding stroom €/kWh
  purchase_fee_gas NUMERIC(6,4),          -- inkoopvergoeding gas €/m³
  green_energy BOOLEAN DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Netbeheerkosten
CREATE TABLE grid_operators (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  electricity_cost_yearly NUMERIC(7,2),
  gas_cost_yearly NUMERIC(7,2),
  total_yearly NUMERIC(7,2),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Energiebelasting
CREATE TABLE energy_tax (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  year INTEGER NOT NULL,
  gas_tax_per_m3 NUMERIC(6,4),
  electricity_tax_per_kwh NUMERIC(6,4),
  tax_reduction NUMERIC(7,2),             -- vermindering energiebelasting
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TTF Gasprijzen (marktdata)
CREATE TABLE ttf_prices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  price_eur_mwh NUMERIC(6,2),
  event_description TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE energy_providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE dynamic_providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE grid_operators ENABLE ROW LEVEL SECURITY;
ALTER TABLE energy_tax ENABLE ROW LEVEL SECURITY;
ALTER TABLE ttf_prices ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read energy_providers" ON energy_providers FOR SELECT USING (true);
CREATE POLICY "Public read dynamic_providers" ON dynamic_providers FOR SELECT USING (true);
CREATE POLICY "Public read grid_operators" ON grid_operators FOR SELECT USING (true);
CREATE POLICY "Public read energy_tax" ON energy_tax FOR SELECT USING (true);
CREATE POLICY "Public read ttf_prices" ON ttf_prices FOR SELECT USING (true);

-- ============================================================
-- SEED DATA - Maart 2026
-- ============================================================

-- Vaste contracten leveranciers
INSERT INTO energy_providers (name, logo_url, kwh_rate, gas_rate, welcome_bonus, welcome_bonus_3yr, contract_type, green_energy, estimated_monthly, feed_in_cost_kwh, feed_in_compensation) VALUES
  ('Energiedirect',   '/logos/energiedirect.svg',   0.2595, 1.2954, 350, 0,   'vast_1jaar', false, 149.16, NULL,   0.150),
  ('Essent',          '/logos/essent.svg',          0.2790, 1.3341, 300, 0,   'vast_1jaar', false, 152.78, 0.130,  0.150),
  ('Vattenfall',      '/logos/vattenfall.svg',      0.2640, 1.3962, 400, 0,   'vast_1jaar', true,  153.23, NULL,   NULL),
  ('Eneco',           '/logos/eneco.svg',           0.2612, 1.3802, 350, 0,   'vast_1jaar', true,  150.58, 0.182,  0.143),
  ('Greenchoice',     '/logos/greenchoice.svg',     0.2623, 1.3895, 350, 0,   'vast_1jaar', true,  151.40, NULL,   NULL),
  ('DELTA Energie',   '/logos/delta.svg',           0.2510, 1.3712, 300, 0,   'vast_1jaar', true,  152.52, NULL,   0.165),
  ('OXXIO',           '/logos/oxxio.svg',           0.2561, 1.3766, 275, 0,   'vast_1jaar', false, 154.01, NULL,   NULL),
  ('Budget Energie',  '/logos/budget.svg',          0.2548, 1.3800, 370, 570, 'vast_1jaar', false, 154.69, 0.109,  0.010),
  ('UnitedConsumers', '/logos/unitedconsumers.svg', 0.2250, 1.1660, 465, 600, 'vast_1jaar', false, 116.24, NULL,   NULL),
  ('Mega',            '/logos/mega.svg',            0.3290, 1.6540, 688, 592, 'vast_1jaar', false, 198.31, NULL,   NULL),
  ('Vandebron',       '/logos/vandebron.svg',       0.2680, 1.4100, 440, 510, 'vast_1jaar', true,  155.00, 0.160,  0.160),
  ('Engie',           '/logos/engie.svg',           0.2720, 1.4050, 435, 500, 'vast_1jaar', false, 156.50, NULL,   0.124),
  ('Coolblue Energie','/logos/coolblue.svg',        0.2650, 1.3900, 300, 0,   'vast_1jaar', true,  153.80, 0.115,  NULL),
  ('Pure Energie',    '/logos/pure.svg',            0.2600, 1.3850, 320, 0,   'vast_1jaar', true,  152.00, 0.178,  NULL);

-- Dynamische tarieven leveranciers
INSERT INTO dynamic_providers (name, logo_url, fixed_cost_electricity, fixed_cost_gas, purchase_fee_electricity, purchase_fee_gas, green_energy) VALUES
  ('Frank Energie',  '/logos/frank.svg',   7.25,  7.00, 0.0182, 0.0799, true),
  ('Tibber',         '/logos/tibber.svg',   5.99,  5.99, 0.0248, 0.0856, true),
  ('Zonneplan',      '/logos/zonneplan.svg',6.25,  6.25, 0.0200, 0.0800, true),
  ('NextEnergy',     '/logos/nextenergy.svg',5.99, 5.99, 0.0219, 0.0799, true),
  ('ANWB Energie',   '/logos/anwb.svg',    8.50,  8.50, 0.0200, 0.0591, true),
  ('Pure Energie',   '/logos/pure.svg',    6.05,  6.05, 0.0199, 0.0726, true),
  ('Budget Energie', '/logos/budget.svg',  12.12, 0.00, 0.0000, 0.0000, false);

-- Netbeheerders
INSERT INTO grid_operators (name, electricity_cost_yearly, gas_cost_yearly, total_yearly) VALUES
  ('Liander',       478.04, 266.62, 744.66),
  ('Enexis',        475.84, 266.36, 742.20),
  ('Stedin',        489.77, 274.44, 764.21),
  ('Coteq',         456.35, 258.89, 715.24),
  ('Westland Infra',500.17, 230.81, 730.98),
  ('Rendo',         475.83, 262.87, 738.70);

-- Energiebelasting
INSERT INTO energy_tax (year, gas_tax_per_m3, electricity_tax_per_kwh, tax_reduction) VALUES
  (2025, 0.6996, 0.1228, 635.19),
  (2026, 0.7268, 0.1108, 628.96);

-- TTF Gasprijzen maart 2026
INSERT INTO ttf_prices (date, price_eur_mwh, event_description) VALUES
  ('2026-03-01', 32.00, 'Stabiele markt aan het einde van de winter'),
  ('2026-03-02', 59.00, 'Escalatie conflict Midden-Oosten; aanbodvrees'),
  ('2026-03-03', 56.00, 'Lichte stabilisatie na initiële schok'),
  ('2026-03-05', 51.00, 'Aanhoudende volatiliteit en onzekerheid'),
  ('2026-03-09', 68.00, 'Piek na berichten over mogelijke blokkades'),
  ('2026-03-10', 47.00, 'Correctie na winstnemingen en herstel aanbod'),
  ('2026-03-12', 51.00, 'Voortdurende gevoeligheid voor geopolitiek nieuws');
