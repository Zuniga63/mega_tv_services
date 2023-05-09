import { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

export const subscriptionPage = (state: RootState) => state.subscriptionPage;

export const subscriptionSelector = createSelector(
  subscriptionPage,
  (state) => state
);
