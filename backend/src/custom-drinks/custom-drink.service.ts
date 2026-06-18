import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomDrinkDto } from './dto/create-custom-drink.dto';

@Injectable()
export class CustomDrinksService {
  constructor(private prisma: PrismaService) {}

  private generateName(ingredients: string[]) {
    const combinations: Record<string, string> = {
      'CHOCOLATE-CANELA': 'Choconela',
      'ESPRESSO-LEITE': 'Lexpresso',
      'BAUNILHA-CANELA': 'Baunela',
      'CHOCOLATE-ESPUMA': 'Chocopuma',
      'CARAMELO-LEITE': 'Caraleite',
    };

    return (
      combinations[ingredients.join('-')] || `Misturadão ${ingredients[0]}`
    );
  }

  async generate(data: CreateCustomDrinkDto) {
    const normalizedIngredients = data.ingredients.map((ingredient) =>
      ingredient.toUpperCase(),
    );

    const ingredientsData = await this.prisma.ingredient.findMany({
      where: {
        name: {
          in: normalizedIngredients,
        },
      },
    });

    if (ingredientsData.length !== normalizedIngredients.length) {
      throw new NotFoundException(
        'Um ou mais ingredientes não foram encontrados',
      );
    }

    const totalPrice = ingredientsData.reduce(
      (acc, ingredient) => acc + ingredient.price,
      0,
    );

    const generatedName = this.generateName(normalizedIngredients);

    return this.prisma.customDrink.create({
      data: {
        generatedName,
        ingredients: normalizedIngredients,
        totalPrice,
        size: data.size,
        consumption: data.consumption,
      },
    });
  }

  async findAll() {
    return this.prisma.customDrink.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const customDrink = await this.prisma.customDrink.findUnique({
      where: { id },
    });

    if (!customDrink) {
      throw new NotFoundException(`Bebida personalizada ${id} não encontrada`);
    }

    return customDrink;
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.customDrink.delete({
      where: { id },
    });
  }
}
