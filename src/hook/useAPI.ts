//import { UserCredentials } from "./types";
import { getUsersActionCreator } from "../redux/features/UsersActionsSlice/UsersActionsSlice";
import { useAppDispatch } from "../redux/hooks";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { UserCredentials, PayloadLogin } from "./types";
import { JwtPayloadCustom } from "./types";
import { userLoginActionCreator } from "../redux/features/LoginSlice/LoginSlice";
import User from "../types";
import { userRegisterActionCreator } from "../redux/features/RegisterSlice/RegisterSlice";

const useAPI = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const dispatch = useAppDispatch();
  const tokenStorage = localStorage.getItem("token");

  const getAllUsers = useCallback(async () => {
    const url = `${apiUrl}users/list`;
    const response = await fetch(url);
    const apiResponse = await response.json();
    dispatch(getUsersActionCreator(apiResponse));
  }, [apiUrl, dispatch]);

  const userLogin = async (userData: UserCredentials) => {
    const url = `${apiUrl}users/login`;
    debugger;
    const response = await axios.post(url, userData);
    debugger;
    const { accessToken } = await response.data;

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
    await axios.post(url, registerInformation);
    dispatch(userRegisterActionCreator(registerInformation));
  };
  return { getAllUsers, userLogin, userRegister };
};

export default useAPI;
