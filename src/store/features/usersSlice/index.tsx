import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./types";
import { fetchUsersAsync } from "../../thunk/usersThunk";

const initialState: IInitialState = {
  items: { items: [] },
  search: "",
  isActiveFilter: "all",
  status: "loading",
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    getSearchUser: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.isActiveFilter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { getSearchUser, changeFilter } = usersSlice.actions;
export default usersSlice.reducer;
