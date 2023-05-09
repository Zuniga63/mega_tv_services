/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import StepCard from "./StepCard";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  nextStep,
  selectBuilding,
  subscriptionSelector,
} from "@/features/Subscription";
import TextInput from "./TextInput";
import BuildingCard from "./BuildingCard";
import { IBuilding } from "@/features/Subscription/types";

function SecondStep() {
  const { firstName, buildings, buildingSelected } =
    useAppSelector(subscriptionSelector);
  const [address, setAddress] = useState("");
  const [apt, setApt] = useState("");

  const [buildingFiltered, setBuildingFiltered] = useState<IBuilding[]>([]);
  const dispatch = useAppDispatch();

  const generateTextFilter = (building: IBuilding) => {
    let text = building.name;
    text += `, ${building.address}`;
    text += `, ${building.city}`;
    text += `, ${building.state}`;
    text += `, ${building.zipCode}`;

    return text.toLocaleLowerCase();
  };

  useEffect(() => {
    let result: IBuilding[] = [];

    if (!buildingSelected && address && address.length > 0) {
      result = buildings.filter((building) => {
        const text = generateTextFilter(building);
        return text.includes(address.toLocaleLowerCase());
      });
    }

    setBuildingFiltered(result);
  }, [address]);

  useEffect(() => {
    if (buildingSelected) {
      let text = `${buildingSelected.address}`;
      text += `, ${buildingSelected.city}`;
      text += `, ${buildingSelected.state}`;
      text += `, ${buildingSelected.zipCode}`;
      setAddress(text);
    } else {
      setAddress("");
    }
  }, [buildingSelected]);

  return (
    <StepCard
      title={`Pleasure to meet you, ${firstName}! What is your install address?`}
      action={() => dispatch(nextStep())}
      actionContent="Yes!"
      disabledAction={!Boolean(selectBuilding) || !Boolean(apt)}
    >
      <div className="relative mb-40">
        <div className="grid grid-cols-4 gap-x-2 max-w-xl mb-4">
          <div className="col-span-3">
            <TextInput
              title="Please Type in your street address"
              placeholder="street address, city, state"
              value={address}
              onChange={setAddress}
              disabled={Boolean(buildingSelected)}
            />
            <span className="block text-center text-xs mt-1 underline cursor-pointer hover:text-blue-500">
              I can&apos;t find my address
            </span>
          </div>

          <TextInput
            title="Apt"
            placeholder="Apt #"
            value={apt}
            onChange={setApt}
          />
        </div>
        <div className="absolute flex flex-col gap-y-1 w-full max-w-3xl">
          {buildingSelected ? (
            <BuildingCard building={buildingSelected} selected />
          ) : (
            buildingFiltered.map((building) => (
              <BuildingCard building={building} key={building.id} />
            ))
          )}
        </div>
      </div>
    </StepCard>
  );
}

export default SecondStep;
