import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredient: Ingredient[];
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredient = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged.subscribe(
      (ings: Ingredient[]) => {
        this.ingredient = ings;
      }
    );
  }

}
