import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppinglistService } from '../shoppinglist/shoppinglist.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [new Recipe(1, 'test recipe', 'for testing',
    'https://cdn1.tendercuts.in/media/catalog/product//0/3/03_pepper_chicken_328x210_2.jpg',
    [{ name: 'chicken', amount: 10 }, { name: 'chilly', amount: 2 }]),
  new Recipe(2, 'test recipe1', 'for testing1', 'https://cdn1.tendercuts.in/media/catalog/product//0/3/03_pepper_chicken_328x210_2.jpg'
    , [{ name: 'chicken', amount: 10 }, { name: 'chilly', amount: 2 }, { name: 'curd', amount: 1 }])];
  recipeSelected = new Subject();
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
}
