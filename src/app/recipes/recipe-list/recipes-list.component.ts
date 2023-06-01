import { Component, OnDestroy, OnInit } from '@angular/core';

import { Recipe } from '../../store/recipes/recipe.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit, OnDestroy {
  private recipesSub: Subscription;
  recipes: Recipe[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.recipesSub = this.store
      .select('recipes', 'recipes')
      .subscribe((recipeList) => {
        this.recipes = recipeList;
      });
  }

  ngOnDestroy(): void {
    if (this.recipesSub) {
      this.recipesSub.unsubscribe();
    }
  }
}
