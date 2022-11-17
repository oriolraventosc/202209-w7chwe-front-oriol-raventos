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

  describe("When it is invoked with the method userRegister", () => {
    test("Then it should register the user 'Juancho'", async () => {
      const {
        result: {
          current: { userRegister },
        },
      } = renderHook(() => useAPI(), {
        wrapper: ProviderWrapper,
      });

      const user = {
        username: "Juancho",
        password: "juancho",
        email: "juancho@gmail.com",
        image: "juancho.jpg",
      };

      await userRegister(user);

      expect(userRegister).toHaveReturned();
    });
  });

  describe("When it is invoked with the method userLogin", () => {
    test("Then it should have a token at the localStorage", async () => {
      const {
        result: {
          current: { userLogin },
        },
      } = renderHook(() => useAPI(), { wrapper: ProviderWrapper });
      const user = {
        username: "admin",
        password: "admin",
      };
      const token = localStorage.getItem("token");

      await userLogin(user);

      expect(token).toBeValid();
    });
  });
});
