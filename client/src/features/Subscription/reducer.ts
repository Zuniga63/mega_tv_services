import { createReducer } from "@reduxjs/toolkit";
import { SubscriptionState } from "./types";
import {
  nextStep,
  prevStep,
  resetSubscription,
  updateFirtsName,
  updateLastName,
} from "./actions";

const initialState: SubscriptionState = {
  firstName: undefined,
  lastName: undefined,
  step: 1,
  maxStep: 4,
  buildings: [],
  tvPlans: [],
};

export const subscriptionReducer = createReducer(initialState, (builder) => {
  builder.addCase(resetSubscription, (state) => {
    state.firstName = undefined;
    state.lastName = undefined;
    state.step = 1;
  });
  builder
    .addCase(nextStep, (state) => {
      const { step: currentStep, maxStep } = state;
      state.step = currentStep <= maxStep ? currentStep + 1 : currentStep;
    })
    .addCase(prevStep, (state) => {
      const { step: currentStep } = state;
      state.step = currentStep > 1 ? currentStep - 1 : currentStep;
    });

  builder.addCase(updateFirtsName, (state, { payload }) => {
    state.firstName = payload;
  });

  builder.addCase(updateLastName, (state, { payload }) => {
    state.firstName = payload;
  });
});

export default subscriptionReducer;
