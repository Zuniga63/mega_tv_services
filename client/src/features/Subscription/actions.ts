import { createAction } from "@reduxjs/toolkit";

export const resetSubscription = createAction("subscription/reset");

export const nextStep = createAction("subscription/nextStep");
export const prevStep = createAction("subscription/prevStep");

export const updateFirtsName = createAction<string>(
  "subscription/updateFirtsName"
);
export const updateLastName = createAction<string>(
  "subscription/updateLastName"
);
