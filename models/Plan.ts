export enum PaymentType {
  ONE_TIME = "ONE_TIME",
  HOUR = "HOUR",
  MONTH = "MONTH",
}

export interface Plan {
  name: string;
  paymentType: string;
  price?: number;
  points: string[];
  examples: string[];
  featured: boolean;
  CTA: CTA;
}

type Perks = {
  [key: string]: string;
};

type CTA = {
  [key: string]: string;
};
