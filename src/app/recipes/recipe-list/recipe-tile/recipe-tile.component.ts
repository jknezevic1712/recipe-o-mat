import { Component, Input } from '@angular/core';
import { Recipe } from '../../../store/recipes/recipe.model';

@Component({
  selector: 'app-recipe-tile',
  templateUrl: './recipe-tile.component.html',
})
export class RecipeTileComponent {
  @Input() recipe: Recipe;
  @Input() recipeIndex: number;
}
