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
    height: 35px;
    text-align: center;
    width: 200px;
    border: none;
    background-color: #edf2fa;
  }
  .form__input--password {
    height: 35px;
    margin-bottom: 15px;
  }
  button {
    border: none;
    height: 40px;
    width: 12.7rem;
  }
  button:hover {
    background-color: #4b58db;
    color: #fff;
    cursor: pointer;
  }
`;

export default LoginFormStyled;
