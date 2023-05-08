import { FC } from "react";
import HomeContainer from "./container";
import AppLayout from "../../layout";

const Home: FC = (): JSX.Element => {
  return (
    <>
      <AppLayout component={{}}>
        <HomeContainer />
      </AppLayout>
    </>
  );
};

export default Home;
