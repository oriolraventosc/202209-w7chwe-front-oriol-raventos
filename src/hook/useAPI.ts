//import { UserCredentials } from "./types";
import { getUsersActionCreator } from "../redux/features/UsersActionsSlice/UsersActionsSlice";
import { useAppDispatch } from "../redux/hooks";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { UserCredentials } from "./types";
import { JwtPayloadCustom } from "./types";
import { userLoginActionCreator } from "../redux/features/LoginSlice/LoginSlice";
import User from "../types";
import { useNavigate } from "react-router-dom";

const useAPI = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getAllUsers = useCallback(async () => {
    const url = `${apiUrl}users/list`;
    const response = await axios.get(url);
    const apiResponse = await response.data;
    dispatch(getUsersActionCreator(apiResponse));
  }, [apiUrl, dispatch]);

  const userLogin = async (userData: UserCredentials) => {
    const url = `${apiUrl}users/login`;
    const response = await axios.post(url, userData);
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
    await axios.post(url, registerInformation, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    navigate("/home");
  };
  return { getAllUsers, userLogin, userRegister };
};

export default useAPI;
