//import { UserCredentials } from "./types";
import { getUsersActionCreator } from "../redux/features/UsersActionsSlice/UsersActionsSlice";
import { useAppDispatch } from "../redux/hooks";
import { useCallback } from "react";

const useAPI = () => {
  const apiUrl = process.env.REACT_APP_URL;
  const dispatch = useAppDispatch();

  const getAllUsers = useCallback(async () => {
    const url = `${apiUrl}users/list`;
    const response = await fetch(url);
    const apiResponse = await response.json();
    dispatch(getUsersActionCreator(apiResponse));
  }, [apiUrl, dispatch]);
  return { getAllUsers };
};
export default useAPI;

/*const userLogin = async (url: string, userData: UserCredentials) => {
    url = `${apiUrl}users/login`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application-json",
      },
    });
  };
};*/
