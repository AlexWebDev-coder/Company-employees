import { FC } from "react";
import { FormControlLabel, Radio } from "@mui/material";

interface IProps {
  value: string;
  label: string;
  disabled?: boolean;
}

const FormRadioButton: FC<IProps> = (props) => {
  const { label, value, disabled } = props;

  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={label}
      disabled={disabled}
    />
  );
};

export default FormRadioButton;
