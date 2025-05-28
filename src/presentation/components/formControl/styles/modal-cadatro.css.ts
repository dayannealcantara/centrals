import { style, globalStyle } from "@vanilla-extract/css";

export const title = style({
  color: "#000",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
});

globalStyle(`${form} label`, {
  display: "flex",
  flexDirection: "column",
  fontWeight: 500,
  color: "black",
  fontSize: "16px",
});

globalStyle(`${form} input, ${form} select`, {
  padding: "1rem",
  fontSize: "2rem",
  borderRadius: 4,
  border: "1px solid #ccc",
});

globalStyle(`${form} span`, {
  color: "red",
  fontSize: "1.5rem",
});

export const buttonGroup = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
  marginTop: "2rem",
});

export const button = style({
  padding: "16px",
  fontSize: "16px",
  backgroundColor: "#00843D",
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
