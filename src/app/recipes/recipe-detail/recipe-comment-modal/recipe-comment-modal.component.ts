import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';
import { UpdateRecipe } from 'src/app/store/recipes/recipes.actions';

import { Recipe } from 'src/app/store/recipes/recipe.model';
import { User } from 'src/app/store/auth/auth.model';

@Component({
  selector: 'app-recipe-comment-modal',
  templateUrl: './recipe-comment-modal.component.html',
})
export class RecipeCommentModalComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() user: User;
  @Output() showCommentModalEvent = new EventEmitter<boolean>();

  commentModalForm: FormGroup<{
    commentText: FormControl<string>;
  }>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let commentText = '';

    this.commentModalForm = new FormGroup({
      commentText: new FormControl(commentText, Validators.required),
    });
  }

  onSubmit() {
    let newRecipe = Object.assign({}, this.recipe, {
      comments: [
        ...this.recipe.comments,
        {
          authorId: this.user.id,
          authorName: this.user.fullName,
          authorPhotoUrl: this.user.photoURL,
          content: this.commentModalForm.controls.commentText.value.trim(),
          date: new Date(),
          likes: [],
        },
      ],
    });

    this.store.dispatch(new UpdateRecipe(newRecipe));

    this.showCommentModalEvent.emit(false);
  }

  handleModalClose(event?: KeyboardEvent) {
    if ((event && event.key === 'Escape') || !event) {
      return this.showCommentModalEvent.emit(false);
    }

    return true;
  }

  handleDisableSendButton() {
    return !this.commentModalForm.controls.commentText.valid &&
      !this.commentModalForm.controls.commentText.dirty &&
      this.commentModalForm.controls.commentText.value.trim() === ''
      ? true
      : false;
  }
}
