import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Energiekenner.nl - Energie Vergelijken 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 40%, #0ea5e9 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "white",
              display: "flex",
            }}
          >
            Energiekenner
            <span style={{ color: "#38bdf8", fontSize: "40px", fontWeight: 600 }}>.nl</span>
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: "24px",
            display: "flex",
          }}
        >
          Energie Vergelijken 2026
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#bae6fd",
            textAlign: "center",
            display: "flex",
          }}
        >
          Onafhankelijk & Gratis | Bespaar tot €450/jaar
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {["Actuele tarieven", "Alle leveranciers", "100% onafhankelijk"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                ✓ {badge}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
