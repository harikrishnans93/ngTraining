import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShopinglistEditComponent } from './shoppinglist/shopinglist-edit/shopinglist-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppinglistService } from './shoppinglist/shoppinglist.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    RecipeComponent,
    HeaderComponent,
    FooterComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopinglistEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
