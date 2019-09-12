import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopinglist-edit',
  templateUrl: './shopinglist-edit.component.html',
  styleUrls: ['./shopinglist-edit.component.css']
})
export class ShopinglistEditComponent implements OnInit {
  @ViewChild('ingAmount', { static: false }) amountInput: ElementRef;
  @ViewChild('ingName', { static: false }) nameInput: ElementRef;
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
  }
  // onAddClick(name: HTMLInputElement, amount: HTMLInputElement) {

  //   const ing: Ingredient = new Ingredient(name.value, (amount.value as unknown) as number);
  //   this.ingredientAdded.emit(ing);
  // }
  // onAddClick() {

  //   const ing: Ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
  //   this.ingredientAdded.emit(ing);
  // }

  onAddClick() {
    const ing: Ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.shoppinglistService.addIngredient(ing);
  }
}
