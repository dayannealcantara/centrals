import { style, globalStyle } from "@vanilla-extract/css";

export const overlay = style({
  width: "100%",
  height: "100vh",
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
});

export const modal = style({
  backgroundColor: "#fff",
  borderRadius: 8,
  padding: "2rem",
  position: "relative",
  width: "100%",
  height: "450px",
  maxWidth: 500,
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
});

export const headerModal = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "16px",
});

export const title = style({
  color: "#000",
});

export const closeButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
});
