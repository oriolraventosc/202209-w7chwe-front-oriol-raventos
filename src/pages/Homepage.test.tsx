import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

describe("Given a Homepage comonent", () => {
  describe("When it is rendered", () => {
    test("Then it should show a span tag with the text 'In search of new friends or enemies'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Homepage />
          </Provider>
        </BrowserRouter>
      );

      const spanSubTitle = screen.queryByLabelText(
        "In search of new friends or enemies"
      );

      expect(spanSubTitle).toBeInTheDocument();
    });

    test("Then it should show a span tag with the text 'Discover new people'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Homepage />
          </Provider>
        </BrowserRouter>
      );

      const spanTitle = screen.queryByLabelText("Discover new people");

      expect(spanTitle).toBeInTheDocument();
    });
  });
});
