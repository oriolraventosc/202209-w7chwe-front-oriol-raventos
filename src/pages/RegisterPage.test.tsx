import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level title with the text 'Register now'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.queryByRole("heading", {
        level: 2,
        name: "Register now",
      });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Register'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.queryByRole("button", {
        name: "Register",
      });

      expect(button).toBeInTheDocument();
    });
  });
});
