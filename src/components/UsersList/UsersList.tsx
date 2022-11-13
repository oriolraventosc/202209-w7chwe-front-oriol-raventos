import useAPI from "../../hook/useAPI";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import UserCard from "../UserCard/UserCard";

const UsersList = (): JSX.Element => {
  const users = useAppSelector(({ usersActions }) => usersActions.users);
  const { getAllUsers } = useAPI();
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          <UserCard users={user} />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
