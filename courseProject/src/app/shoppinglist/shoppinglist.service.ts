import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredient: Ingredient[] = [new Ingredient('chicken', 100), new Ingredient('apple', 25)];
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientEditing= new Subject<number>();

  constructor() { }
  addIngredient(ingre: Ingredient) {
    this.ingredient.push(ingre);
    this.ingredientsChanged.next(this.ingredient.slice());
  }
  getIngredients() {
    return this.ingredient.slice();
  }
  addIngredients(ings: Ingredient[]) {
    // ings.forEach(element => {
    //   this.ingredient.push(element);
    // });
    this.ingredient.push(...ings);
    this.ingredientsChanged.next(this.ingredient.slice());
  }
  getIngredient(index:number){
    return this.ingredient[index];
  }
  updateIngredient(ingredient:Ingredient,index:number){
    this.ingredient[index].name=ingredient.name;
    this.ingredient[index].amount=ingredient.amount;    
    this.ingredientsChanged.next(this.ingredient.slice());
  }
  deleteIngredient(index){
    this.ingredient.splice(index,1);
    this.ingredientsChanged.next(this.ingredient.slice());
  }
}
