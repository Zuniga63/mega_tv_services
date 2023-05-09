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
  step: number;
  aptNumber?: string;
  buildingSelected?: IBuilding;
  tvPlanId?: number;
  maxStep: number;
  buildings: IBuilding[];
  tvPlans: ITvPlan[];
  loading: boolean;
  error?: string;
  isSuccess: boolean;
};

export interface SubscribeForm {
  firstName: string;
  lastName: string;
  aptNumber: string;
  email: string;
  phoneNumber: string;
  buildingId: number;
  tvPlanId: number;
}
