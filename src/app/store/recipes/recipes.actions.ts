import { Action } from '@ngrx/store';

import { Recipe } from 'src/app/recipes/recipe.model';

export enum RECIPE_ACTIONS {
  FETCH_ALL = 'FETCH_ALL',
  SAVE_ALL = 'SAVE_ALL',
  REFRESH_RECIPES = 'REFRESH_RECIPES',
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export class FetchAllRecipes implements Action {
  readonly type = RECIPE_ACTIONS.FETCH_ALL;
}

export class SaveAllRecipes implements Action {
  readonly type = RECIPE_ACTIONS.SAVE_ALL;
}

export class RefreshRecipes implements Action {
  readonly type = RECIPE_ACTIONS.REFRESH_RECIPES;

  constructor(public payload: Recipe[]) {}
}

export class AddRecipe implements Action {
  readonly type = RECIPE_ACTIONS.ADD;

  constructor(public payload: Recipe) {}
}

export class UpdateRecipe implements Action {
  readonly type = RECIPE_ACTIONS.UPDATE;

  constructor(
    public payload: {
      recipeIdx: number;
      recipe: Recipe;
    }
  ) {}
}

export class DeleteRecipe implements Action {
  readonly type = RECIPE_ACTIONS.DELETE;

  constructor(public payload: number) {}
}

export type RecipesActionTypes =
  | FetchAllRecipes
  | SaveAllRecipes
  | RefreshRecipes
  | AddRecipe
  | UpdateRecipe
  | DeleteRecipe;
