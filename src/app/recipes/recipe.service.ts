import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()


    private recipes: Recipe[] = [
        new Recipe('Pizza', 'Pepperoni', 'https://dynl.mktgcdn.com/p/hxJgH_gPUGuHQPqGidqaJNMl9pbQqLO7esOuNzfyw8o/496x344.png',[
            new Ingredient('Pepperoni',30),
            new Ingredient('Dough',2)
        ]),
        new Recipe('Taco', 'Orale','https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg',[
            new Ingredient('Tortilla',1),
            new Ingredient('Carnitas',5),
            new Ingredient('Crema',3)

        ])
      ]

      getRecipes() {
        return this.recipes.slice()
      }
}