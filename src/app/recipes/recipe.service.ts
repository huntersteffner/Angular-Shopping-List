import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>()

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

      constructor(private slService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes
        this.recipesChanged.next(this.recipes.slice())
      }

      getRecipes() {
        return this.recipes.slice()
      }

      getRecipe(index: number) {
        return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index,1)
        this.recipesChanged.next(this.recipes.slice())
      }
}