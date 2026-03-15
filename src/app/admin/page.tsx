"use client";

import { useState, useEffect, useCallback } from "react";

interface Provider {
  id: string;
  name: string;
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

interface DynamicProvider {
  id: string;
  name: string;
  fixed_cost_electricity: number;
  fixed_cost_gas: number;
  purchase_fee_electricity: number;
  purchase_fee_gas: number;
  green_energy: boolean;
  updated_at: string;
}

type EditingProvider = Provider | null;
type EditingDynamic = DynamicProvider | null;

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"vast" | "dynamisch">("vast");

  // Vaste providers
  const [providers, setProviders] = useState<Provider[]>([]);
  const [editing, setEditing] = useState<EditingProvider>(null);

  // Dynamische providers
  const [dynamicProviders, setDynamicProviders] = useState<DynamicProvider[]>([]);
  const [editingDynamic, setEditingDynamic] = useState<EditingDynamic>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const headers = { "x-admin-password": password, "Content-Type": "application/json" };

  const fetchProviders = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin?table=energy_providers", { headers: { "x-admin-password": password } });
      if (!res.ok) throw new Error("Ophalen mislukt");
      const json = await res.json();
      setProviders(json.data || []);
    } catch {
      setMessage("Fout bij ophalen data");
    }
    setLoading(false);
  }, [password]);

  const fetchDynamic = useCallback(async () => {
    try {
      const res = await fetch("/api/admin?table=dynamic_providers", { headers: { "x-admin-password": password } });
      if (!res.ok) throw new Error("Ophalen mislukt");
      const json = await res.json();
      setDynamicProviders(json.data || []);
    } catch {
      setMessage("Fout bij ophalen dynamische data");
    }
  }, [password]);

  useEffect(() => {
    if (authenticated) {
      fetchProviders();
      fetchDynamic();
    }
  }, [authenticated, fetchProviders, fetchDynamic]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await fetch("/api/admin?table=energy_providers", {
        headers: { "x-admin-password": password },
      });
      if (res.ok) {
        setAuthenticated(true);
      } else {
        setAuthError("Verkeerd wachtwoord");
      }
    } catch {
      setAuthError("Verbindingsfout");
    }
  }

  async function saveProvider(provider: Provider) {
    setLoading(true);
    setMessage("");
    try {
      const { id, updated_at, ...updates } = provider;
      void updated_at;
      const res = await fetch("/api/admin", {
        method: "PUT",
        headers,
        body: JSON.stringify({ table: "energy_providers", id, updates }),
      });
      if (!res.ok) throw new Error("Opslaan mislukt");
      setMessage(`${provider.name} opgeslagen!`);
      setEditing(null);
      await fetchProviders();
    } catch {
      setMessage("Fout bij opslaan");
    }
    setLoading(false);
  }

  async function saveDynamic(provider: DynamicProvider) {
    setLoading(true);
    setMessage("");
    try {
      const { id, updated_at, ...updates } = provider;
      void updated_at;
      const res = await fetch("/api/admin", {
        method: "PUT",
        headers,
        body: JSON.stringify({ table: "dynamic_providers", id, updates }),
      });
      if (!res.ok) throw new Error("Opslaan mislukt");
      setMessage(`${provider.name} opgeslagen!`);
      setEditingDynamic(null);
      await fetchDynamic();
    } catch {
      setMessage("Fout bij opslaan");
    }
    setLoading(false);
  }

  // === LOGIN SCHERM ===
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-gray-900">Admin Energiekenner</h1>
          <label className="block text-sm font-medium text-gray-700 mb-2">Wachtwoord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Voer admin wachtwoord in"
            autoFocus
          />
          {authError && <p className="text-red-500 text-sm mb-4">{authError}</p>}
          <button type="submit" className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Inloggen
          </button>
        </form>
      </div>
    );
  }

  // === ADMIN DASHBOARD ===
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tariefbeheer</h1>
            <p className="text-gray-500 mt-1">Beheer energietarieven voor Energiekenner.nl</p>
          </div>
          <button
            onClick={() => { setAuthenticated(false); setPassword(""); }}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg"
          >
            Uitloggen
          </button>
        </div>

        {/* Status message */}
        {message && (
          <div className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${message.includes("Fout") ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
            {message}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("vast")}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${activeTab === "vast" ? "bg-blue-600 text-white" : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"}`}
          >
            Vaste contracten ({providers.length})
          </button>
          <button
            onClick={() => setActiveTab("dynamisch")}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${activeTab === "dynamisch" ? "bg-blue-600 text-white" : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"}`}
          >
            Dynamisch ({dynamicProviders.length})
          </button>
        </div>

        {loading && <p className="text-gray-500 mb-4">Laden...</p>}

        {/* === VASTE CONTRACTEN TAB === */}
        {activeTab === "vast" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Leverancier</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Stroom/kWh</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Gas/m³</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Bonus</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Bonus 3jr</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Geschat/mnd</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-600">Groen</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Bijgewerkt</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {providers.map((p) => (
                  <tr key={p.id} className="border-b border-gray-100 hover:bg-blue-50/30">
                    <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                    <td className="text-right px-4 py-3 font-mono">€ {Number(p.kwh_rate).toFixed(4)}</td>
                    <td className="text-right px-4 py-3 font-mono">€ {Number(p.gas_rate).toFixed(4)}</td>
                    <td className="text-right px-4 py-3">€ {p.welcome_bonus}</td>
                    <td className="text-right px-4 py-3">€ {p.welcome_bonus_3yr}</td>
                    <td className="text-right px-4 py-3 font-semibold">€ {Number(p.estimated_monthly).toFixed(2)}</td>
                    <td className="text-center px-4 py-3">{p.green_energy ? "✓" : "—"}</td>
                    <td className="text-right px-4 py-3 text-xs text-gray-400">
                      {new Date(p.updated_at).toLocaleDateString("nl-NL")}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setEditing({ ...p })}
                        className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        Bewerk
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* === DYNAMISCH TAB === */}
        {activeTab === "dynamisch" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Leverancier</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Vast stroom/mnd</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Vast gas/mnd</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Opslag stroom</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Opslag gas</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-600">Groen</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Bijgewerkt</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {dynamicProviders.map((p) => (
                  <tr key={p.id} className="border-b border-gray-100 hover:bg-blue-50/30">
                    <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                    <td className="text-right px-4 py-3 font-mono">€ {Number(p.fixed_cost_electricity).toFixed(2)}</td>
                    <td className="text-right px-4 py-3 font-mono">€ {Number(p.fixed_cost_gas).toFixed(2)}</td>
                    <td className="text-right px-4 py-3 font-mono">€ {Number(p.purchase_fee_electricity).toFixed(4)}</td>
                    <td className="text-right px-4 py-3 font-mono">€ {Number(p.purchase_fee_gas).toFixed(4)}</td>
                    <td className="text-center px-4 py-3">{p.green_energy ? "✓" : "—"}</td>
                    <td className="text-right px-4 py-3 text-xs text-gray-400">
                      {new Date(p.updated_at).toLocaleDateString("nl-NL")}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setEditingDynamic({ ...p })}
                        className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        Bewerk
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* === EDIT MODAL VAST === */}
        {editing && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">{editing.name} bewerken</h2>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Stroom (€/kWh)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={editing.kwh_rate}
                      onChange={(e) => setEditing({ ...editing, kwh_rate: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Gas (€/m³)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={editing.gas_rate}
                      onChange={(e) => setEditing({ ...editing, gas_rate: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Welkomstbonus 1jr (€)</label>
                    <input
                      type="number"
                      step="1"
                      value={editing.welcome_bonus}
                      onChange={(e) => setEditing({ ...editing, welcome_bonus: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Welkomstbonus 3jr (€)</label>
                    <input
                      type="number"
                      step="1"
                      value={editing.welcome_bonus_3yr}
                      onChange={(e) => setEditing({ ...editing, welcome_bonus_3yr: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Geschat maandbedrag (€)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={editing.estimated_monthly ?? ""}
                      onChange={(e) => setEditing({ ...editing, estimated_monthly: parseFloat(e.target.value) || null })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Contracttype</label>
                    <select
                      value={editing.contract_type}
                      onChange={(e) => setEditing({ ...editing, contract_type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="vast_1jaar">1 jaar vast</option>
                      <option value="vast_3jaar">3 jaar vast</option>
                      <option value="variabel">Variabel</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Terugleverkosten (€/kWh)</label>
                    <input
                      type="number"
                      step="0.001"
                      value={editing.feed_in_cost_kwh ?? ""}
                      onChange={(e) => setEditing({ ...editing, feed_in_cost_kwh: e.target.value ? parseFloat(e.target.value) : null })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Terugleververgoeding (€/kWh)</label>
                    <input
                      type="number"
                      step="0.001"
                      value={editing.feed_in_compensation ?? ""}
                      onChange={(e) => setEditing({ ...editing, feed_in_compensation: e.target.value ? parseFloat(e.target.value) : null })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="green"
                    checked={editing.green_energy}
                    onChange={(e) => setEditing({ ...editing, green_energy: e.target.checked })}
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor="green" className="text-sm text-gray-700">100% groene stroom</label>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex gap-3 justify-end">
                <button
                  onClick={() => setEditing(null)}
                  className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={() => saveProvider(editing)}
                  disabled={loading}
                  className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? "Opslaan..." : "Opslaan"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* === EDIT MODAL DYNAMISCH === */}
        {editingDynamic && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">{editingDynamic.name} bewerken</h2>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Vaste kosten stroom (€/mnd)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={editingDynamic.fixed_cost_electricity}
                      onChange={(e) => setEditingDynamic({ ...editingDynamic, fixed_cost_electricity: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Vaste kosten gas (€/mnd)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={editingDynamic.fixed_cost_gas}
                      onChange={(e) => setEditingDynamic({ ...editingDynamic, fixed_cost_gas: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Opslag stroom (€/kWh)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={editingDynamic.purchase_fee_electricity}
                      onChange={(e) => setEditingDynamic({ ...editingDynamic, purchase_fee_electricity: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Opslag gas (€/m³)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={editingDynamic.purchase_fee_gas}
                      onChange={(e) => setEditingDynamic({ ...editingDynamic, purchase_fee_gas: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="green-dyn"
                    checked={editingDynamic.green_energy}
                    onChange={(e) => setEditingDynamic({ ...editingDynamic, green_energy: e.target.checked })}
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor="green-dyn" className="text-sm text-gray-700">100% groene stroom</label>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex gap-3 justify-end">
                <button
                  onClick={() => setEditingDynamic(null)}
                  className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={() => saveDynamic(editingDynamic)}
                  disabled={loading}
                  className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? "Opslaan..." : "Opslaan"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
