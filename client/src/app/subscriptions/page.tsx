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
import ThirdStep from "@/components/ThirdStep";
import FourthStep from "@/components/FourthStep";

export default function SubscriptionPage() {
  const { step } = useAppSelector(subscriptionSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBuildings());
    dispatch(fetchTvPlans());
  }, []);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-10/12 max-w-lg mx-auto">
      {step === 1 && <FirstStep />}
      {step === 2 && <SecondStep />}
      {step === 3 && <ThirdStep />}
      {step === 4 && <FourthStep />}
    </main>
  );
}
