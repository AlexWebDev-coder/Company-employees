import { Route, Routes } from "react-router-dom";
import Home from "./modules/home";
import UserDetails from "./pages/user-details/[id]";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-details/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default Router;
