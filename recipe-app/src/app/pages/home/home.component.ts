import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { db } from '../../db/db';


@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
recipes: Recipe[] = [];
dummyRecipes!: Recipe[];
filteredRecipes!:Recipe[];
dbRecipes!:any[];
errorMessage :any='';
searchValue='';
dbSubscription:any;

constructor(private recipeService:RecipesService, private router:Router){}

  ngOnInit(){
    this.recipes=this.recipeService.recipes;
try{
this.recipeService.getAllRecipes().subscribe({
  next:(response) =>{
    console.log(Response);
    //throw new Error('something happened');
    this.dummyRecipes=response.recipes;
    this.filteredRecipes=response.recipes;
  },
  error: (err)=>{
    console.log(err)
    this.errorMessage = err.message;
  },
});
}catch (error:any ){
  this.errorMessage= error;
}
this.dbSubscription=db.subscribeQuery({recipes:{}},(resp)=>{
if(resp.error){
  this.errorMessage=resp.error;
}
if(resp.data){
  this.dbRecipes=resp.data.recipes; console.log(this.dbRecipes)
}
});


}
redirectToAddRecipe(){
  this.router.navigateByUrl('add-recipe');
}

ngOnDestroy(){
  this.dbSubscription();
}
filterValue(){
  this.filteredRecipes=this.dummyRecipes.filter((recipe)=>
  recipe.name.toUpperCase().includes(this.searchValue.toUpperCase()));
}
}


