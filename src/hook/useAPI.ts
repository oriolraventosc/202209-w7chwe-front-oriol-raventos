//import { UserCredentials } from "./types";
import { getUsersActionCreator } from "../redux/features/UsersActionsSlice/UsersActionsSlice";
import { useAppDispatch } from "../redux/hooks";
import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { UserCredentials } from "./types";
import { JwtPayloadCustom } from "./types";
import { userLoginActionCreator } from "../redux/features/LoginSlice/LoginSlice";

const useAPI = () => {
  const apiUrl = process.env.REACT_APP_URL!;
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
    const responseBody = await response.json();

    const loggedUser: JwtPayloadCustom = jwtDecode(responseBody);

    dispatch(
      userLoginActionCreator({
        ...loggedUser,
        username: loggedUser.username,
        accesstoken: loggedUser.accesstoken,
      })
    );

    localStorage.setItem("token", loggedUser.accesstoken);

    return loggedUser;
  };
  return { getAllUsers, userLogin };
};

export default useAPI;
