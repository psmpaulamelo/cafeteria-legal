import { IsArray, IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateDrinkDto {
  @ApiProperty({
    example: 'Latte',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Café espresso com leite cremoso',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: '/drinks/latte.png',
  })
  @IsString()
  image: string;

  @ApiProperty({
    example: 14,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: ['Espresso', 'Leite'],
  })
  @IsArray()
  ingredients: string[];
}
