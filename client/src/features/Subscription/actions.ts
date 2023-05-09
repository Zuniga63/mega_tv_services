import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBuilding } from "./types";

const url = process.env.NEXT_PUBLIC_URL_API;

export const fetchBuilding = createAsyncThunk(
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

export const resetSubscription = createAction("subscription/reset");

export const nextStep = createAction("subscription/nextStep");
export const prevStep = createAction("subscription/prevStep");

export const updateFirtsName = createAction<string>(
  "subscription/updateFirtsName"
);
export const updateLastName = createAction<string>(
  "subscription/updateLastName"
);
