import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('recipe1Name', 'recipe1Desc',
      'https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      [new Ingredient('ing1',4), new Ingredient('ing3', 8)]),
    new Recipe('recipe2Name', 'recipe2Desc',
      'https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      [new Ingredient('ingx',4), new Ingredient('ingt', 8)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
