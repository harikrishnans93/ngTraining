import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppinglistService } from '../shoppinglist/shoppinglist.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

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
    this.recipiesAdded.next(this.recipes.slice());
  }
}
