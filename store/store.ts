import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userReducer from "./userSlice";

// Config the store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom useSelector hook for our store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
