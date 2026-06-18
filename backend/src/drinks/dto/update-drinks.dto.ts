// update-drink.dto.ts

import { PartialType } from '@nestjs/swagger';
import { CreateDrinkDto } from './create-drinks.dto';

export class UpdateDrinkDto extends PartialType(CreateDrinkDto) {}
