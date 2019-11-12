import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = !this.id === null;
    }
    );
  }
  onAddClick(form: NgForm) {
    const recs: Recipe = new Recipe(0,form.value.name, form.value.description,form.value.imgUrl,[]);
    console.log(form.value);
    if (this.editMode) {
      this.recipeService.addRecipe(recs);
    } else {
      this.recipeService.addRecipe(recs);
    }
    this.editMode = false;
    form.reset();
  }
  onDelete(form: NgForm) {

  }
  onClear(form: NgForm) {

  }
}
