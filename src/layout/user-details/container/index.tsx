import { FC } from "react";

import UserDetailsLayoutHeader from "../header";

interface IProps {
  children: React.ReactNode | React.ReactElement;
}

const UserDetailsLayoutContainer: FC<IProps> = ({ children }) => {
  return (
    <>
      <UserDetailsLayoutHeader />
      {children}
    </>
  );
};

export default UserDetailsLayoutContainer;
