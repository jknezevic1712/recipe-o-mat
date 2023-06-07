import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

// import { User } from '../app/store/auth/auth.model';
import { Recipe } from 'src/app/store/recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class FirestoreDBService {
  constructor(private firestore: AngularFirestore) {}

  // createUser(user: User) {
  //   const userObj = { ...user };

  //   return this.firestore.collection('users').add(userObj);
  // }

  // getUserById(userId: string) {
  //   return this.firestore.collection('users/' + userId).get();
  // }

  fetchRecipes() {
    return this.firestore.collection('recipes').snapshotChanges();
  }

  createRecipe(recipe: Recipe) {
    const customRecipeId = this.firestore.createId();

    return this.firestore
      .collection('recipes')
      .doc(customRecipeId)
      .set({ ...recipe, id: customRecipeId });
  }

  updateRecipe(recipe: Recipe) {
    return this.firestore.doc('recipes/' + recipe.id).update(recipe);
  }

  deleteRecipe(recipeId: string) {
    return this.firestore.doc('recipes/' + recipeId).delete();
  }
}
