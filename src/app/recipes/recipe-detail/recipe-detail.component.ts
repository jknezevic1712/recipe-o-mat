import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, map, switchMap } from 'rxjs';

import { RecipesService } from '../recipes.service';

import { AppState } from 'src/app/store/app.reducer';
import { Recipe, RecipeComment } from '../../store/recipes/recipe.model';
import { User } from 'src/app/store/auth/auth.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [':host { width: 100%; height: 100%; display: flex; }'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeIndex: number;
  isLoading = false;

  user: User;
  isUserRecipeAuthor: boolean;
  hasUserLikedRecipe: boolean;

  showCommentModal = false;
  isShareMenuOpen = false;

  private routeSub: Subscription;

  blankImagePlaceholder = 'src/assets/blank_image_placeholder.webp';

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private recipesService: RecipesService
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

          return this.store.select('recipes');
        }),
        map((recipeState) => {
          this.isLoading = recipeState.loading;

          if (recipeState.recipesList.length < 1) {
            this.router.navigate(['/recipes']);
          }

          return recipeState.recipesList.find(
            (recipe, idx) => idx === this.recipeIndex
          );
        })
      )
      .subscribe((recipe) => {
        this.recipe = recipe;

        return this.toggleLikeButton();
      });

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

  handleShowCommentModal(showModal?: boolean) {
    if (showModal !== undefined) {
      return (this.showCommentModal = showModal);
    }

    return (this.showCommentModal = true);
  }

  handleShowShareMenu() {
    this.isShareMenuOpen = !this.isShareMenuOpen;
  }

  handleLikeRecipe() {
    this.recipesService.likeRecipe(this.recipe, this.user);
  }

  handleRecipeCommentLike(recipeCommentIndex: number) {
    return this.recipesService.likeRecipeComment(
      this.recipe,
      this.user,
      recipeCommentIndex
    );
  }

  toggleLikeButton() {
    let findUserId: string;

    if (this.recipe.likes !== undefined) {
      findUserId = this.recipe.likes.find((el) => el === this.user.id);
    } else {
      return (this.hasUserLikedRecipe = false);
    }

    return (this.hasUserLikedRecipe = findUserId ? true : false);
  }
}
