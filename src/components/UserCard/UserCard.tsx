import User from "../../types";

interface UserCardProps {
  users: User;
}

const UserCard = ({ users }: UserCardProps): JSX.Element => {
  const { username, email, image } = users;
  return (
    <div>
      <img src={image} alt={username} />
      <h2>{username}</h2>
      <span aria-label="email">{email}</span>
    </div>
  );
};
export default UserCard;
