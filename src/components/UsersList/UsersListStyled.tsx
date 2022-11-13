import styled from "styled-components";

const UsersListStyled = styled.ul`
  padding-inline-start: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default UsersListStyled;
