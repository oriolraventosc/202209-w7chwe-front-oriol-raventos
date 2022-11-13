//import { UserCredentials } from "./types";
import { getUsersActionCreator } from "../redux/features/UsersActionsSlice/UsersActionsSlice";
import { useAppDispatch } from "../redux/hooks";
import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { LogInUserResponse, UserCredentials } from "./types";
import { JwtPayloadCustom } from "./types";
import { userLoginActionCreator } from "../redux/features/LoginSlice/LoginSlice";

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
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseBody = (await response.json()) as LogInUserResponse;

    const loggedUser: JwtPayloadCustom = jwtDecode(responseBody.accesstoken);

    dispatch(
      userLoginActionCreator({
        ...loggedUser,
        username: loggedUser.username,
        accesstoken: responseBody.accesstoken,
      })
    );

    localStorage.setItem("token", responseBody.accesstoken);
  };
  return { getAllUsers, userLogin };
};

export default useAPI;
