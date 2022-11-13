import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { usersReducer } from "./features/LoginSlice/LoginSlice";
import { registerReducer } from "./features/RegisterSlice/RegisterSlice";
import { usersActionsReducer } from "./features/UsersActionsSlice/UsersActionsSlice";

export const store = configureStore({
  reducer: {
    userLogin: usersReducer,
    usersActions: usersActionsReducer,
    userRegister: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
