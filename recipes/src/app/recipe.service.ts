import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url = environment.apiurl
  
  constructor(private http: HttpClient) { }

  getRecipe():Observable<any>{
    return this.http.get(this.url + '/v1/recipes')
  }

  getRecipeById(id):Observable<any>{
    return this.http.get(this.url+ '/v1/recipe/' + id)
  }

  getRandomRecipe():Observable<any>{
    return this.http.get(this.url + '/v1/get/random/recipe')
  }
}
