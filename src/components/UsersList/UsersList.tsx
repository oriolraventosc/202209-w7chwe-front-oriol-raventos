import useAPI from "../../hook/useAPI";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import UserCard from "../UserCard/UserCard";
import UsersListStyled from "./UsersListStyled";

const UsersList = (): JSX.Element => {
  const users = useAppSelector(({ usersActions }) => usersActions.users);
  const { getAllUsers } = useAPI();
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  return (
    <UsersListStyled className="list">
      {users.map((user, index) => (
        <li className="list__item" key={index}>
          <UserCard users={user} />
        </li>
      ))}
    </UsersListStyled>
  );
};

export default UsersList;
