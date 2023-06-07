import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  Firestore,
  collectionData,
  collection,
  updateDoc,
  doc,
  DocumentReference,
} from '@angular/fire/firestore';

import {
  FetchAllRecipes,
  RECIPE_ACTIONS,
  RecipesActionTypes,
  SaveFetchedRecipes,
  type UpdateRecipe,
} from './recipes.actions';
import { Observable, map, switchMap, takeUntil } from 'rxjs';

import { RecipesService } from 'src/app/recipes/recipes.service';

import { Recipe } from './recipe.model';
import { Action } from '@ngrx/store';

@Injectable()
export class RecipesEffects {
  firestoreDb: Firestore = inject(Firestore);

  constructor(
    private actions$: Actions,
    private recipesService: RecipesService
  ) {}

  fetchRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RECIPE_ACTIONS.FETCH_ALL),
      switchMap(() => {
        const recipesCollection = collection(this.firestoreDb, 'recipes');

        return collectionData(recipesCollection).pipe(
          takeUntil(this.recipesService.unsubscribe$)
        ) as Observable<Recipe[]>;
      }),
      map((recipes) => new SaveFetchedRecipes(recipes))
    )
  );

  updateRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RECIPE_ACTIONS.UPDATE),
      switchMap((actionData: UpdateRecipe) => {
        const updatedRecipe = actionData.payload;
        console.log('UPDATED RECIPE ', actionData.payload);
        console.log('updatedRecipe.id ', updatedRecipe.id);

        const recipeDocRef = doc(
          this.firestoreDb,
          'recipes/' + updatedRecipe.id
        ) as DocumentReference<Recipe>;

        return updateDoc(recipeDocRef, updatedRecipe);
      }),
      map(() => new FetchAllRecipes())
    )
  );
}
