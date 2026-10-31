import { ImageResponse } from "next/og";

export const alt = "Clark Louise Navales — Full-Stack Software Engineer";
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
          backgroundColor: "#0a0b0d",
          color: "#f1f3f5",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 10,
            height: "100%",
            backgroundColor: "#7dd3fc",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26 }}>
            <span style={{ color: "#f1f3f5", fontWeight: 700, letterSpacing: "0.16em" }}>
              CLN.
            </span>
            <span style={{ color: "#7dd3fc" }}>/</span>
            <span style={{ color: "#a3abb6", letterSpacing: "0.12em" }}>
              FULL-STACK SOFTWARE ENGINEER
            </span>
          </div>
          <span style={{ color: "#a3abb6", fontSize: 22 }}>Cavite, PH</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, paddingLeft: 16 }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1 }}>
            Clark Louise Navales
          </div>
          <div style={{ fontSize: 30, color: "#a3abb6", maxWidth: 900, lineHeight: 1.35 }}>
            I build production software end to end — from the interface to the database.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#a3abb6",
            paddingLeft: 16,
          }}
        >
          <span>clarknvls@gmail.com</span>
          <span>clarklouise.vercel.app</span>
        </div>
      </div>
    ),
    size,
  );
}
