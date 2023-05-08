import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { IPropsBtn } from "./types";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Title = styled("h1")`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  color: #050510;
`;

export const Container = styled("div")`
  width: 100%;
`;

export const Header = styled("header")`
  border-bottom: 1px solid #c3c3c6;
  padding: 16px 24px 7.67px;
`;

export const SearchInput = styled("div")`
  margin-top: 18px;
`;

export const Category = styled("div")`
  margin-top: 22px;
  display: flex;
  gap: 24px;
`;

export const CategoryBtn = styled("p")(({ active, current }: IPropsBtn) => ({
  fontFamily: "Inter, sans-serif",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "20px",
  cursor: "pointer",
  color: "#97979b",
  padding: "0 0 7.67px 0",
  borderBottom: active === current ? "2px solid #6534ff" : "",
}));
