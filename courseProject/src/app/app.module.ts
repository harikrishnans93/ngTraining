import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NoRecipeComponent } from './recipe/recipe-detail/no-recipe/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

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
    DropdownDirective,
    NoRecipeComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
