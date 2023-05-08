import { styled } from "@mui/material";

export const UserInfo = styled("div")(() => ({
  width: "100%",
  padding: "27px 25px",
  margin: "0 auto",
}));

export const UserBirthDay = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const UserAge = styled("p")(() => ({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "20px",
  textAlign: "right",
  color: "#97979B",
}));

export const UserPhone = styled("div")(() => ({
  paddingTop: "48px",
}));
