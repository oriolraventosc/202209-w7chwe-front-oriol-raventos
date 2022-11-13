import useAPI from "./useAPI";
import { renderHook } from "@testing-library/react";
import { store } from "../redux/store";
import ProviderWrapper from "../mocks/providerWrapper";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a useApi hook", () => {
  describe("When it is invoked with the method getAllUsers", () => {
    test("Then it should return a list of robots", async () => {
      const {
        result: {
          current: { getAllUsers },
        },
      } = renderHook(() => useAPI(), {
        wrapper: ProviderWrapper,
      });

      await getAllUsers();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method userLogin", () => {
    test.only("Then it should return the token", async () => {
      const {
        result: {
          current: { userLogin },
        },
      } = renderHook(() => useAPI(), {
        wrapper: ProviderWrapper,
      });

      await userLogin({ username: "Mars", password: "mars" });

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
