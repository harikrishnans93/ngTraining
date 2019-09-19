import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ShoppinglistService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopinglist-edit',
  templateUrl: './shopinglist-edit.component.html',
  styleUrls: ['./shopinglist-edit.component.css']
})
export class ShopinglistEditComponent implements OnInit,OnDestroy {
  // @ViewChild('ingAmount', { static: false }) amountInput: ElementRef;
  // @ViewChild('ingName', { static: false }) nameInput: ElementRef;
   @ViewChild('f', { static: false }) form: NgForm;

  ingredientaeditting:Subscription;
  isEdit=false;
  editingitem:Ingredient;
  editindex:number;
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredientaeditting=this.shoppinglistService.ingredientEditing.subscribe(
      (index:number)=>{
        this.editingitem=this.shoppinglistService.getIngredient(index);
        this.isEdit=true;
        this.editindex=index;
        this.form.setValue({
          name:this.editingitem.name,
          amount:this.editingitem.amount
        });
      }
    );
  }
  ngOnDestroy(){
this.ingredientaeditting.unsubscribe();
  }
  // onAddClick(name: HTMLInputElement, amount: HTMLInputElement) {

  //   const ing: Ingredient = new Ingredient(name.value, (amount.value as unknown) as number);
  //   this.ingredientAdded.emit(ing);
  // }
  // onAddClick() {
 
  //   const ing: Ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
  //   this.ingredientAdded.emit(ing);
  // }

  onAddClick(form:NgForm) {
    //const ing: Ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    const ing:Ingredient=new Ingredient(form.value.name,+form.value.amount)
    console.log(form.value);
    if(this.isEdit){
      this.shoppinglistService.updateIngredient(ing,this.editindex);
    }else{
      this.shoppinglistService.addIngredient(ing);
    }
    this.isEdit=false;
    form.reset();
  }
  onClear(form:NgForm){
    this.isEdit=false;
    form.reset();
  }
  onDelete(form:NgForm){
    this.shoppinglistService.deleteIngredient(this.editindex);
    this.isEdit=false;
    console.log(form);
    form.reset();
  }
}
