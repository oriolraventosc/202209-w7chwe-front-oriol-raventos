import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Friendenemies</h1>
      <button className="header__button">Log out</button>
    </HeaderStyled>
  );
};

export default Header;
