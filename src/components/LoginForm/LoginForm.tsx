import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormStyled from "./LoginFormStyled";
import useAPI from "../../hook/useAPI";

const LoginForm = (): JSX.Element => {
  const intialFormData = {
    username: "",
    password: "",
  };
  const [initialForm, setData] = useState(intialFormData);
  const { userLogin } = useAPI();

  const navigate = useNavigate();

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setData({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit = {
      username: initialForm.username,
      password: initialForm.password,
    };

    await userLogin(formDataToSubmit);

    navigate("/users");
  };
  return (
    <LoginFormStyled className="page-container">
      <div className="page-container__box">
        <h2 className="page-container__box__title">Log in</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-container">
            <label className="form__label" htmlFor="username"></label>
            <input
              className="form__input"
              type="text"
              id="username"
              placeholder="Username"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="form__label" htmlFor="password"></label>
            <input
              className="form__input--password"
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <button className="form__button">Send</button>
        </form>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
