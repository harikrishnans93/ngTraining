import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredient: Ingredient[];
  igChange: Subscription;
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredient = this.shoppinglistService.getIngredients();
    this.igChange = this.shoppinglistService.ingredientsChanged.subscribe(
      (ings: Ingredient[]) => {
        this.ingredient = ings;
      }
    );
  }
  ngOnDestroy() {
    this.igChange.unsubscribe();
  }
  onEditItem(index: number) {
    this.shoppinglistService.ingredientEditing.next(index);
  }

}
