import LoginLandingPage from "./LandingPage";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

describe("Given a LoginLandingPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form tag and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginLandingPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.queryByRole("heading", {
        level: 2,
        name: "Log in",
      });
      const button = screen.queryByRole("button", {
        name: "Send",
      });

      expect(button).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });
});
