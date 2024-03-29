import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RecipeComment } from 'src/app/store/recipes/recipe.model';

@Component({
  selector: 'app-recipe-comment',
  templateUrl: './recipe-comment.component.html',
})
export class RecipeCommentComponent {
  @Input() comment: RecipeComment;
  @Input() commentIdx: number;
  @Input() userId: string;
  @Input() isLastComment: boolean;
  @Output() recipeCommentLikeEvent = new EventEmitter<number>();

  handleLikeComment() {
    this.recipeCommentLikeEvent.emit(this.commentIdx);
  }

  hasUserLikedComment(): boolean {
    if (this.comment.likes.includes(this.userId)) {
      return true;
    }

    return false;
  }
}
