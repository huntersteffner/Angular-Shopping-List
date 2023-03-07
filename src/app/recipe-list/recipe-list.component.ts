import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://dynl.mktgcdn.com/p/hxJgH_gPUGuHQPqGidqaJNMl9pbQqLO7esOuNzfyw8o/496x344.png')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
