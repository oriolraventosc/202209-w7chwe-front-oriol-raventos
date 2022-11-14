import { Link, useNavigate } from "react-router-dom";
import RegisterFormStyled from "./RegisterFormStyled";
import useAPI from "../../hook/useAPI";
import { useState } from "react";
import { UserToRegisterData } from "../../redux/features/LoginSlice/types";

const RegisterForm = (): JSX.Element => {
  const navigate = useNavigate();
  const initialFormData: UserToRegisterData = {
    username: "",
    email: "",
    password: "",
    image: "",
  };
  const [initialForm, setData] = useState(initialFormData);
  const { userRegister } = useAPI();

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserToRegisterData = {
      username: initialForm.username,
      email: initialForm.email,
      password: initialForm.password,
      image: initialForm.image,
    };

    userRegister(formDataToSubmit);
    navigate("/home");
  };
  return (
    <RegisterFormStyled className="page-container">
      <div className="page-container__box">
        <h2 className="page-container__box__title">Register now</h2>
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
          <div>
            <label className="form__label" htmlFor="email"></label>
            <input
              className="form__input--password"
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="form__label" htmlFor="Image URL"></label>
            <input
              className="form__input--password"
              type="text"
              id="Image URL"
              placeholder="Image URL"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <button className="form__button">Register</button>
          <span className="register-info">
            Already a user?{" "}
            <span className="form__link">
              <Link to={"/home"}>Log in here</Link>
            </span>
          </span>
        </form>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
