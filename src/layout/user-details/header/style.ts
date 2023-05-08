import { styled } from "@mui/material";

export const Header = styled("header")(() => ({
  width: "100%",
  background: "#F7F7F8",
}));

export const ArrowBack = styled("div")(() => ({
  padding: "28px 32px 0",
}));

export const User = styled("div")(() => ({
  paddingTop: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Img = styled("img")(() => ({
  width: "104px",
  height: "104px",
  borderRadius: "50px",
  backgroundColor: "#777",
}));

export const UserName = styled("h1")(() => ({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "28px",
  textAlign: "center",
  color: "#050510",
  padding: "24px 0 12px 0",
}));
export const UserPosition = styled("p")(() => ({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "13px",
  lineHeight: "16px",
  textAlign: "center",
  color: "#55555C",
  paddingBottom: "24px",
}));
