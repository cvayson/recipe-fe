import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  getRecipe(ingredients:string):Observable<string>
  {
    const params = new HttpParams().set('ingredients', ingredients);

    const options = {
      params,
      responseType: 'text' as 'json'
    };
    return this.http.get<string>("http://localhost:8080/recipe/get"+"?"+params.toString(),options);
  }
}
