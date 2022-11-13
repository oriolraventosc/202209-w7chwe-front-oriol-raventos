import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (): JSX.Element => {
  const intialFormData = {
    username: "",
    password: "",
  };
  const [initialForm, setData] = useState(intialFormData);

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

    navigate("/users");
  };
  return (
    <div>
      <div>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
