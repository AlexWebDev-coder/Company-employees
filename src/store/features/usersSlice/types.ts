export interface IInitialState {
  items: { items: IUsers[] };
  search: string;
  isActiveFilter: string;
  sortingUsers: string;
  status: "loading" | "succeeded" | "404" | "failed";
}

export interface IUsers {
  avatarUrl: string;
  birthday: string;
  department: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  position: string;
  userTag: string;
}

export interface AxiosError {
  message: string;
  code: string;
  status: number;
}
