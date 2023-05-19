export interface Recipe {
  name: string;
  description: string;
  imageUrl: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}
