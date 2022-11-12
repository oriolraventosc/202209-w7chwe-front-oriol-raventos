import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { usersReducer } from "./features/UsersSlice/UsersSlice";
import { usersActionsReducer } from "./features/UsersActionsSlice/UsersActionsSlice";

export const store = configureStore({
  reducer: {
    userLoginRegister: usersReducer,
    usersActions: usersActionsReducer,
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
