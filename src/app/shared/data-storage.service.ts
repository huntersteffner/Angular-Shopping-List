import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { RecipeService } from "../recipes/recipe.service"

import { environment } from "src/environments/environment"
import { Recipe } from "../recipes/recipe.model"
import { map } from "rxjs"

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes()
        this.http.put(environment.firebaseAPIUrl + '/recipes.json',recipes)
        .subscribe(response => {
            console.log(response)
        })
    }

    fetchRecipes() {
        this.http.get<Recipe[]>(environment.firebaseAPIUrl + '/recipes.json')
        .pipe(map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []}
            })
        }))
        .subscribe(recipes => {
            this.recipeService.setRecipes(recipes)
        })
    }
}