import { FC } from "react";

// import DefaultlayoutFooter from "../footer";
import DefaultlayoutHeader from "../header";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayoutContainer: FC<IProps> = ({ children }) => {
  return (
    <>
      <DefaultlayoutHeader />
      {children}
      {/* <DefaultlayoutFooter /> */}
    </>
  );
};

export default DefaultLayoutContainer;
