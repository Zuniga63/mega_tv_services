import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { subscriptionSelector, updateTvPlanId } from "@/features/Subscription";
import { ITvPlan } from "@/features/Subscription/types";

type Props = {
  tvPlan: ITvPlan;
};

function TvPlanCard({ tvPlan }: Props) {
  const { tvPlanId } = useAppSelector(subscriptionSelector);
  const dispatch = useAppDispatch();

  return (
    <label
      className="border border-gray-300  px-4 sm:px-8 py-4 rounded"
      key={tvPlan.id}
    >
      <header>
        <h3 className="font-display text-xl text-center font-bold text-gray-700">
          {tvPlan.name}
        </h3>
        <p className="text-xs text-center text-gray-600">Service</p>
      </header>

      <div className="mb-4">
        <span className="italic font-display text-yellow-500 block text-center my-3">
          x
        </span>
        <div className="flex text-blue-500 font-bold items-end justify-center">
          <span className="self-center">$</span>
          <span className="text-4xl sm:text-6xl self-end">{tvPlan.price}</span>
          <span className="self-end text-sm leading-7">/mo</span>
        </div>
      </div>

      <div className="flex justify-center">
        <input
          type="radio"
          value={tvPlan.id}
          checked={tvPlanId === tvPlan.id}
          onChange={() => dispatch(updateTvPlanId(tvPlan.id))}
          className="transform scale-150"
        />
      </div>
    </label>
  );
}

export default TvPlanCard;
