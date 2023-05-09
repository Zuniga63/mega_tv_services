import { createReducer } from "@reduxjs/toolkit";
import { SubscriptionState } from "./types";
import {
  fetchBuildings,
  fetchTvPlans,
  nextStep,
  prevStep,
  resetSubscription,
  selectBuilding,
  unSelectBuilding,
  updateFirtsName,
  updateLastName,
  updateTvPlanId,
} from "./actions";

const initialState: SubscriptionState = {
  firstName: undefined,
  lastName: undefined,
  step: 1,
  maxStep: 4,
  buildings: [],
  buildingSelected: undefined,
  tvPlans: [],
  tvPlanId: undefined,
};

export const subscriptionReducer = createReducer(initialState, (builder) => {
  // --------------------------------------------------------------------------
  // FETCH DATA
  // --------------------------------------------------------------------------
  builder.addCase(fetchBuildings.fulfilled, (state, { payload }) => {
    state.buildings = payload;
  });

  builder.addCase(fetchTvPlans.fulfilled, (state, { payload }) => {
    state.tvPlans = payload;
  });

  builder.addCase(resetSubscription, (state) => {
    state.firstName = undefined;
    state.lastName = undefined;
    state.step = 1;
  });

  // --------------------------------------------------------------------------
  // UPDATE STEP
  // --------------------------------------------------------------------------
  builder
    .addCase(nextStep, (state) => {
      const { step: currentStep, maxStep } = state;
      state.step = currentStep <= maxStep ? currentStep + 1 : currentStep;
    })
    .addCase(prevStep, (state) => {
      const { step: currentStep } = state;
      state.step = currentStep > 1 ? currentStep - 1 : currentStep;
    });

  // --------------------------------------------------------------------------
  // UPDATE CUSTOMER DATA
  // --------------------------------------------------------------------------
  builder.addCase(updateFirtsName, (state, { payload }) => {
    state.firstName = payload;
  });

  builder.addCase(updateLastName, (state, { payload }) => {
    state.lastName = payload;
  });

  builder.addCase(updateTvPlanId, (state, { payload }) => {
    state.tvPlanId = state.tvPlans.some((item) => item.id === payload)
      ? payload
      : undefined;
  });

  // --------------------------------------------------------------------------
  // UPDATE ADDRESS
  // --------------------------------------------------------------------------
  builder
    .addCase(selectBuilding, (state, { payload }) => {
      if (payload) {
        const building = state.buildings.find((b) => b.id === payload);
        if (building) {
          state.buildingSelected = building;
        }
      }
    })
    .addCase(unSelectBuilding, (state) => {
      state.buildingSelected = undefined;
    });
});

export default subscriptionReducer;
