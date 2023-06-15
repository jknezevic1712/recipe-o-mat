export interface Recipe {
  id: string;
  authorId: string;
  authorName: string;
  authorPhotoUrl: string;
  name: string;
  description: string;
  dateCreated: Date;
  imageUrl?: string;
  ingredients: Ingredient[];
  cookingSteps: Step[];
  comments: RecipeComment[];
  likes: string[];
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
  authorName: string;
  authorPhotoUrl: string;
  content: string;
  date: Date;
  likes: string[];
}
