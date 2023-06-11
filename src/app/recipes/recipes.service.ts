import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { UpdateRecipe } from '../store/recipes/recipes.actions';

import { Recipe } from '../store/recipes/recipe.model';
import { User } from '../store/auth/auth.model';

/*
 * Filters recipes' likes array and if it finds current users' id in it, it will remove it from the array (meaning 'Unlike' action) and vice-versa (meaning 'Like' action)
 */
const setCorrectLikesArray = (recipe: Recipe, user: User): string[] => {
  let newLikesArr = [...recipe.likes];
  const hasUserLikedAlready = newLikesArr.filter(
    (userId) => userId === user.id
  );

  if (hasUserLikedAlready.length === 0) {
    newLikesArr.push(user.id);
    return newLikesArr;
  }

  return newLikesArr.filter((userId) => userId !== user.id);
};

@Injectable({ providedIn: 'root' })
export class RecipesService {
  public unsubscribeComponent$ = new Subject<void>();
  public unsubscribe$ = this.unsubscribeComponent$.asObservable();

  constructor(private store: Store<AppState>) {}

  likeRecipe(recipe: Recipe, user: User) {
    const newLikesArr = setCorrectLikesArray(recipe, user);
    let newRecipe = { ...recipe };

    newRecipe.likes = newLikesArr;

    return this.store.dispatch(new UpdateRecipe(newRecipe));
  }
}
