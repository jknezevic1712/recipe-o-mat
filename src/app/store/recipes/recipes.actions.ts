import { Action } from '@ngrx/store';

import { Recipe } from 'src/app/store/recipes/recipe.model';

export enum RECIPE_ACTIONS {
  FETCH_ALL = 'FETCH_ALL',
  SAVE_FETCHED_RECIPES = 'SAVE_FETCHED_RECIPES',
  REFRESH_RECIPES = 'REFRESH_RECIPES',
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export class FetchAllRecipes implements Action {
  readonly type = RECIPE_ACTIONS.FETCH_ALL;
}

export class SaveFetchedRecipes implements Action {
  readonly type = RECIPE_ACTIONS.SAVE_FETCHED_RECIPES;

  constructor(public payload: Recipe[]) {}
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

  constructor(public payload: Recipe) {}
}

export class DeleteRecipe implements Action {
  readonly type = RECIPE_ACTIONS.DELETE;

  constructor(public payload: string) {}
}

export type RecipesActionTypes =
  | FetchAllRecipes
  | SaveFetchedRecipes
  | RefreshRecipes
  | AddRecipe
  | UpdateRecipe
  | DeleteRecipe;
