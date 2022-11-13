import User from "../../types";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps): JSX.Element => {
  const { username, email, image } = user;
  return (
    <div>
      <img src={image} alt={username} />
      <h2>{username}</h2>
      <span>{email}</span>
    </div>
  );
};
export default UserCard;
