import UserJuanMock from "../../../mocks/UserJuanMock";
import { userRegisterActionCreator, registerReducer } from "./RegisterSlice";

describe("Given a registerReducer", () => {
  describe("When it is invoked with userRegister", () => {
    test("Then it should return the user Juan", () => {
      const action = userRegisterActionCreator(UserJuanMock);
      const initialState = {
        username: "",
        password: "",
        email: "",
        image: "",
      };
      const expectedState = UserJuanMock;
      const newState = registerReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
