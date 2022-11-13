import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  password?: string;
  accesstoken: string;
}

interface UserState extends User {
  isLogged?: boolean;
}

export const userInitialState: UserState = {
  username: "",
  password: "",
  accesstoken: "",
  isLogged: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    userLogin: (initialState, action: PayloadAction<UserState>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const usersReducer = usersSlice.reducer;

export const { userLogin: userLoginActionCreator } = usersSlice.actions;
