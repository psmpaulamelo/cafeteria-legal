import { IsArray, ArrayMinSize, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeDto {
  @ApiProperty({
    example: ['Chocolate', 'Canela'],
  })
  @IsArray()
  @ArrayMinSize(2)
  @IsString({ each: true })
  ingredients!: string[];
}
