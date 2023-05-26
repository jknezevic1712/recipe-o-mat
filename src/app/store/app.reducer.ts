import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './auth/auth.reducer';
import { recipesReducer, RecipesState } from './recipes/recipes.reducer';

export interface AppState {
  auth: AuthState;
  recipes: RecipesState;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  recipes: recipesReducer,
};
