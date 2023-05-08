import { FC } from "react";
import UserDetailsPage from "../page";
import AppLayout from "../../../../layout";
import UserDetailsLayoutContainer from "../../../../layout/user-details/container";

const RootContainer: FC = (): JSX.Element => {
  return (
    <>
      <AppLayout component={{ layout: UserDetailsLayoutContainer }}>
        <UserDetailsPage />
      </AppLayout>
    </>
  );
};

export default RootContainer;
