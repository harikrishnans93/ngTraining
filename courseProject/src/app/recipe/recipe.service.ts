import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppinglistService } from '../shoppinglist/shoppinglist.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];
  recipeSelected = new Subject();
  recipiesAdded = new Subject<Recipe[]>();
  constructor(private shoppinglistService: ShoppinglistService) { }
  getRecipies() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {

  }
  addRecipes(recipe: Recipe[]) {
    this.recipes.push(...recipe);
    console.log(recipe, 'RE');
    console.log(this.recipes.slice(), 'arr');
    this.recipiesAdded.next(this.recipes.slice());
  }
  fetchSubject(){
    this.recipiesAdded.next(this.recipes.slice());
  }
}
