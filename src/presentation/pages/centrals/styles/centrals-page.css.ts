import { style } from "@vanilla-extract/css";

export const containerPage = style({
  marginTop: "5rem",
  marginLeft: "2%",
  marginRight: "2%",
  height: "90vh",
});

export const container = style({
  padding: "32px",
  color: "#FFFFFF",
  minHeight: "100vh",
});

export const actions = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
  marginTop: "25px",
});

export const searchInput = style({
  padding: "12px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  width: "400px",
});

export const createButton = style({
  backgroundColor: "#00843D",
  color: "#FFF",
  padding: "12px 20px",
  borderRadius: "6px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#33A05C",
  },
});
