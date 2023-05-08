import { IconButton, InputAdornment, TextField } from "@mui/material";
import { IProps } from "./types";

const FormTextField: React.FC<IProps> = (props) => {
  const {
    iconStart,
    iconEnd,
    name,
    label,
    size = "small",
    variant = "standard",
    disabled = false,
    fullWidth = false,
    margin = "normal",
    multiline = false,
    placeholder,
    value,
    onChange,
    onKeyPress,
  } = props;

  return (
    <TextField
      name={name}
      label={label}
      size={size}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      margin={margin}
      multiline={multiline}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      InputProps={{
        startAdornment: (
          <InputAdornment sx={{ cursor: "pointer" }} position={"start"}>
            <IconButton> {iconStart}</IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment sx={{ cursor: "pointer" }} position={"end"}>
            {iconEnd}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default FormTextField;
