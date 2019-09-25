import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService implements OnInit {
    constructor(private http: HttpClient, private recipies: RecipeService) {


    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
    storeRecipie() {
        const rec = this.recipies.getRecipies();
        this.http.put('https://courseproject-86241.firebaseio.com/recipies.json', rec).subscribe(Response => {
            console.log(Response);
        });
    }
    fetchRecipe(){
        this.http.get('https://courseproject-86241.firebaseio.com/recipies.json').subscribe(Response=>{
            console.log(Response);
        })
    }
}