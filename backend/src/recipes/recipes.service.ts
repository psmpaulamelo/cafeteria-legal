import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipesService {
  identify(data: CreateRecipeDto) {
    const ingredients = data.ingredients.sort();

    if (
      JSON.stringify(ingredients) ===
      JSON.stringify(['ESPRESSO', 'LEITE'].sort())
    ) {
      return {
        recipe: 'Latte',
      };
    }

    if (
      JSON.stringify(ingredients) ===
      JSON.stringify(['ESPRESSO', 'CHOCOLATE', 'LEITE'].sort())
    ) {
      return {
        recipe: 'Mocha',
      };
    }

    if (
      JSON.stringify(ingredients) ===
      JSON.stringify(['ESPRESSO', 'ESPUMA', 'LEITE'].sort())
    ) {
      return {
        recipe: 'Cappuccino',
      };
    }

    return {
      recipe: 'Receita não identificada',
    };
  }
}
