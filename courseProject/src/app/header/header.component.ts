import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onRecipeClick() {
    this.menuClicked.emit('Recipe');
  }
  onShoppinglistClick() {
    this.menuClicked.emit('ShoppingList');
  }
}
