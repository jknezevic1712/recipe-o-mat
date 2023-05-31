export interface Recipe {
  name: string;
  description: string;
  imageUrl: string;
  ingredients?: Ingredient[];
  steps?: Step[];
}

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export interface Step {
  [key: string]: string;
}
