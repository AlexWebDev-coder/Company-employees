import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api";
// import { getAnError } from "../../features/usersSlice";
// import { useAppDispatch } from "../../../hooks/redux";

interface IUsersProps {
  department: string;
}

export const fetchUsersAsync = createAsyncThunk(
  "get/users",
  async ({ department }: IUsersProps) => {
    try {
      const { data } = await api.get(`/users?__example=${department}`);

      return data;
    } catch (error: any) {
      return error;
      // if (error.response?.status === 404) {
      //   console.log(404);
      // }
      // if (error.response?.status === 500) {
      //   // return dispatch(getAnError("500"));
      // }
    }
  }
);
