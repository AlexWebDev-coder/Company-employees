import SkeletonItem from "../../../ui/sceleton";
import {
  HomeContainer,
  Linear,
  User,
  UserAvatar,
  UserAvatarImg,
  UserName,
  UserWorkPosition,
} from "./style";

import img from "../../../public/img/Rectangle.png";
import NotFound from "../../../pages/404/404";
import { useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../../hooks/redux";

const HomePage = () => {
  const navigate = useNavigate();
  const users = useAppSelector((state: RootState) => state.users);

  if (users.status === "loading") {
    return <SkeletonItem />;
  }
  if (users.status === "failed") {
    return <NotFound />;
  }

  const handleDetailsUser = (id: string) => {
    navigate(`/user-details/${id}`);
  };

  return (
    <HomeContainer>
      {users?.items.items.map((user) => (
        <User key={user.id} onClick={() => handleDetailsUser(user.id)}>
          <UserAvatar>
            <UserAvatarImg src={img} />
          </UserAvatar>
          <Linear>
            <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
            <UserWorkPosition>{`Deportament: ${user.department}`}</UserWorkPosition>
            <UserWorkPosition>{`Work position: ${user.position}`}</UserWorkPosition>
          </Linear>
        </User>
      ))}
    </HomeContainer>
  );
};

export default HomePage;
