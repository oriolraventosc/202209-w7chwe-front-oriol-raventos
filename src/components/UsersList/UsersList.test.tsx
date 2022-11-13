import UsersList from "./UsersList";
import { store } from "../../redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

describe("Given a UsersList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a ul tag", () => {
      render(
        <Provider store={store}>
          <UsersList />
        </Provider>
      );

      const ulTag = screen.queryByRole("list");

      expect(ulTag).toBeInTheDocument();
    });
  });
});
