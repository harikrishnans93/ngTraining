import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter();
  constructor(private dataStorageservice:DataStorageService) { }

  ngOnInit() {
  }

  onRecipeClick() {
    this.menuClicked.emit('Recipe');
  }
  onShoppinglistClick() {
    this.menuClicked.emit('ShoppingList');
  }

  storeData(){
    this.dataStorageservice.storeRecipie();
  }
  fetchData(){
    this.dataStorageservice.fetchRecipe();
  }
}
