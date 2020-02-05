import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe = {};
  ingredients = [];
  steps = []

  constructor(private service: RecipeService) {

  }

  ngOnInit() {
    this.getRecipe()
  }

  getRecipe(){
    this.service.getRecipe().subscribe(res => {
      this.recipe = res;
      this.ingredients = this.recipe['ingredients']
      this.steps = this.recipe['steps']
      console.log(this.recipe)
    })
  }
  gethello(){
    console.log("hello")
  }
}
