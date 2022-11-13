import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Users {
  username: string;
  email: string;
  image: string;
  id: string;
}

interface UsersState {
  users: Users[];
}

export const usersInitialState: UsersState = {
  users: [],
};

const usersActionsSlice = createSlice({
  name: "usersActions",
  initialState: usersInitialState,
  reducers: {
    getUsers: (initialState, action: PayloadAction<Users[]>) => ({
      ...initialState,
      users: { ...action.payload },
    }),
  },
});

export const usersActionsReducer = usersActionsSlice.reducer;

export const { getUsers: getUsersActionCreator } = usersActionsSlice.actions;
