import UsersList from "../components/UsersList/UsersList";
import Header from "../components/Header/Header";

const Homepage = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="page-header">
        <span className="page-header__subtitle">
          In search of new friends or enemies
        </span>
        <span className="page-header__title">Discover new people</span>
      </div>
      <UsersList />
    </>
  );
};

export default Homepage;
