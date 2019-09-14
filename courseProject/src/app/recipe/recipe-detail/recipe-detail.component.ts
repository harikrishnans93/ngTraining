import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    // this.recipe = this.recipeService.getRecipe(id);
    this.route.params
      .subscribe((params: Params) => this.recipe = this.recipeService.getRecipe(+params.id));
  }
  onAddtoShoppingLIst() {
    // this.recipeService.addToShoppingList(this.recipeClicked.ingredients);
  }
  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
