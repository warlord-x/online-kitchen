import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Output} from '@angular/core';

export class ShoppingListService {

  @Output() ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients = [
    new Ingredient('apple',5),
    new Ingredient('tomatoes',10)
  ];

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
