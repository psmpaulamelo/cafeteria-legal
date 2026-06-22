import { Module } from '@nestjs/common';


import { IngredientsModule } from './ingredients/ingredients.module';
import { DrinksModule } from './drinks/drinks.module';
import { RecipesModule } from './recipes/recipes.module';
import { CustomDrinksModule } from './custom-drinks/custom-drink.module';
import { OrdersModule } from './orders/orders.module';
@Module({
  imports: [
    IngredientsModule,
    DrinksModule,
    RecipesModule,
    CustomDrinksModule,
    OrdersModule, // <- adicionar aqui
  ],
})
export class AppModule {}