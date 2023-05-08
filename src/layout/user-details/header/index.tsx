import { IconButton } from "@mui/material";
import { ArrowBack, Header, Img, User, UserName, UserPosition } from "./style";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import img from "../../../public/img/Rectangle.png";
import { RootState, useAppSelector } from "../../../hooks/redux";
import { useNavigate, useParams } from "react-router-dom";

const UserDetailsLayoutHeader = () => {
  const params = useParams();
  const navigate = useNavigate();

  const user = useAppSelector((state: RootState) => state.users.items);

  const handleBack = () => navigate(-1);

  return (
    <Header>
      {user.items.map((user) => {
        return (
          user.id === params?.id && (
            <>
              <ArrowBack>
                <IconButton onClick={handleBack}>
                  <ArrowBackIosRoundedIcon />
                </IconButton>
              </ArrowBack>
              <User>
                <Img src={img} />
                <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
                <UserPosition>{user.position}</UserPosition>
              </User>
            </>
          )
        );
      })}
    </Header>
  );
};

export default UserDetailsLayoutHeader;
