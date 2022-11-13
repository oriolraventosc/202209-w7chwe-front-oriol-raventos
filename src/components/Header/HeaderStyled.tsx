import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: #4787fa;
  color: #fff;

  .header__title {
    font-weight: bold;
    margin-block-end: 0;
    margin-block-start: 0;
    font-size: 1.7rem;
  }

  .header__button {
    border: none;
    background-color: #fff;
    width: 6rem;
    border-radius: 20px;
    height: 40px;
  }

  .header__button:hover {
    color: #edf2fa;
    background-color: #002057;
    transition: 0s;
    cursor: pointer;
  }

  @media (min-width: 900px) {
    height: 15px;

    .header__title {
      font-size: 2.5rem;
    }

    .header__button {
      width: 10rem;
    }
  }
`;

export default HeaderStyled;
