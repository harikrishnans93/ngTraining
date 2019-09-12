import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredient: Ingredient[] = [new Ingredient('chicken', 100), new Ingredient('apple', 25)];
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() { }
  addIngredient(ingre: Ingredient) {
    this.ingredient.push(ingre);
    this.ingredientsChanged.emit(this.ingredient.slice());
  }
  getIngredients() {
    return this.ingredient.slice();
  }
  addIngredients(ings: Ingredient[]) {
    // ings.forEach(element => {
    //   this.ingredient.push(element);
    // });
    this.ingredient.push(...ings);
    this.ingredientsChanged.emit(this.ingredient.slice());
  }
}
