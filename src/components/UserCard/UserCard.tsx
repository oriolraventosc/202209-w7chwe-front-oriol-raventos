import { UserInformation } from "../../hook/types";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  users: UserInformation;
}

const UserCard = ({ users }: UserCardProps): JSX.Element => {
  const { username, email, backUpImage } = users;
  return (
    <UserCardStyled className="user-card">
      <img src={backUpImage} alt={username} />
      <div className="user-info">
        <h2 className="user-info__username">{username}</h2>
        <span className="user-info__email" aria-label="email">
          {email}
        </span>
      </div>
    </UserCardStyled>
  );
};
export default UserCard;
