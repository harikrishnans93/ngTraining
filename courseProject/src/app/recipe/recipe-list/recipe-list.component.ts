import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('test recipe', 'for testing',
    'https://cdn1.tendercuts.in/media/catalog/product//0/3/03_pepper_chicken_328x210_2.jpg'),
  new Recipe('test recipe1', 'for testing1', 'https://cdn1.tendercuts.in/media/catalog/product//0/3/03_pepper_chicken_328x210_2.jpg')];
  @Output() recipeClicked = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipeItem: Recipe) {
    this.recipeClicked.emit(recipeItem);
  }
}
