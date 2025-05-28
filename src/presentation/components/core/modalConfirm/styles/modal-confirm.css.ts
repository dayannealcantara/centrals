import { style, globalStyle } from "@vanilla-extract/css";

export const wrapperModal = style({
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
  width: "330px",
  height: "200px",
  maxWidth: 500,
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
});

export const containerModal = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
});

export const title = style({
  color: "#000",
  textAlign: "center",
});

export const buttonGroup = style({
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  marginTop: "2rem",
});

export const button = style({
  padding: "16px",
  fontSize: "16px",
  color: "white",
  fontWeight: "bold",
  borderRadius: "4px",
  cursor: "pointer",
});

globalStyle(`${buttonGroup} button:first-child`, {
  backgroundColor: "#00843D",
  color: "#fff",
});

globalStyle(`${buttonGroup} button:last-child`, {
  backgroundColor: "#d00",
  color: "#fff",
});
