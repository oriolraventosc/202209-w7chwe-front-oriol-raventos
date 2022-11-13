import UserCard from "./UserCard";
import { store } from "../../redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import UserJuanMock from "../../mocks/UserJuanMock";

describe("Given a UserCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image", () => {
      render(
        <Provider store={store}>
          <UserCard users={UserJuanMock} />
        </Provider>
      );

      const image = screen.queryByRole("img", {
        name: "juan",
      });

      expect(image).toBeInTheDocument();
    });

    test("Then it should show a heading level 2 title with the text 'juan'", () => {
      render(
        <Provider store={store}>
          <UserCard users={UserJuanMock} />
        </Provider>
      );

      const juanH2 = screen.queryByRole("heading", {
        level: 2,
        name: "juan",
      });

      expect(juanH2).toBeInTheDocument();
    });

    test("Then it should show a span text with 'juan@gmail.com'", () => {
      render(
        <Provider store={store}>
          <UserCard users={UserJuanMock} />
        </Provider>
      );

      const email = screen.queryByLabelText("email");

      expect(email).toBeInTheDocument();
    });
  });
});
