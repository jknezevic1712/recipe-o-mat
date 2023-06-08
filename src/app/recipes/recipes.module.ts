import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './recipe-list/recipes-list.component';
import { RecipeTileComponent } from './recipe-list/recipe-tile/recipe-tile.component';
import { RecipeStoreComponent } from './recipe-store/recipe-store.component';
import { RecipeCommentComponent } from './recipe-detail/recipe-comment/recipe-comment.component';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeTileComponent,
    RecipesListComponent,
    RecipeStoreComponent,
    RecipeCommentComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RecipesRoutingModule,
    ShareButtonsModule,
    ShareIconsModule,
    ReactiveFormsModule,
  ],
})
export class RecipesModule {}
