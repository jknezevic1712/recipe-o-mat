import { Component, OnDestroy, OnInit } from '@angular/core';

import { Recipe } from '../../store/recipes/recipe.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { User } from 'src/app/store/auth/auth.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  user: User;

  private recipesSub: Subscription;
  private userSub: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.recipesSub = this.store
      .select('recipes', 'recipesList')
      .subscribe((recipeList) => {
        this.recipes = recipeList;
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
  }
}
