import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './recipe-list/recipes-list.component';
import { RecipeTileComponent } from './recipe-tile/recipe-tile.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeTileComponent,
    RecipesListComponent,
  ],
  imports: [CommonModule, RouterModule, RecipesRoutingModule],
})
export class RecipesModule {}
