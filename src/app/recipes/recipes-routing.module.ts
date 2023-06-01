import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './recipe-list/recipes-list.component';
import { RecipeStoreComponent } from './recipe-store/recipe-store.component';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesListComponent,
        pathMatch: 'full',
      },
      {
        path: 'store',
        component: RecipeStoreComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'store/:id',
        component: RecipeStoreComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
