import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import {
  FetchAllRecipes,
  RECIPE_ACTIONS,
  SaveFetchedRecipes,
} from './recipes.actions';
import { Observable, map, switchMap, takeUntil } from 'rxjs';

import { RecipesService } from 'src/app/recipes/recipes.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipesEffects {
  firestoreDb: Firestore = inject(Firestore);

  constructor(
    private actions$: Actions,
    private recipesService: RecipesService
  ) {}

  fetchPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RECIPE_ACTIONS.FETCH_ALL),
      map((data) => data),
      switchMap(() => {
        const recipesCollection = collection(this.firestoreDb, 'recipes');

        return collectionData(recipesCollection).pipe(
          takeUntil(this.recipesService.unsubscribe$)
        ) as Observable<Recipe[]>;
      }),
      map((recipes) => new SaveFetchedRecipes(recipes))
    )
  );
}
