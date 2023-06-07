import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';
import { FirestoreDBService } from 'src/firestore/firestore.service';

import { AppState } from 'src/app/store/app.reducer';
import { Recipe } from 'src/app/store/recipes/recipe.model';
import { User } from 'src/app/store/auth/auth.model';

@Component({
  selector: 'app-recipe-store',
  templateUrl: './recipe-store.component.html',
  styles: [':host { width: 100%; height: 100%; display: flex; }'],
})
export class RecipeStoreComponent {
  user: User;
  recipe: Recipe;
  recipeIndex: number | null;

  recipeStoreForm: FormGroup<{
    name: FormControl<string>;
    description: FormControl<string>;
    imageUrl: FormControl<string>;
    ingredients: FormArray;
    cookingSteps: FormArray;
  }>;
  isEditMode = false;

  private routeSub: Subscription;
  private storeSub: Subscription;
  private userSub: Subscription;

  unitTypes = [
    'g',
    'kg',
    'ml',
    'l',
    'piece(s)',
    'tablespoon(s)',
    'teaspoon(s)',
  ];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private firestoreDbService: FirestoreDBService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.recipeIndex = params['id'] != null ? +params['id'] : null;
      this.isEditMode = params['id'] != null;

      this.initForm();
    });

    this.userSub = this.store
      .select('auth', 'user')
      .subscribe((user) => (this.user = user));
  }

  private initForm() {
    let name = '';
    let description = '';
    let imageUrl = '';
    let ingredients = new FormArray([]);
    let cookingSteps = new FormArray([]);

    if (this.isEditMode) {
      this.storeSub = this.store
        .select('recipes', 'recipesList')
        .pipe(
          map((recipeList) =>
            recipeList.find((recipe, idx) => idx === this.recipeIndex)
          )
        )
        .subscribe((recipe) => {
          name = recipe.name;
          description = recipe.description;
          imageUrl = recipe.imageUrl ? recipe.imageUrl : '';

          if (recipe['ingredients']) {
            for (let ingredient of recipe['ingredients']) {
              ingredients.push(
                new FormGroup({
                  name: new FormControl(ingredient.name, Validators.required),
                  amount: new FormControl(
                    ingredient.amount,
                    Validators.required
                  ),
                  unit: new FormControl(ingredient.unit, Validators.required),
                })
              );
            }
          } else {
            ingredients.push(
              new FormGroup({
                name: new FormControl(null, Validators.required),
                amount: new FormControl(null, Validators.required),
                unit: new FormControl(null, Validators.required),
              })
            );
          }

          if (recipe['cookingSteps']) {
            for (let step of recipe['cookingSteps']) {
              cookingSteps.push(
                new FormGroup({
                  description: new FormControl(
                    step.description,
                    Validators.required
                  ),
                })
              );
            }
          } else {
            cookingSteps.push(
              new FormGroup({
                description: new FormControl(null, Validators.required),
              })
            );
          }
        });
    } else {
      ingredients.push(
        new FormGroup({
          name: new FormControl(null, Validators.required),
          amount: new FormControl(null, Validators.required),
          unit: new FormControl(null, Validators.required),
        })
      );

      cookingSteps.push(
        new FormGroup({
          description: new FormControl(null, Validators.required),
        })
      );
    }

    this.recipeStoreForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      description: new FormControl(description, Validators.required),
      imageUrl: new FormControl(imageUrl),
      ingredients: ingredients,
      cookingSteps: cookingSteps,
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeStoreForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required),
        unit: new FormControl(null, Validators.required),
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeStoreForm.get('ingredients')).removeAt(index);
  }

  get ingredientControls() {
    return (<FormArray>this.recipeStoreForm.get('ingredients')).controls;
  }

  onAddCookingStep() {
    (<FormArray>this.recipeStoreForm.get('cookingSteps')).push(
      new FormGroup({
        description: new FormControl(null, Validators.required),
      })
    );
  }

  onDeleteCookingStep(index: number) {
    (<FormArray>this.recipeStoreForm.get('cookingSteps')).removeAt(index);
  }

  get cookingStepsControls() {
    return (<FormArray>this.recipeStoreForm.get('cookingSteps')).controls;
  }

  onSubmit() {
    const recipeWithAuthorId = {
      ...this.recipeStoreForm.value,
      authorId: this.user.id,
      authorName: this.user.fullName,
      authorPhotoUrl: this.user.photoURL,
    };

    this.firestoreDbService.createRecipe(recipeWithAuthorId as Recipe);

    if (this.isEditMode) {
      return this.router.navigate(['/recipes/' + this.recipeIndex]);
    }

    return this.router.navigate(['/recipes']);
  }

  handleDisableSaveButton(): boolean {
    if (this.isEditMode) {
      return !this.recipeStoreForm.valid ||
        (this.recipeStoreForm.valid && !this.recipeStoreForm.dirty)
        ? true
        : false;
    } else {
      return !this.recipeStoreForm.valid ? true : false;
    }
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }

    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }

    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
