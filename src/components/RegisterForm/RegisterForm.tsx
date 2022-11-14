import { Link } from "react-router-dom";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled className="page-container">
      <div className="page-container__box">
        <h2 className="page-container__box__title">Register now</h2>
        <form className="form">
          <div className="form-container">
            <label className="form__label" htmlFor="username"></label>
            <input
              className="form__input"
              type="text"
              id="username"
              placeholder="Username"
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
