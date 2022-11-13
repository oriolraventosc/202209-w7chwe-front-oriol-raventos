import Header from "./Header";
import { store } from "../../redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level title 1 with the text 'Friendenemies'", () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );

      const header = screen.queryByRole("heading", {
        level: 1,
        name: "Friendenemies",
      });

      expect(header).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log out'", () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );

      const button = screen.queryByRole("button", {
        name: "Log out",
      });

      expect(button).toBeInTheDocument();
    });
  });
});
