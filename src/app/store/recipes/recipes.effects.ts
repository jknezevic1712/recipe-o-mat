import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  Firestore,
  collectionData,
  collection,
  updateDoc,
  doc,
  setDoc,
  DocumentReference,
  deleteDoc,
} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import {
  type AddRecipe,
  FetchAllRecipes,
  RECIPE_ACTIONS,
  SaveFetchedRecipes,
  type UpdateRecipe,
  DeleteRecipe,
} from './recipes.actions';
import { Observable, map, switchMap, takeUntil } from 'rxjs';

import { RecipesService } from 'src/app/recipes/recipes.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipesEffects {
  firestoreDb: Firestore = inject(Firestore);

  constructor(
    private actions$: Actions,
    private recipesService: RecipesService,
    private firestore: AngularFirestore
  ) {}

  fetchRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RECIPE_ACTIONS.FETCH_ALL),
      switchMap(() => {
        const recipesCollectionRef = collection(this.firestoreDb, 'recipes');

        return collectionData(recipesCollectionRef).pipe(
          takeUntil(this.recipesService.unsubscribe$)
        ) as Observable<Recipe[]>;
      }),
      map((recipes) => new SaveFetchedRecipes(recipes))
    )
  );

  createRecipe$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RECIPE_ACTIONS.ADD),
        switchMap((actionData: AddRecipe) => {
          const recipesCollectionRef = collection(this.firestoreDb, 'recipes');
          const customRecipeId = this.firestore.createId();
          const dateCreated = new Date();

          const structuredRecipe = {
            ...actionData.payload,
            dateCreated,
            id: customRecipeId,
          };

          return setDoc(
            doc(recipesCollectionRef, customRecipeId),
            structuredRecipe
          );
        })
      ),
    { dispatch: false }
  );

  updateRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RECIPE_ACTIONS.UPDATE),
      switchMap((actionData: UpdateRecipe) => {
        const updatedRecipe = actionData.payload;

        const recipeDocRef = doc(
          this.firestoreDb,
          'recipes/' + updatedRecipe.id
        ) as DocumentReference<Recipe>;

        return updateDoc(recipeDocRef, updatedRecipe);
      }),
      map(() => new FetchAllRecipes())
    )
  );

  deleteRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RECIPE_ACTIONS.DELETE),
      switchMap((actionData: DeleteRecipe) => {
        const recipeId = actionData.payload;

        const recipeDocRef = doc(
          this.firestoreDb,
          'recipes/' + recipeId
        ) as DocumentReference<Recipe>;

        return deleteDoc(recipeDocRef);
      }),
      map(() => new FetchAllRecipes())
    )
  );
}
