import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()


    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is a test', 'https://dynl.mktgcdn.com/p/hxJgH_gPUGuHQPqGidqaJNMl9pbQqLO7esOuNzfyw8o/496x344.png'),
        new Recipe('Second Test', 'Yes, it\'s a test','https://dynl.mktgcdn.com/p/hxJgH_gPUGuHQPqGidqaJNMl9pbQqLO7esOuNzfyw8o/496x344.png')
      ]

      getRecipes() {
        return this.recipes.slice()
      }
}