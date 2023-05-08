export interface IInitialState {
  items: { items: IUsers[] };
  search: string;
  isActiveFilter: string;
  status: "loading" | "succeeded" | "failed";
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
