// Fallback data zodat de app ook werkt zonder Supabase-verbinding
// Gebaseerd op marktdata maart 2026 — bijgewerkt 28 maart 2026
// Bronnen: EasySwitch.nl, Energievergelijk.nl, Keuze.nl
// Let op: gasprijzen flink gestegen door Midden-Oosten escalatie (Straat van Hormuz blokkade)

import type { EnergyProvider, DynamicProvider, GridOperator, EnergyTax, TtfPrice } from './database.types';

export const fallbackProviders: EnergyProvider[] = [
  { id: '1', name: 'Coolblue Energie', logo_url: null, kwh_rate: 0.2570, gas_rate: 1.2490, welcome_bonus: 300, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 172.00, feed_in_cost_kwh: 0.115, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '2', name: 'Engie', logo_url: null, kwh_rate: 0.2720, gas_rate: 1.2130, welcome_bonus: 435, welcome_bonus_3yr: 500, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 173.00, feed_in_cost_kwh: null, feed_in_compensation: 0.124, updated_at: '2026-03-28' },
  { id: '3', name: 'Innova Energie', logo_url: null, kwh_rate: 0.2590, gas_rate: 1.3470, welcome_bonus: 250, welcome_bonus_3yr: 0, contract_type: 'vast_3jaar', green_energy: true, estimated_monthly: 176.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '4', name: 'Pure Energie', logo_url: null, kwh_rate: 0.2600, gas_rate: 1.2640, welcome_bonus: 320, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 174.00, feed_in_cost_kwh: 0.178, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '5', name: 'Energiedirect', logo_url: null, kwh_rate: 0.2600, gas_rate: 1.3000, welcome_bonus: 260, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 176.00, feed_in_cost_kwh: null, feed_in_compensation: 0.150, updated_at: '2026-03-28' },
  { id: '6', name: 'Greenchoice', logo_url: null, kwh_rate: 0.2660, gas_rate: 1.4590, welcome_bonus: 350, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 183.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '7', name: 'Eneco', logo_url: null, kwh_rate: 0.2690, gas_rate: 1.4230, welcome_bonus: 360, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 182.00, feed_in_cost_kwh: 0.182, feed_in_compensation: 0.143, updated_at: '2026-03-28' },
  { id: '8', name: 'DELTA Energie', logo_url: null, kwh_rate: 0.2840, gas_rate: 1.3120, welcome_bonus: 300, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 180.00, feed_in_cost_kwh: null, feed_in_compensation: 0.165, updated_at: '2026-03-28' },
  { id: '9', name: 'OXXIO', logo_url: null, kwh_rate: 0.2572, gas_rate: 1.3766, welcome_bonus: 275, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 178.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '10', name: 'Vandebron', logo_url: null, kwh_rate: 0.2490, gas_rate: 1.4820, welcome_bonus: 390, welcome_bonus_3yr: 450, contract_type: 'vast_3jaar', green_energy: true, estimated_monthly: 182.00, feed_in_cost_kwh: 0.160, feed_in_compensation: 0.160, updated_at: '2026-03-28' },
  { id: '11', name: 'Vattenfall', logo_url: null, kwh_rate: 0.3010, gas_rate: 1.3030, welcome_bonus: 350, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 182.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '12', name: 'Essent', logo_url: null, kwh_rate: 0.2830, gas_rate: 1.2950, welcome_bonus: 340, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 179.00, feed_in_cost_kwh: 0.130, feed_in_compensation: 0.150, updated_at: '2026-03-28' },
  { id: '13', name: 'Frank Energie', logo_url: null, kwh_rate: 0.2520, gas_rate: 1.3200, welcome_bonus: 200, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 174.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '14', name: 'UnitedConsumers', logo_url: null, kwh_rate: 0.3370, gas_rate: 1.2400, welcome_bonus: 60, welcome_bonus_3yr: 120, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 185.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '15', name: 'Budget Energie', logo_url: null, kwh_rate: 0.2780, gas_rate: 1.5250, welcome_bonus: 525, welcome_bonus_3yr: 570, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 189.00, feed_in_cost_kwh: 0.109, feed_in_compensation: 0.010, updated_at: '2026-03-28' },
  { id: '16', name: 'Mega', logo_url: null, kwh_rate: 0.3180, gas_rate: 1.6620, welcome_bonus: 688, welcome_bonus_3yr: 592, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 199.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '17', name: 'Vrijopnaam', logo_url: null, kwh_rate: 0.2442, gas_rate: 1.2486, welcome_bonus: 0, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 168.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '18', name: 'Energiek', logo_url: null, kwh_rate: 0.2400, gas_rate: 1.2700, welcome_bonus: 0, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 165.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
  { id: '19', name: 'NextEnergy', logo_url: null, kwh_rate: 0.2650, gas_rate: 1.4400, welcome_bonus: 345, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 186.00, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-28' },
];

export const fallbackDynamicProviders: DynamicProvider[] = [
  { id: '1', name: 'Frank Energie', logo_url: null, fixed_cost_electricity: 7.25, fixed_cost_gas: 7.00, purchase_fee_electricity: 0.0182, purchase_fee_gas: 0.0799, green_energy: true, updated_at: '2026-03-28' },
  { id: '2', name: 'Tibber', logo_url: null, fixed_cost_electricity: 5.99, fixed_cost_gas: 5.99, purchase_fee_electricity: 0.0248, purchase_fee_gas: 0.0856, green_energy: true, updated_at: '2026-03-28' },
  { id: '3', name: 'Zonneplan', logo_url: null, fixed_cost_electricity: 6.25, fixed_cost_gas: 6.25, purchase_fee_electricity: 0.0200, purchase_fee_gas: 0.0800, green_energy: true, updated_at: '2026-03-28' },
  { id: '4', name: 'NextEnergy', logo_url: null, fixed_cost_electricity: 5.99, fixed_cost_gas: 5.99, purchase_fee_electricity: 0.0219, purchase_fee_gas: 0.0799, green_energy: true, updated_at: '2026-03-28' },
  { id: '5', name: 'ANWB Energie', logo_url: null, fixed_cost_electricity: 8.50, fixed_cost_gas: 8.50, purchase_fee_electricity: 0.0200, purchase_fee_gas: 0.0591, green_energy: true, updated_at: '2026-03-28' },
  { id: '6', name: 'Pure Energie', logo_url: null, fixed_cost_electricity: 6.05, fixed_cost_gas: 6.05, purchase_fee_electricity: 0.0199, purchase_fee_gas: 0.0726, green_energy: true, updated_at: '2026-03-28' },
];

export const fallbackGridOperators: GridOperator[] = [
  { id: '1', name: 'Liander', electricity_cost_yearly: 478.04, gas_cost_yearly: 266.62, total_yearly: 744.66, updated_at: '2026-03-28' },
  { id: '2', name: 'Enexis', electricity_cost_yearly: 475.84, gas_cost_yearly: 266.36, total_yearly: 742.20, updated_at: '2026-03-28' },
  { id: '3', name: 'Stedin', electricity_cost_yearly: 489.77, gas_cost_yearly: 274.44, total_yearly: 764.21, updated_at: '2026-03-28' },
  { id: '4', name: 'Coteq', electricity_cost_yearly: 456.35, gas_cost_yearly: 258.89, total_yearly: 715.24, updated_at: '2026-03-28' },
  { id: '5', name: 'Westland Infra', electricity_cost_yearly: 500.17, gas_cost_yearly: 230.81, total_yearly: 730.98, updated_at: '2026-03-28' },
  { id: '6', name: 'Rendo', electricity_cost_yearly: 475.83, gas_cost_yearly: 262.87, total_yearly: 738.70, updated_at: '2026-03-28' },
];

export const fallbackEnergyTax: EnergyTax[] = [
  { id: '1', year: 2025, gas_tax_per_m3: 0.6996, electricity_tax_per_kwh: 0.1228, tax_reduction: 635.19, updated_at: '2026-03-28' },
  { id: '2', year: 2026, gas_tax_per_m3: 0.7268, electricity_tax_per_kwh: 0.1108, tax_reduction: 628.96, updated_at: '2026-03-28' },
];

export const fallbackTtfPrices: TtfPrice[] = [
  { id: '1', date: '2026-03-01', price_eur_mwh: 32.00, event_description: 'Stabiele markt', updated_at: '2026-03-28' },
  { id: '2', date: '2026-03-02', price_eur_mwh: 59.00, event_description: 'Escalatie Midden-Oosten', updated_at: '2026-03-28' },
  { id: '3', date: '2026-03-03', price_eur_mwh: 56.00, event_description: 'Lichte stabilisatie', updated_at: '2026-03-28' },
  { id: '4', date: '2026-03-05', price_eur_mwh: 51.00, event_description: 'Volatiliteit', updated_at: '2026-03-28' },
  { id: '5', date: '2026-03-09', price_eur_mwh: 68.00, event_description: 'Piek - blokkadedreiging', updated_at: '2026-03-28' },
  { id: '6', date: '2026-03-10', price_eur_mwh: 47.00, event_description: 'Correctie', updated_at: '2026-03-28' },
  { id: '7', date: '2026-03-12', price_eur_mwh: 51.00, event_description: 'Geopolitieke gevoeligheid', updated_at: '2026-03-28' },
  { id: '8', date: '2026-03-15', price_eur_mwh: 54.00, event_description: 'Aanhoudende onzekerheid', updated_at: '2026-03-28' },
  { id: '9', date: '2026-03-19', price_eur_mwh: 72.00, event_description: 'Piek — beursprijs +35% in één dag', updated_at: '2026-03-28' },
  { id: '10', date: '2026-03-22', price_eur_mwh: 58.00, event_description: 'Gedeeltelijke correctie', updated_at: '2026-03-28' },
  { id: '11', date: '2026-03-26', price_eur_mwh: 55.00, event_description: 'Stabilisatie, nog steeds hoog', updated_at: '2026-03-28' },
];
