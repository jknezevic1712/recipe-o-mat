import { Recipe } from 'src/app/store/recipes/recipe.model';
import { RECIPE_ACTIONS, RecipesActionTypes } from './recipes.actions';

export interface RecipesState {
  recipesList: Recipe[];
  loading: boolean;
}

const initialState: RecipesState = {
  recipesList: [],
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
      const modifiedRecipes = { ...state.recipesList, ...action.payload };

      return {
        ...state,
        recipes: modifiedRecipes,
      };

    case RECIPE_ACTIONS.FETCH_ALL:
      return {
        ...state,
        loading: true,
      };

    case RECIPE_ACTIONS.SAVE_FETCHED_RECIPES:
      const fetchedRecipesPayload = { ...action.payload };

      let sortedRecipesList: Recipe[] = [];
      Object.values(fetchedRecipesPayload).map((recipesList: Recipe) =>
        sortedRecipesList.push(recipesList)
      );

      return {
        ...state,
        recipesList: sortedRecipesList,
        loading: false,
      };

    default:
      return state;
  }
}
