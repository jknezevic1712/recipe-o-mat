export interface Recipe {
  id: string;
  authorId: string;
  authorName: string;
  authorPhotoUrl: string;
  name: string;
  description: string;
  imageUrl?: string;
  ingredients?: Ingredient[];
  cookingSteps?: Step[];
  comments?: RecipeComment[];
  likes?: number;
}

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export interface Step {
  description: string;
}

export interface RecipeComment {
  authorId: string;
  content: string;
  date?: Date;
  likes?: number;
}
