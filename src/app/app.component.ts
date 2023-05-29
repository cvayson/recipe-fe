import { Component } from '@angular/core';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  constructor(private service:RecipeService){}

  recipe="";
  ingredients:string="";
  public getRecipe()
  {
    this.service.getRecipe(this.ingredients).subscribe(data=>{
      console.log(data);
      this.recipe=data;
    })
  }

}
