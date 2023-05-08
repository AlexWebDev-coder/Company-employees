import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api";

interface IUsersProps {
  department: string;
}

export const fetchUsersAsync = createAsyncThunk(
  "get/users",
  async ({ department }: IUsersProps) => {
    const { data } = await api.get(`/users?__example=${department}`);
    return data;
  }
);
