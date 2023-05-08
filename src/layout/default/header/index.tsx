import { FC, useEffect, ChangeEvent } from "react";
// components
import FormTextField from "../../../ui/form/textfield";
// constants
import { filterItems } from "./filterItems";
// methods
import { fetchUsersAsync } from "../../../store/thunk/usersThunk";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/redux";
// mui
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// style
import {
  Category,
  CategoryBtn,
  Container,
  Header,
  SearchInput,
  Title,
} from "./style";
import {
  changeFilter,
  getSearchUser,
} from "../../../store/features/usersSlice";
import useDebounce from "../../../hooks/useDebounce";
import SortingUsers from "../../../ui/modal-dialog/sorting-users";

const DefaultLayoutHeader: FC = () => {
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector((state: RootState) => state.users.search);

  const debounceValue = useDebounce(searchValue, 500);

  const isActiveFilter = useAppSelector(
    (state: RootState) => state.users.isActiveFilter
  );

  useEffect(() => {
    dispatch(fetchUsersAsync({ department: debounceValue || isActiveFilter }));
  }, [isActiveFilter, debounceValue]);

  const handleActiveFilter = (active: string) => {
    dispatch(changeFilter(active));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(getSearchUser(event.target.value));
  };

  return (
    <Container>
      <Header>
        <Title>Поиск</Title>
        <SearchInput>
          <FormTextField
            value={searchValue}
            fullWidth
            placeholder="Введите имя, тег, почту..."
            onChange={(e) => handleInputChange(e)}
            variant="outlined"
            iconStart={<SearchRoundedIcon />}
            iconEnd={<SortingUsers />}
          />
        </SearchInput>
        <Category>
          {filterItems.map((item) => (
            <CategoryBtn
              active={isActiveFilter}
              current={item.department}
              key={item.id}
              onClick={() => handleActiveFilter(item.department)}
            >
              {item.title}
            </CategoryBtn>
          ))}
        </Category>
      </Header>
    </Container>
  );
};

export default DefaultLayoutHeader;
