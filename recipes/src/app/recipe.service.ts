import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipe():Observable<any>{
    return this.http.get('http://localhost:8000/v1/recipes')
  }

  getRecipeById(id):Observable<any>{
    return this.http.get('http://localhost:8000/v1/recipe/' + id)
  }
}
