import { useState, ChangeEvent } from "react";
import List from "@mui/material/List";
import Dialog from "@mui/material/Dialog";
import {
  FormControlLabel,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Radio,
  RadioGroup,
} from "@mui/material";

import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { TitleDialog } from "./styles";

import { pink } from "@mui/material/colors";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const [value, setValue] = useState("female");

  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange1,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <Dialog onClose={handleClose} open={open}>
      <TitleDialog>Сортировка</TitleDialog>
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <ListItemButton>
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    {...controlProps("e")}
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="По алфавиту"
              />
            </ListItemButton>
            <ListItemButton>
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    {...controlProps("e")}
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="По дню рождения"
              />
            </ListItemButton>
          </RadioGroup>
          <ListItemText primary={""} />
        </ListItem>
      </List>
    </Dialog>
  );
}

const SortingUsers = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <FilterListRoundedIcon />
      </IconButton>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default SortingUsers;
