import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { DrinksModule } from './drinks/drinks.module';
import { RecipesModule } from './recipes/recipes.module';
import { CustomDrinksModule } from './custom-drinks/custom-drink.module';

@Module({
  imports: [
    PrismaModule,
    IngredientsModule,
    DrinksModule,
    RecipesModule,
    CustomDrinksModule,
  ],
})
export class AppModule {}
