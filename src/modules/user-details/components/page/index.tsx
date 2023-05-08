import { useParams } from "react-router-dom";
import { RootState, useAppSelector } from "../../../../hooks/redux";
import { UserAge, UserBirthDay, UserInfo, UserPhone } from "./style";

import { formatDate } from "../../../../lib/helpers";

const UserDetailsPage = () => {
  const params = useParams();

  const user = useAppSelector((state: RootState) => state.users.items);

  return (
    <UserInfo>
      {user.items.map((user) => {
        return (
          user.id === params?.id && (
            <>
              <UserBirthDay>
                {formatDate(user.birthday).formattedDate}
                <UserAge>{`${formatDate(user.birthday).age} year`}</UserAge>
              </UserBirthDay>

              <UserPhone>{user.phone}</UserPhone>
            </>
          )
        );
      })}
    </UserInfo>
  );
};

export default UserDetailsPage;
