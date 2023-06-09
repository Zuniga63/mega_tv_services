import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBuilding, ITvPlan, SubscribeForm } from "./types";

const url = process.env.NEXT_PUBLIC_URL_API;

// --------------------------------------------------------------------------
// FETCH DATA
// --------------------------------------------------------------------------
export const fetchBuildings = createAsyncThunk(
  "subscription/fetchBuilding",
  async () => {
    try {
      const res = await axios.get<IBuilding[]>(`${url}/buildings`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchTvPlans = createAsyncThunk(
  "subscription/fetchTvPlan",
  async () => {
    try {
      const res = await axios.get<ITvPlan[]>(`${url}/tv-plans`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const resetSubscription = createAction("subscription/reset");

export const subscribeNewCustomer = createAsyncThunk(
  "subscription/subscribeNewCustomer",
  async (formData: SubscribeForm) => {
    try {
      await axios.post(`${url}/subscriptions`, formData);
    } catch (error) {
      throw error;
    }
  }
);

// --------------------------------------------------------------------------
// UPDATE STEP
// --------------------------------------------------------------------------
export const nextStep = createAction("subscription/nextStep");
export const prevStep = createAction("subscription/prevStep");

// --------------------------------------------------------------------------
// UPDATE CUSTOMER DATA
// --------------------------------------------------------------------------
export const updateFirtsName = createAction<string>(
  "subscription/updateFirtsName"
);
export const updateLastName = createAction<string>(
  "subscription/updateLastName"
);

export const updateTvPlanId = createAction<number>(
  "subscription/updateTvPlanId"
);

// --------------------------------------------------------------------------
// UPDATE ADDRESS
// --------------------------------------------------------------------------
export const selectBuilding = createAction<number>(
  "subscription/selectBuilding"
);
export const unSelectBuilding = createAction("subscription/unSelectBuilding");
export const updateAptNumber = createAction<string>(
  "subscription/updateAptNumber"
);
