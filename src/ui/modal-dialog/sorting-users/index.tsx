import { useState, ChangeEvent } from "react";
import List from "@mui/material/List";
import Dialog from "@mui/material/Dialog";
import {
  IconButton,
  ListItem,
  ListItemButton,
  RadioGroup,
} from "@mui/material";

import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { TitleDialog } from "./styles";
import FormRadioButton from "../../form/radio";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/redux";
import { setSortingUsers } from "../../../store/features/usersSlice";

export interface SortingDialogProps {
  open: boolean;
  value: string;
  onClose: () => void;
}

const SortingDialog = (props: SortingDialogProps) => {
  const { open, onClose, value } = props;

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortingUsers(event.target.value));
  };

  return (
    <Dialog onClose={onClose} open={open}>
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
              <FormRadioButton value="alphabetically" label="По алфавиту" />
            </ListItemButton>
            <ListItemButton>
              <FormRadioButton value="byBirthday" label="По дню рождения" />
            </ListItemButton>
          </RadioGroup>
        </ListItem>
      </List>
    </Dialog>
  );
};

const SortingUsers = () => {
  const [open, setOpen] = useState<boolean>(false);

  const value = useAppSelector((state: RootState) => state.users.sortingUsers);

  const handlekOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <IconButton onClick={handlekOpen}>
        <FilterListRoundedIcon color={value ? "primary" : "inherit"} />
      </IconButton>
      <SortingDialog value={value} open={open} onClose={handlekOpen} />
    </div>
  );
};

export default SortingUsers;
