import React, { useState } from "react";
import StepCard from "./StepCard";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  nextStep,
  subscriptionSelector,
  updateTvPlanId,
} from "@/features/Subscription";
import TvPlanCard from "./TvPlanCard";

function ThirdStep() {
  const { tvPlans, tvPlanId } = useAppSelector(subscriptionSelector);
  const dispatch = useAppDispatch();

  return (
    <StepCard
      title="Please select the TV plan you want to enjoy"
      action={() => dispatch(nextStep())}
      actionContent="I am Ready!"
      disabledAction={!Boolean(tvPlanId)}
    >
      <div className="grid grid-cols-2 gap-2">
        {tvPlans.map((tvPlan) => (
          <TvPlanCard tvPlan={tvPlan} key={tvPlan.id} />
        ))}
      </div>
    </StepCard>
  );
}

export default ThirdStep;
