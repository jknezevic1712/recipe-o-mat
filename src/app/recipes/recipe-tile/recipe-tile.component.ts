import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-tile',
  templateUrl: './recipe-tile.component.html',
})
export class RecipeTileComponent {
  @Input() recipe!: Recipe;
  @Input() recipeIndex!: number;
}
