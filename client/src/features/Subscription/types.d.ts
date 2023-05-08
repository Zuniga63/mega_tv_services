export type SubscriptionState = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  step: number;
  maxStep: number;
  buildings: any[];
  tvPlans: any[];
};
