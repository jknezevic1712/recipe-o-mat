import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import { Subscription } from 'rxjs';

import { RecipesService } from '../recipes.service';

import { Recipe } from '../../store/recipes/recipe.model';
import { User } from 'src/app/store/auth/auth.model';
import { FetchAllRecipes } from 'src/app/store/recipes/recipes.actions';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styles: [':host { width: 100%; height: 100%; }'],
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  user: User;
  firestoreDb: Firestore = inject(Firestore);
  loading = false;

  private recipesSub: Subscription;
  private userSub: Subscription;

  constructor(
    private store: Store<AppState>,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new FetchAllRecipes());

    this.recipesSub = this.store.select('recipes').subscribe((recipesState) => {
      this.loading = recipesState.loading;
      this.recipes = recipesState.recipesList;
    });

    this.userSub = this.store
      .select('auth', 'user')
      .subscribe((userObj) => (this.user = userObj));
  }

  ngOnDestroy(): void {
    if (this.recipesSub) {
      this.recipesSub.unsubscribe();
    }

    if (this.userSub) {
      this.userSub.unsubscribe();
    }

    this.recipesService.unsubscribeComponent$.next();
  }
}
