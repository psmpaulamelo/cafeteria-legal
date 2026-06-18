import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateDrinkDto } from './dto/create-drinks.dto';
import { UpdateDrinkDto } from './dto/update-drinks.dto';

@Injectable()
export class DrinksService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.drink.findMany();
  }

  create(data: CreateDrinkDto) {
    return this.prisma.drink.create({
      data,
    });
  }

  async findOne(id: number) {
    const drink = await this.prisma.drink.findUnique({
      where: { id },
    });

    if (!drink) {
      throw new NotFoundException(`Bebida ${id} não encontrada`);
    }

    return drink;
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.drink.delete({
      where: { id },
    });
  }

  async update(id: number, data: UpdateDrinkDto) {
    await this.findOne(id);

    return this.prisma.drink.update({
      where: { id },
      data,
    });
  }
}
