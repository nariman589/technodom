import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice";

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
