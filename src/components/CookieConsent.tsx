"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check of gebruiker al een keuze heeft gemaakt
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Kleine vertraging zodat de pagina eerst laadt
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem("cookie_consent", "granted");
    updateConsent("granted");
    setVisible(false);
  }

  function denyAll() {
    localStorage.setItem("cookie_consent", "denied");
    updateConsent("denied");
    setVisible(false);
  }

  function updateConsent(status: "granted" | "denied") {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: status,
      });
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white shadow-2xl border border-gray-200 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Cookies op Energiekenner.nl
            </p>
            <p className="text-sm text-gray-600">
              Wij gebruiken analytische cookies om onze website te verbeteren.
              Geen advertentiecookies. Meer info in ons{" "}
              <a
                href="/privacy"
                className="underline text-emerald-700 hover:text-emerald-800"
              >
                privacybeleid
              </a>
              .
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={denyAll}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
            >
              Weigeren
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
            >
              Accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
