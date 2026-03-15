export interface EnergyProvider {
  id: string;
  name: string;
  logo_url: string | null;
  kwh_rate: number;
  gas_rate: number;
  welcome_bonus: number;
  welcome_bonus_3yr: number;
  contract_type: string;
  green_energy: boolean;
  estimated_monthly: number | null;
  feed_in_cost_kwh: number | null;
  feed_in_compensation: number | null;
  updated_at: string;
}

export interface DynamicProvider {
  id: string;
  name: string;
  logo_url: string | null;
  fixed_cost_electricity: number;
  fixed_cost_gas: number;
  purchase_fee_electricity: number;
  purchase_fee_gas: number;
  green_energy: boolean;
  updated_at: string;
}

export interface GridOperator {
  id: string;
  name: string;
  electricity_cost_yearly: number;
  gas_cost_yearly: number;
  total_yearly: number;
  updated_at: string;
}

export interface EnergyTax {
  id: string;
  year: number;
  gas_tax_per_m3: number;
  electricity_tax_per_kwh: number;
  tax_reduction: number;
  updated_at: string;
}

export interface TtfPrice {
  id: string;
  date: string;
  price_eur_mwh: number;
  event_description: string | null;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      energy_providers: {
        Row: EnergyProvider;
        Insert: Omit<EnergyProvider, 'id' | 'updated_at'>;
        Update: Partial<Omit<EnergyProvider, 'id'>>;
      };
      dynamic_providers: {
        Row: DynamicProvider;
        Insert: Omit<DynamicProvider, 'id' | 'updated_at'>;
        Update: Partial<Omit<DynamicProvider, 'id'>>;
      };
      grid_operators: {
        Row: GridOperator;
        Insert: Omit<GridOperator, 'id' | 'updated_at'>;
        Update: Partial<Omit<GridOperator, 'id'>>;
      };
      energy_tax: {
        Row: EnergyTax;
        Insert: Omit<EnergyTax, 'id' | 'updated_at'>;
        Update: Partial<Omit<EnergyTax, 'id'>>;
      };
      ttf_prices: {
        Row: TtfPrice;
        Insert: Omit<TtfPrice, 'id' | 'updated_at'>;
        Update: Partial<Omit<TtfPrice, 'id'>>;
      };
    };
  };
}
