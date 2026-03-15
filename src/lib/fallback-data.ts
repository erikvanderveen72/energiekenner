// Fallback data zodat de app ook werkt zonder Supabase-verbinding
// Gebaseerd op marktdata maart 2026

import type { EnergyProvider, DynamicProvider, GridOperator, EnergyTax, TtfPrice } from './database.types';

export const fallbackProviders: EnergyProvider[] = [
  { id: '1', name: 'Energiedirect', logo_url: null, kwh_rate: 0.2595, gas_rate: 1.2954, welcome_bonus: 350, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 149.16, feed_in_cost_kwh: null, feed_in_compensation: 0.150, updated_at: '2026-03-13' },
  { id: '2', name: 'Essent', logo_url: null, kwh_rate: 0.2790, gas_rate: 1.3341, welcome_bonus: 300, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 152.78, feed_in_cost_kwh: 0.130, feed_in_compensation: 0.150, updated_at: '2026-03-13' },
  { id: '3', name: 'Vattenfall', logo_url: null, kwh_rate: 0.2640, gas_rate: 1.3962, welcome_bonus: 400, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 153.23, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-13' },
  { id: '4', name: 'Eneco', logo_url: null, kwh_rate: 0.2612, gas_rate: 1.3802, welcome_bonus: 350, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 150.58, feed_in_cost_kwh: 0.182, feed_in_compensation: 0.143, updated_at: '2026-03-13' },
  { id: '5', name: 'Greenchoice', logo_url: null, kwh_rate: 0.2623, gas_rate: 1.3895, welcome_bonus: 350, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 151.40, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-13' },
  { id: '6', name: 'DELTA Energie', logo_url: null, kwh_rate: 0.2510, gas_rate: 1.3712, welcome_bonus: 300, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 152.52, feed_in_cost_kwh: null, feed_in_compensation: 0.165, updated_at: '2026-03-13' },
  { id: '7', name: 'OXXIO', logo_url: null, kwh_rate: 0.2561, gas_rate: 1.3766, welcome_bonus: 275, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 154.01, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-13' },
  { id: '8', name: 'Budget Energie', logo_url: null, kwh_rate: 0.2548, gas_rate: 1.3800, welcome_bonus: 370, welcome_bonus_3yr: 570, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 154.69, feed_in_cost_kwh: 0.109, feed_in_compensation: 0.010, updated_at: '2026-03-13' },
  { id: '9', name: 'UnitedConsumers', logo_url: null, kwh_rate: 0.2250, gas_rate: 1.1660, welcome_bonus: 465, welcome_bonus_3yr: 600, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 116.24, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-13' },
  { id: '10', name: 'Mega', logo_url: null, kwh_rate: 0.3290, gas_rate: 1.6540, welcome_bonus: 688, welcome_bonus_3yr: 592, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 198.31, feed_in_cost_kwh: null, feed_in_compensation: null, updated_at: '2026-03-13' },
  { id: '11', name: 'Vandebron', logo_url: null, kwh_rate: 0.2680, gas_rate: 1.4100, welcome_bonus: 440, welcome_bonus_3yr: 510, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 155.00, feed_in_cost_kwh: 0.160, feed_in_compensation: 0.160, updated_at: '2026-03-13' },
  { id: '12', name: 'Engie', logo_url: null, kwh_rate: 0.2720, gas_rate: 1.4050, welcome_bonus: 435, welcome_bonus_3yr: 500, contract_type: 'vast_1jaar', green_energy: false, estimated_monthly: 156.50, feed_in_cost_kwh: null, feed_in_compensation: 0.124, updated_at: '2026-03-13' },
  { id: '13', name: 'Coolblue Energie', logo_url: null, kwh_rate: 0.2650, gas_rate: 1.3900, welcome_bonus: 300, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 153.80, feed_in_cost_kwh: 0.115, feed_in_compensation: null, updated_at: '2026-03-13' },
  { id: '14', name: 'Pure Energie', logo_url: null, kwh_rate: 0.2600, gas_rate: 1.3850, welcome_bonus: 320, welcome_bonus_3yr: 0, contract_type: 'vast_1jaar', green_energy: true, estimated_monthly: 152.00, feed_in_cost_kwh: 0.178, feed_in_compensation: null, updated_at: '2026-03-13' },
];

export const fallbackDynamicProviders: DynamicProvider[] = [
  { id: '1', name: 'Frank Energie', logo_url: null, fixed_cost_electricity: 7.25, fixed_cost_gas: 7.00, purchase_fee_electricity: 0.0182, purchase_fee_gas: 0.0799, green_energy: true, updated_at: '2026-03-13' },
  { id: '2', name: 'Tibber', logo_url: null, fixed_cost_electricity: 5.99, fixed_cost_gas: 5.99, purchase_fee_electricity: 0.0248, purchase_fee_gas: 0.0856, green_energy: true, updated_at: '2026-03-13' },
  { id: '3', name: 'Zonneplan', logo_url: null, fixed_cost_electricity: 6.25, fixed_cost_gas: 6.25, purchase_fee_electricity: 0.0200, purchase_fee_gas: 0.0800, green_energy: true, updated_at: '2026-03-13' },
  { id: '4', name: 'NextEnergy', logo_url: null, fixed_cost_electricity: 5.99, fixed_cost_gas: 5.99, purchase_fee_electricity: 0.0219, purchase_fee_gas: 0.0799, green_energy: true, updated_at: '2026-03-13' },
  { id: '5', name: 'ANWB Energie', logo_url: null, fixed_cost_electricity: 8.50, fixed_cost_gas: 8.50, purchase_fee_electricity: 0.0200, purchase_fee_gas: 0.0591, green_energy: true, updated_at: '2026-03-13' },
  { id: '6', name: 'Pure Energie', logo_url: null, fixed_cost_electricity: 6.05, fixed_cost_gas: 6.05, purchase_fee_electricity: 0.0199, purchase_fee_gas: 0.0726, green_energy: true, updated_at: '2026-03-13' },
];

export const fallbackGridOperators: GridOperator[] = [
  { id: '1', name: 'Liander', electricity_cost_yearly: 478.04, gas_cost_yearly: 266.62, total_yearly: 744.66, updated_at: '2026-03-13' },
  { id: '2', name: 'Enexis', electricity_cost_yearly: 475.84, gas_cost_yearly: 266.36, total_yearly: 742.20, updated_at: '2026-03-13' },
  { id: '3', name: 'Stedin', electricity_cost_yearly: 489.77, gas_cost_yearly: 274.44, total_yearly: 764.21, updated_at: '2026-03-13' },
  { id: '4', name: 'Coteq', electricity_cost_yearly: 456.35, gas_cost_yearly: 258.89, total_yearly: 715.24, updated_at: '2026-03-13' },
  { id: '5', name: 'Westland Infra', electricity_cost_yearly: 500.17, gas_cost_yearly: 230.81, total_yearly: 730.98, updated_at: '2026-03-13' },
  { id: '6', name: 'Rendo', electricity_cost_yearly: 475.83, gas_cost_yearly: 262.87, total_yearly: 738.70, updated_at: '2026-03-13' },
];

export const fallbackEnergyTax: EnergyTax[] = [
  { id: '1', year: 2025, gas_tax_per_m3: 0.6996, electricity_tax_per_kwh: 0.1228, tax_reduction: 635.19, updated_at: '2026-03-13' },
  { id: '2', year: 2026, gas_tax_per_m3: 0.7268, electricity_tax_per_kwh: 0.1108, tax_reduction: 628.96, updated_at: '2026-03-13' },
];

export const fallbackTtfPrices: TtfPrice[] = [
  { id: '1', date: '2026-03-01', price_eur_mwh: 32.00, event_description: 'Stabiele markt', updated_at: '2026-03-13' },
  { id: '2', date: '2026-03-02', price_eur_mwh: 59.00, event_description: 'Escalatie Midden-Oosten', updated_at: '2026-03-13' },
  { id: '3', date: '2026-03-03', price_eur_mwh: 56.00, event_description: 'Lichte stabilisatie', updated_at: '2026-03-13' },
  { id: '4', date: '2026-03-05', price_eur_mwh: 51.00, event_description: 'Volatiliteit', updated_at: '2026-03-13' },
  { id: '5', date: '2026-03-09', price_eur_mwh: 68.00, event_description: 'Piek - blokkadedreiging', updated_at: '2026-03-13' },
  { id: '6', date: '2026-03-10', price_eur_mwh: 47.00, event_description: 'Correctie', updated_at: '2026-03-13' },
  { id: '7', date: '2026-03-12', price_eur_mwh: 51.00, event_description: 'Geopolitieke gevoeligheid', updated_at: '2026-03-13' },
];
