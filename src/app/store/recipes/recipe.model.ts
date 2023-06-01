export interface Recipe {
  authorId: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients?: Ingredient[];
  steps?: Step[];
  comments?: RecipeComment[];
  likes?: number;
}

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export interface Step {
  [key: string]: string;
}

export interface RecipeComment {
  authorId: string;
  content: string;
  date?: Date;
  likes?: number;
}
