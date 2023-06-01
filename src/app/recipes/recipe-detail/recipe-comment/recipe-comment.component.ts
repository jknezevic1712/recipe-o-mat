import { Component, Input } from '@angular/core';
import { RecipeComment } from 'src/app/store/recipes/recipe.model';

@Component({
  selector: 'app-recipe-comment',
  templateUrl: './recipe-comment.component.html',
})
export class RecipeCommentComponent {
  @Input() comment: RecipeComment;
  @Input() commentIdx: number;
  @Input() isLastComment: boolean;
}
