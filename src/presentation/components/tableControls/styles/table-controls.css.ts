import { style } from "@vanilla-extract/css";

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "24px",
  textAlign: "left",
  fontSize: "16px",
  tableLayout: "fixed",
});

export const tableHeader = style({
  backgroundColor: "#2A2A2A",
  color: "#FFF",
  fontWeight: "bold",
  padding: "14px",
  fontSize: "18px",
  cursor: "default",
  textAlign: "left",
  ":last-child": {
    textAlign: "right",
    paddingRight: "16px",
  },
});

export const tableCell = style({
  padding: "16px",
  borderBottom: "1px solid #444",
  color: "#FFF",
  textAlign: "left",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  ":last-child": {
    textAlign: "right",
    paddingRight: "16px",
  },
});

export const clickableCell = style({
  cursor: "pointer",
  textDecoration: "underline",
  fontWeight: "bold",
});

export const sortableHeader = style({
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
});

export const deleteButton = style({
  backgroundColor: "#FF0000",
  color: "#FFF",
  padding: "10px 16px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#CC0000",
  },
});
