import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interfaces/recipe.interface';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule,ReactiveFormsModule,MatSlideToggleModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
binding: any;
localStorageValue:string|null='';
constructor(readonly recipeService:RecipesService) {}
addRecipeForm = new FormGroup({
  image:new FormControl(' ',[Validators.required,Validators.minLength(3)]),
  name:new FormControl(' ',[Validators.required,Validators.minLength(3)]),
  difficulty:new FormControl(' ',[Validators.required,Validators.minLength(3)]),
  preparationTimeMinutes: new FormControl(0,[Validators.required,Validators.min(0)]),

})
onSubmit(){
  //if(this.addRecipeForm.valid)
//console.log(this.addRecipeForm.value);
 // else console.error('FORM IS NOT VALID');

 const jsonObj={
  "a":12,
  "height":180,
  test:{
    a:'another object',
  },
  array:['1',2,4],
  }

 
 //localStorage.setItem('theme',JSON.stringify(jsonObj));
 //sessionStorage.setItem('theme','light');
 //this.localStorageValue=localStorage.getItem('theme');
 if(this.addRecipeForm.valid){
  this.recipeService.addDbRecipes(this.addRecipeForm.value as Omit<Recipe,'id'>);
 }

}
}

