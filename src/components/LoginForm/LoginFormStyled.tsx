import styled from "styled-components";

const LoginFormStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .page-container__box {
    height: 300px;
    background-color: #4787fa;
    padding: 10px 50px;
  }
  h2 {
    font-size: 2rem;
    margin-top: 40px;
    color: #fff;
  }
  .form-container {
    margin-bottom: 15px;
  }
  input {
    height: 30px;
    text-align: center;
  }
  .form__input--password {
    height: 30px;
    margin-bottom: 15px;
  }
  button {
    border: none;
    height: 40px;
    width: 10.5rem;
  }
  button:hover {
    background-color: #4b58db;
    color: #fff;
    cursor: pointer;
  }
`;

export default LoginFormStyled;
