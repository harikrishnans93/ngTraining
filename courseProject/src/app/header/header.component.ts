import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  usersub: Subscription;
  isAuthenticated = false;
  @Output() menuClicked = new EventEmitter();

  constructor(private dataStorageservice: DataStorageService, private authService: AuthServiceService) { }

  ngOnInit() {
    this.usersub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onRecipeClick() {
    this.menuClicked.emit('Recipe');
  }
  onShoppinglistClick() {
    this.menuClicked.emit('ShoppingList');
  }

  storeData() {
    this.dataStorageservice.storeRecipie();
  }
  fetchData() {
    this.dataStorageservice.fetchRecipe().subscribe(res=>{
      console.log(res);
    });
  }
  onLoggingOut() {

  }

  ngOnDestroy(): void {
    this.usersub.unsubscribe();
  }
}
