import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesub = new Subscription();
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.recipes = this.recipeService.getRecipies();
    this.recipesub = this.recipeService.recipiesAdded.subscribe(recipies => {
      console.log(this.recipes);
      this.recipes = recipies;
    });
  }
  ngOnDestroy() {
    this.recipesub.unsubscribe();
  }
  addRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
