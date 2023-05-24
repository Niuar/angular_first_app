import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Patatine fritte',
      'The best chips in town bruv aint?',
      'https://cleanfoodcrush.com/wp-content/uploads/2020/06/CleanFoodCrush-Printable-Recipe-Kohlrabi-Fries.jpg',
      [new Ingredient('Mayo', 3), new Ingredient('French Fries', 20)]
    ),

    new Recipe(
      'Hamburger',
      'For the homies, and a burger ;)',
      'https://www.foodaffairs.it/wp-content/uploads/2022/01/hamburger-e-patatine-1-1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2),
        new Ingredient('Veggies', 4),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
