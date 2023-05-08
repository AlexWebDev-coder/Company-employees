import { useNavigate } from "react-router-dom";
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

import { RootState, useAppSelector } from "../../../hooks/redux";
import NotFound from "../../404";
import ServerError from "../../500";

const HomePage = () => {
  const navigate = useNavigate();
  const users = useAppSelector((state: RootState) => state.users);

  if (users.status === "loading") {
    return <SkeletonItem />;
  }

  if (!users.items.items) {
    return <NotFound />;
  }
  // if (users.status === "404") {
  //   return <NotFound />;
  // }

  if (users.status === "failed") {
    return <ServerError />;
  }

  const handleDetailsUser = (id: string) => {
    navigate(`/user-details/${id}`);
  };

  return (
    <HomeContainer>
      {users.items &&
        users?.items?.items?.map((user) => (
          <User key={user?.id} onClick={() => handleDetailsUser(user?.id)}>
            <UserAvatar>
              <UserAvatarImg src={img} />
            </UserAvatar>
            <Linear>
              <UserName>{`${user?.firstName} ${user?.lastName}`}</UserName>
              <UserWorkPosition>{`Deportament: ${user?.department}`}</UserWorkPosition>
              <UserWorkPosition>{`Work position: ${user?.position}`}</UserWorkPosition>
            </Linear>
          </User>
        ))}
    </HomeContainer>
  );
};

export default HomePage;
