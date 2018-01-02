import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('recipe1Name', 'recipe1Desc', 'https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'),
    new Recipe('recipe2Name', 'recipe2Desc', 'https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
