import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredient: Ingredient[] = [new Ingredient('chicken', 100), new Ingredient('apple', 25)];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredientEl: Ingredient) {
    this.ingredient.push(ingredientEl);
  }
}
