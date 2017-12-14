import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('recipe1Name', 'recipe1Desc', 'https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
