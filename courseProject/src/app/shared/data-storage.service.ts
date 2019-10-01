import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { take, exhaustMap } from 'rxjs/operators';
import { Recipe } from '../recipe/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService implements OnInit {
    constructor(private http: HttpClient, private recipies: RecipeService, private authService: AuthServiceService) {


    }
    // tslint:disable-next-line: contextual-lifecycle
    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.

    }
    storeRecipie() {
        const rec = this.recipies.getRecipies();
        this.http.put('https://courseproject-86241.firebaseio.com/recipies.json', rec).subscribe(Response => {
            console.log(Response);
        });
    }
    fetchRecipe() {
        return this.authService.user.pipe(take(1), exhaustMap(userdata => {
            return this.http.get<Recipe[]>('https://courseproject-86241.firebaseio.com/recipies.json', {
                params: new HttpParams().set('auth', userdata.token)
            });
        }));
    }

    loadRecipeData() {
        const res = this.recipies.getRecipies();
        if (res.length > 0) {
            return;
        }
       
        this.fetchRecipe().subscribe(ResponseData => {
            console.log(ResponseData);
            this.recipies.addRecipes(ResponseData);
        });
        console.log(this.recipies.getRecipies());
    }
    private handleToken() {
        return this.authService.user.pipe(take(1)).subscribe();
    }
}
