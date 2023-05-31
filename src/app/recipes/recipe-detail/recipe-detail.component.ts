import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, map, switchMap } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [':host { width: 100%; height: 100%; display: flex; }'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeIndex: number;
  private routeSub: Subscription;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params
      .pipe(
        map((params) => +params['id']),
        switchMap((id) => {
          this.recipeIndex = id;

          return this.store.select('recipes', 'recipes');
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

  onCrossOff(liEl: HTMLLIElement) {
    if (liEl.classList.contains('line-through')) {
      this.renderer.removeClass(liEl, 'line-through');
    } else {
      this.renderer.addClass(liEl, 'line-through');
    }
  }
}
