export interface IBuilding {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface ITvPlan {
  id: number;
  name: string;
  price: number;
}

export type SubscriptionState = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  step: number;
  buildingSelected?: IBuilding;
  maxStep: number;
  buildings: IBuilding[];
  tvPlans: ITvPlan[];
};
