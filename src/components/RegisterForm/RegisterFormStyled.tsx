import styled from "styled-components";

const RegisterFormStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .page-container__box {
    height: 420px;
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
    width: 14.7rem;
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
    width: 100%;
    background-color: #fff;
  }
  button:hover {
    background-color: #4b58db;
    color: #fff;
    cursor: pointer;
  }

  .register-info {
    display: block;
    color: #fff;
    width: 14.7rem;
    padding-top: 10px;
  }
  .form__link {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
`;

export default RegisterFormStyled;
