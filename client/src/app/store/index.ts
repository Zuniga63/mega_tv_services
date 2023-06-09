import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { subscriptionReducer } from "@/features/Subscription";

export const store = configureStore({
  reducer: { subscriptionPage: subscriptionReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
