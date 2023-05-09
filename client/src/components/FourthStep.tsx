/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import StepCard from "./StepCard";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  nextStep,
  subscribeNewCustomer,
  subscriptionSelector,
} from "@/features/Subscription";
import TextInput from "./TextInput";
import { SubscribeForm } from "@/features/Subscription/types";
import ErrorCard from "./ErrorCard";
import { useRouter } from "next/navigation";
import SuccessCard from "./SuccessCard";

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const phoneRegex = /(\d{3})(\d{3})(\d{4})/;

function FourthStep() {
  const {
    firstName,
    lastName,
    aptNumber,
    buildingSelected,
    tvPlanId,
    loading,
    error,
    isSuccess,
  } = useAppSelector(subscriptionSelector);

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const formatPhoneNumber = (value: string): string => {
    return value.replace(/\D/g, "").replace(phoneRegex, "($1) $2-$3");
  };

  const validateData = (): boolean => {
    return Boolean(
      email &&
        emailRegex.test(email) &&
        phoneNumber &&
        phoneRegex.test(phoneNumber.replace(/\D/g, ""))
    );
  };

  const subscribe = () => {
    if (
      isValid &&
      firstName &&
      lastName &&
      buildingSelected &&
      tvPlanId &&
      aptNumber
    ) {
      const data: SubscribeForm = {
        firstName,
        lastName,
        email,
        phoneNumber,
        aptNumber,
        buildingId: buildingSelected.id,
        tvPlanId,
      };

      dispatch(subscribeNewCustomer(data));
    }
  };

  useEffect(() => {
    setIsValid(validateData());
  }, [email, phoneNumber]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <StepCard
      title="Great news! Your first month's free"
      description="To get set up, just provide your email and phone number and we can remind you when the free trial ends."
      action={subscribe}
      actionContent={loading ? "Subscribing..." : "Subscribe now!"}
      disabledAction={!isValid || loading}
    >
      <div className="flex flex-col gap-y-3">
        <TextInput
          title="Email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <TextInput
          title="Phone Number"
          placeholder="Phone Number"
          type="tel"
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(formatPhoneNumber(value))}
        />

        <span className="block text-center text-xs mt-1 underline cursor-pointer hover:text-blue-500">
          I have a promo code!
        </span>

        <ErrorCard message={error} />
        {isSuccess && <SuccessCard />}
      </div>
    </StepCard>
  );
}

export default FourthStep;
