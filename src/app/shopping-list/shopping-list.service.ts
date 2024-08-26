import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredient: Ingredient[] = [
    new Ingredient('Apple', 20),
    new Ingredient('Potato', 10),
  ];

  getIngredient() {
    return this.ingredient.slice();
  }

  getIngredients(index: number) {
    return this.ingredient[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
    this.ingredientChanged.next(this.ingredient.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //     this.addIngredient(ingredient)
    // }

    // Another Way
    this.ingredient.push(...ingredients);
    this.ingredientChanged.next(this.ingredient.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredient[index] = newIngredient;
    this.ingredientChanged.next(this.ingredient.slice());
  }

  deleteIngredient(index: number) {
    this.ingredient.splice(index, 1);
    this.ingredientChanged.next(this.ingredient.slice());
  }
}
