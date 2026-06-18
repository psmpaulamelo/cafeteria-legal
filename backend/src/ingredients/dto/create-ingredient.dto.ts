import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  IsOptional,
  Min,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
  @ApiProperty({
    example: 'CHANTILLY',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'additional',
    enum: ['base', 'additional'],
  })
  @IsEnum(['base', 'additional'])
  type: 'base' | 'additional';

  @ApiProperty({
    example: 5.5,
  })
  @IsNumber()
  @Min(1)
  price: number;

  @ApiProperty({
    example: true,
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
