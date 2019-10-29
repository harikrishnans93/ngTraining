import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[]=[];
  recipesub = new Subscription();
  // tslint:disable-next-line: max-line-length
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private datasService: DataStorageService) {

    this.recipesub = this.recipeService.recipiesAdded.subscribe((recipies: Recipe[]) => {
      console.log(this.recipes, 'REcipesssscon');
      this.recipes = recipies;
    });
    //datasService.loadRecipeData();
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipies();
    console.log('init');
    this.recipesub = this.recipeService.recipiesAdded.subscribe((recipies: Recipe[]) => {
      console.log(this.recipes, 'REcipessss');
      this.recipes = recipies;
    });
    //this.datasService.loadRecipeData();
  }
  ngOnDestroy() {
    this.recipesub.unsubscribe();
  }
  addRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  LoadRecipes() {
    this.recipesub = this.recipeService.recipiesAdded.subscribe((recipies: Recipe[]) => {
      this.recipes = recipies;
    });
    this.datasService.loadRecipeData();
    console.log(this.recipes);
  }
}
