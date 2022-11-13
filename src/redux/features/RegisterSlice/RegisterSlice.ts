import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserToRegister {
  username: string;
  password: string;
  email: string;
  image: string;
}

export const userInitialState: UserToRegister = {
  username: "",
  password: "",
  email: "",
  image: "",
};

const registerSlice = createSlice({
  name: "userToRegister",
  initialState: userInitialState,
  reducers: {
    userRegister: (initialState, action: PayloadAction<UserToRegister>) => ({
      ...initialState,
      ...action.payload,
    }),
  },
});

export const registerReducer = registerSlice.reducer;

export const { userRegister: userRegisterActionCreator } =
  registerSlice.actions;
