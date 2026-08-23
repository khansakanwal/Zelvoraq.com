import { ImageResponse } from "next/og";

export const alt = "Zelvoraq — AI Systems That Work For Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0e17",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(600px circle at 15% 10%, rgba(227,169,62,0.16), transparent 60%), radial-gradient(520px circle at 88% 85%, rgba(62,198,168,0.14), transparent 60%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <circle cx="5" cy="19" r="2.6" fill="#e3a93e" />
            <circle cx="19" cy="5" r="2.6" fill="#e3a93e" />
            <circle cx="19" cy="19" r="2.6" fill="#e3a93e" />
            <path d="M6.5 17.5 17.5 6.5M17.5 17.5 19 5" stroke="#5c6579" strokeWidth="1.4" />
          </svg>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 700, color: "#f4f5f8", letterSpacing: "-0.02em" }}>
            Zelvoraq
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 27, color: "#97a1b5", maxWidth: 780, textAlign: "center", lineHeight: 1.4 }}>
          AI Systems That Work For Your Business
        </div>
      </div>
    ),
    { ...size }
  );
}
