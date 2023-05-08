import { FC } from "react";

// import DefaultlayoutFooter from "../footer";
import DefaultLayoutHeader from "../header";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayoutContainer: FC<IProps> = ({ children }) => {
  return (
    <>
      <DefaultLayoutHeader />
      {children}
    </>
  );
};

export default DefaultLayoutContainer;
