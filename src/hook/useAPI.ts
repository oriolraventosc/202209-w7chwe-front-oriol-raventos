//import { UserCredentials } from "./types";
import { getUsersActionCreator } from "../redux/features/UsersActionsSlice/UsersActionsSlice";
import { useAppDispatch } from "../redux/hooks";
import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { UserCredentials } from "./types";
import { JwtPayloadCustom } from "./types";
import { userLoginActionCreator } from "../redux/features/LoginSlice/LoginSlice";
import User from "../types";
import { userRegisterActionCreator } from "../redux/features/RegisterSlice/RegisterSlice";

const useAPI = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const dispatch = useAppDispatch();

  const getAllUsers = useCallback(async () => {
    const url = `${apiUrl}users/list`;
    const response = await fetch(url);
    const apiResponse = await response.json();
    dispatch(getUsersActionCreator(apiResponse));
  }, [apiUrl, dispatch]);

  const userLogin = async (userData: UserCredentials) => {
    const url = `${apiUrl}users/login`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const { accessToken } = await response.json();

    const loggedUser: JwtPayloadCustom = jwtDecode(accessToken);
    dispatch(
      userLoginActionCreator({
        ...loggedUser,
        accesstoken: accessToken,
      })
    );

    window.localStorage.setItem("token", accessToken);

    return loggedUser;
  };

  const userRegister = async (registerInformation: User) => {
    const url = `${apiUrl}users/register`;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(registerInformation),
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch(userRegisterActionCreator(registerInformation));
  };
  return { getAllUsers, userLogin, userRegister };
};

export default useAPI;
