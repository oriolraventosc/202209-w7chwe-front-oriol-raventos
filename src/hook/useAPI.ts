//import { UserCredentials } from "./types";
import { getUsersActionCreator } from "../redux/features/UsersActionsSlice/UsersActionsSlice";
import { useAppDispatch } from "../redux/hooks";
import axios, { AxiosError } from "axios";
import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { UserCredentials } from "./types";
import { JwtPayloadCustom } from "./types";
import { userLoginActionCreator } from "../redux/features/LoginSlice/LoginSlice";
import User from "../types";
import { useNavigate } from "react-router-dom";
import { openModalActionCreator } from "../redux/features/UiSlice/UiSlice";

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
    try {
      const response = await axios.post(url, userData);
      const { accessToken } = await response.data;

      const loggedUser: JwtPayloadCustom = jwtDecode(accessToken);
      if (response.status === 401) {
        dispatch(openModalActionCreator("An error ocurred!"));
      }

      if (response.status === 200) {
        dispatch(openModalActionCreator(`Welcome back ${userData.username}`));
        dispatch(
          userLoginActionCreator({
            ...loggedUser,
            accesstoken: accessToken,
          })
        );
      }

      window.localStorage.setItem("token", accessToken);

      return loggedUser;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        dispatch(openModalActionCreator("An error ocurred logging!"));
      }
    }
  };

  const userRegister = async (registerInformation: User) => {
    const url = `${apiUrl}users/register`;
    try {
      const response = await axios.post(url, registerInformation, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 401) {
        dispatch(openModalActionCreator(`Error creating your profile!`));
      }
      if (response.status === 201) {
        dispatch(
          openModalActionCreator(
            `User ${registerInformation.username} created!`
          )
        );
        navigate("/home");
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        dispatch(openModalActionCreator("An error ocurred registering!"));
      }
    }
  };
  return { getAllUsers, userLogin, userRegister };
};

export default useAPI;
