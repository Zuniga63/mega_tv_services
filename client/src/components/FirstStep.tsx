/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  nextStep,
  updateFirtsName,
  updateLastName,
} from "@/features/Subscription";
import StepCard from "./StepCard";

function FirstStep() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  const goNextStep = () => {
    if (firstName.trim().length > 0 && lastName.trim().length > 0) {
      dispatch(nextStep());
    }
  };

  useEffect(() => {
    dispatch(updateFirtsName(firstName));
  }, [firstName]);

  useEffect(() => {
    dispatch(updateLastName(lastName));
  }, [lastName]);

  return (
    <StepCard
      title="Awesome! Lest's get started with the basics."
      action={goNextStep}
      actionContent="Next"
    >
      <div className="w-10/12 mx-auto flex flex-col gap-y-3">
        <TextInput
          title="First Name"
          placeholder="First Name"
          value={firstName}
          onChange={setFirstName}
        />
        <TextInput
          title="Last Name"
          placeholder="Last Name"
          value={lastName}
          onChange={setLastName}
        />
      </div>
    </StepCard>
  );
}

export default FirstStep;
