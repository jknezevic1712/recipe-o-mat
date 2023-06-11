export interface Recipe {
  id: string;
  authorId: string;
  authorName: string;
  authorPhotoUrl: string;
  name: string;
  description: string;
  dateCreated: Date;
  imageUrl?: string;
  ingredients?: Ingredient[];
  cookingSteps?: Step[];
  comments?: RecipeComment[];
  likes?: string[]; // Store authorIds' in an array and check if the current users' id is inside of it and afterwards show Like/Unlike
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
  likes?: string[]; // Store authorIds' in an array and check if the current users' id is inside of it and afterwards show Like/Unlike
}
