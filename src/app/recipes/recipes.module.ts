import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [RecipesComponent, RecipeDetailComponent],
  imports: [RouterModule, RecipesRoutingModule],
})
export class RecipesModule {}
