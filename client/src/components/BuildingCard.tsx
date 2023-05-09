import { IBuilding } from "@/features/Subscription/types";
import Button from "./Button";
import { useAppDispatch } from "@/app/store/hooks";
import { selectBuilding, unSelectBuilding } from "@/features/Subscription";

type Props = {
  building: IBuilding;
  selected?: boolean;
};

function BuildingCard({ building, selected = false }: Props) {
  const dispatch = useAppDispatch();

  const text = `${building.address}, ${building.city}, ${building.state}, ${building.zipCode}`;
  return (
    <div className="border border-neutral-300 bg-gray-100 px-4 py-2 rounded shadow-lg shadow-blue-400">
      <div className="flex gap-x-2 items-center">
        <div className="flex-grow">
          <h3 className="font-display text-sm text-blue-600">
            {building.name}
          </h3>
          <p className="text-[0.7rem] text-neutral-600">{text}</p>
        </div>
        {!selected ? (
          <button
            className="bg-blue-600 px-2 py-1 rounded font-sans uppercase text-white text-xs tracking-wider"
            onClick={() => dispatch(selectBuilding(building.id))}
          >
            Select
          </button>
        ) : (
          <button
            className="border border-blue-600 rounded-full flex justify-center items-center text-blue-600 font-bold uppercase text-sm w-8 h-8"
            onClick={() => dispatch(unSelectBuilding())}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
}

export default BuildingCard;
