import { createReducer } from "@reduxjs/toolkit";
import { SubscriptionState } from "./types";
import {
  fetchBuildings,
  fetchTvPlans,
  nextStep,
  prevStep,
  resetSubscription,
  selectBuilding,
  subscribeNewCustomer,
  unSelectBuilding,
  updateAptNumber,
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
  loading: false,
  isSuccess: false,
  error: undefined,
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
    state.buildingSelected = undefined;
    state.tvPlanId = undefined;
    state.loading = false;
    state.isSuccess = false;
    state.error = undefined;
  });

  builder
    .addCase(subscribeNewCustomer.pending, (state) => {
      state.loading = true;
      state.isSuccess = false;
      state.error = undefined;
    })
    .addCase(subscribeNewCustomer.fulfilled, (state) => {
      state.isSuccess = true;
      state.loading = false;
    })
    .addCase(subscribeNewCustomer.rejected, (state) => {
      state.loading = false;
      state.error = "Subscription failed, try again later.";
    });

  // --------------------------------------------------------------------------
  // UPDATE STEP
  // --------------------------------------------------------------------------
  builder
    .addCase(nextStep, (state) => {
      const { step: currentStep, maxStep } = state;
      state.step = currentStep < maxStep ? currentStep + 1 : currentStep;
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
    })
    .addCase(updateAptNumber, (state, { payload }) => {
      state.aptNumber = payload;
    });
});

export default subscriptionReducer;
