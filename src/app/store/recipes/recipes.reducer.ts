import { Recipe, Ingredient } from 'src/app/recipes/recipe.model';
import { RECIPE_ACTIONS, RecipesActionTypes } from './recipes.actions';

export interface RecipesState {
  recipes: Recipe[] | null;
  loading: boolean;
}

const initialState: RecipesState = {
  recipes: null,
  loading: false,
};

export function recipesReducer(
  state = initialState,
  action: RecipesActionTypes
) {
  switch (action.type) {
    case RECIPE_ACTIONS.REFRESH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    case RECIPE_ACTIONS.ADD:
      const modifiedRecipes = { ...state.recipes, ...action.payload };

      return {
        ...state,
        recipes: modifiedRecipes,
      };

    case RECIPE_ACTIONS.UPDATE:
      const updatedRecipe = {
        ...state.recipes[action.payload.recipeIdx],
        ...action.payload.recipe,
      };

      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.recipeIdx] = updatedRecipe;

      return {
        ...state,
        recipes: updatedRecipes,
      };

    case RECIPE_ACTIONS.DELETE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe, idx) => idx !== action.payload),
      };

    default:
      return state;
  }
}
