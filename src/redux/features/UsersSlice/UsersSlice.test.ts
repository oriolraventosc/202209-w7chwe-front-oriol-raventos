import userMock from "../../../mocks/userMock";
import {
  userLoginActionCreator,
  userInitialState,
  usersReducer,
} from "./UsersSlice";

describe("Given a usersReducer", () => {
  describe("When it is invoked with userLogin", () => {
    test("Then it should receive the user 'paco' logged", () => {
      const action = userLoginActionCreator(userMock);
      const initialState = userInitialState;
      const expectedState = {
        username: "paco",
        password: "paco2",
        isLogged: true,
      };

      const newState = usersReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
