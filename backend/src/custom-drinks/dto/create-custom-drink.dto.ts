import { IsArray, ArrayMinSize, IsString, IsEnum } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomDrinkDto {
  @ApiProperty({
    example: ['Chocolate', 'Canela'],
  })
  @IsArray()
  @ArrayMinSize(2)
  @IsString({ each: true })
  ingredients: string[];

  @ApiProperty({
    example: 'medium',
    enum: ['small', 'medium', 'large'],
  })
  @IsEnum(['small', 'medium', 'large'])
  size: 'small' | 'medium' | 'large';

  @ApiProperty({
    example: 'local',
    enum: ['local', 'takeaway'],
  })
  @IsEnum(['local', 'takeaway'])
  consumption: 'local' | 'takeaway';
}
