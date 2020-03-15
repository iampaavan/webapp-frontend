import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: object;
  ingredients = [];
  steps = []
  present = false
  error = false

  constructor(private service: RecipeService) {

  }

  ngOnInit() {
    this.getRecipe()
  }

  getRecipe(){
    this.service.getRecipe().subscribe(res => {
      this.present = true
      this.error = false
      this.recipe = res;
      this.ingredients = this.recipe['ingredients']
      this.steps = this.recipe['steps']
      console.log(this.recipe)
    },
      error1 => {
      this.present = false
      this.error = true
      })
  }

  onclickbutton(){
    document.getElementById('recipeid').className="show"
    console.log("hello")
  }

  getRecipeById(){
    var id = (<HTMLInputElement>document.getElementById('id')).value
    this.service.getRecipeById(id).subscribe(res => {
      this.present = true
      this.error = false
      this.recipe = res
      this.ingredients = this.recipe['ingredients']
      this.steps = this.recipe['steps']
    },
      error1 => {
      this.present = false
      this.error = true
      })
    document.getElementById('recipeid').className='hide'
  }

  getRandomRecipe(){
    this.service.getRandomRecipe().subscribe(res => {
      this.present = true
      this.error = false
      this.recipe = res
      this.ingredients = this.recipe['ingredients']
      this.steps = this.recipe['steps']
    },
      error1 => {
      this.present = false
      this.error = true
      })
  }

}
