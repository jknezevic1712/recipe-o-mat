import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { UpdateRecipe } from '../store/recipes/recipes.actions';

import { Recipe, RecipeComment } from '../store/recipes/recipe.model';
import { User } from '../store/auth/auth.model';

/*
 * Filters recipes' likes array and if it finds current users' id in it, it will remove it from the array (meaning 'Unlike' action) and vice-versa (meaning 'Like' action)
 */
const setCorrectLikesArray = (
  recipe: Recipe,
  user: User,
  recipeComments?: RecipeComment[],
  recipeCommentIndex?: number
): string[] | RecipeComment[] => {
  if (!recipeComments) {
    let newLikesArr = [...recipe.likes];
    const hasUserLikedAlready = newLikesArr.filter(
      (userId) => userId === user.id
    );

    if (hasUserLikedAlready.length === 0) {
      newLikesArr.push(user.id);
      return newLikesArr;
    }

    return newLikesArr.filter((userId) => userId !== user.id);
  }

  let newCommentLikesArr = [...recipeComments];
  const hasUserLikedAlready = newCommentLikesArr[
    recipeCommentIndex
  ].likes.filter((userId: string) => userId === user.id);

  if (hasUserLikedAlready.length === 0) {
    let commentLikes = [...newCommentLikesArr[recipeCommentIndex].likes];
    commentLikes.push(user.id);

    newCommentLikesArr[recipeCommentIndex] = Object.assign(
      {},
      newCommentLikesArr[recipeCommentIndex],
      {
        likes: [...commentLikes],
      }
    );

    return newCommentLikesArr;
  }

  let commentLikes = [...newCommentLikesArr[recipeCommentIndex].likes].filter(
    (userId: string) => userId !== user.id
  );

  newCommentLikesArr[recipeCommentIndex] = Object.assign(
    {},
    newCommentLikesArr[recipeCommentIndex],
    {
      likes: [...commentLikes],
    }
  );

  return newCommentLikesArr;
};

@Injectable({ providedIn: 'root' })
export class RecipesService {
  public unsubscribeComponent$ = new Subject<void>();
  public unsubscribe$ = this.unsubscribeComponent$.asObservable();

  constructor(private store: Store<AppState>) {}

  likeRecipe(recipe: Recipe, user: User) {
    const newLikesArr = setCorrectLikesArray(recipe, user) as string[];
    let newRecipe = { ...recipe };

    newRecipe.likes = newLikesArr;

    return this.store.dispatch(new UpdateRecipe(newRecipe));
  }

  likeRecipeComment(recipe: Recipe, user: User, recipeCommentIndex: number) {
    let reversedComments = [...recipe.comments];
    const newCommentLikesArr = setCorrectLikesArray(
      recipe,
      user,
      reversedComments,
      recipeCommentIndex
    ) as RecipeComment[];
    let newRecipe = { ...recipe };

    newRecipe.comments = newCommentLikesArr;

    return this.store.dispatch(new UpdateRecipe(newRecipe));
  }
}
