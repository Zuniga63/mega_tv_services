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
    <section>
      <div className="mb-20">
        <p className="text-center text-xl mb-8">
          Awesome! Lest&apos;s get started with the basics.
        </p>

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
      </div>

      <div className="flex justify-center">
        <Button onClick={goNextStep}>Next</Button>
      </div>
    </section>
  );
}

export default FirstStep;
