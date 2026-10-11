import { ImageResponse } from "next/og";

export const alt = "Clark Louise Navales — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0c0e",
          color: "#e6e8eb",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28 }}>
          <span style={{ color: "#7dd3fc" }}>{">"}</span>
          <span style={{ color: "#9ba3ae" }}>software engineer</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Clark Louise Navales
          </div>
          <div style={{ fontSize: 30, color: "#9ba3ae" }}>
            Backend development · APIs · Clean, maintainable systems
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#9ba3ae",
          }}
        >
          <span>City of Imus, Cavite</span>
          <span>clarknvls@gmail.com</span>
        </div>
      </div>
    ),
    size,
  );
}
