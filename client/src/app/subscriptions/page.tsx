/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import FirstStep from "@/components/FirstStep";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchBuildings,
  fetchTvPlans,
  subscriptionSelector,
} from "@/features/Subscription";
import SecondStep from "@/components/SecondStep";
import { useEffect } from "react";

export default function SubscriptionPage() {
  const { step } = useAppSelector(subscriptionSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBuildings());
    dispatch(fetchTvPlans());
  }, []);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-10/12 mx-auto">
      {step === 1 && <FirstStep />}
      {step === 2 && <SecondStep />}
    </main>
  );
}
