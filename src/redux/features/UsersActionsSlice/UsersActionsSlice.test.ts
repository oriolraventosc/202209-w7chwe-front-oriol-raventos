import usersMock from "../../../mocks/usersMock";
import {
  getUsersActionCreator,
  usersActionsReducer,
} from "./UsersActionsSlice";
import { usersInitialState } from "./UsersActionsSlice";

describe("Given a usersActionsReducer", () => {
  describe("When it is invoked with the method getUsers", () => {
    test("Then it should receive a list of users", () => {
      const action = getUsersActionCreator(usersMock);
      const expectedState = {
        users: usersMock,
      };

      const newState = usersActionsReducer(usersInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
