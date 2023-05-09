export interface IBuilding {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
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
  tvPlans: any[];
};
