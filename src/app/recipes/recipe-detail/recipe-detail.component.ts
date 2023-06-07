import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, map, switchMap } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import { Recipe } from '../../store/recipes/recipe.model';
import { User } from 'src/app/store/auth/auth.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [':host { width: 100%; height: 100%; display: flex; }'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeIndex: number;
  user: User;
  isUserRecipeAuthor: boolean;
  showAddCommentModal: boolean;
  isShareMenuOpen = false;
  private routeSub: Subscription;
  blankImagePlaceholder = 'src/assets/blank_image_placeholder.png';

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.store.select('auth', 'user').subscribe((user) => {
      this.user = user;
    });

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

    this.user
      ? (this.isUserRecipeAuthor = this.user.id === this.recipe.authorId)
      : null;
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

  handleAddShowCommentModal() {
    this.showAddCommentModal = true;
  }

  handleShowShareMenu() {
    this.isShareMenuOpen = !this.isShareMenuOpen;
  }
}
