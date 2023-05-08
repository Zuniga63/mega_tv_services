"use client";
import FirstStep from "@/components/FirstStep";
import { useAppSelector } from "../store/hooks";
import { subscriptionSelector } from "@/features/Subscription";

export default function SubscriptionPage() {
  const { step } = useAppSelector(subscriptionSelector);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-10/12 mx-auto">
      {step === 1 && <FirstStep />}
    </main>
  );
}
