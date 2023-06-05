import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, map, switchMap } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import { User } from 'src/app/store/auth/auth.model';
import { Recipe } from 'src/app/store/recipes/recipe.model';

@Component({
  selector: 'app-recipe-store',
  templateUrl: './recipe-store.component.html',
  styles: [':host { width: 100%; height: 100%; display: flex; }'],
})
export class RecipeStoreComponent {
  recipe: Recipe;
  recipeIndex: number;
  // user: User;
  private routeSub: Subscription;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.store.select('auth', 'user').subscribe((user) => {
    //   this.user = user;
    // });

    this.routeSub = this.route.params
      .pipe(
        map((params) => +params['id']),
        switchMap((id) => {
          this.recipeIndex = id;

          return this.store.select('recipes', 'recipesList');
        }),
        map((recipeList) =>
          recipeList.find((recipe, idx) => idx === this.recipeIndex)
        )
      )
      .subscribe((recipe) => (this.recipe = recipe));
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
