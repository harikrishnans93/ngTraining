import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { NoRecipeComponent } from './recipe/recipe-detail/no-recipe/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { AuthServiceComponent } from './auth-service/auth-service.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    {
        path: 'recipe', component: RecipeComponent, children: [
            { path: '', component: NoRecipeComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shoppingList', component: ShoppinglistComponent },
    { path: 'authenticate', component: AuthServiceComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}
)
export class AppRoutingModule { }
