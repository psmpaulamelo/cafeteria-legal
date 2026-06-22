import {
  ConsumptionType,
  PaymentMethod,
} from '@prisma/client';

import {
  IsArray,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  Min,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';

import { Type } from 'class-transformer';

import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty({
    example: 1,
  })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({
    example: 12.9,
  })
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiPropertyOptional({
    example: 1,
  })
  @IsOptional()
  @IsInt()
  drinkId?: number;

  @ApiPropertyOptional({
    example: 1,
  })
  @IsOptional()
  @IsInt()
  customDrinkId?: number;
}

export class CreateOrderDto {
  @ApiPropertyOptional({
    example: 1,
  })
  @IsOptional()
  @IsInt()
  customerId?: number;

  @ApiProperty({
    enum: PaymentMethod,
    example: PaymentMethod.pix,
  })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty({
    enum: ConsumptionType,
    example: ConsumptionType.local,
  })
  @IsEnum(ConsumptionType)
  consumptionType: ConsumptionType;

  @ApiProperty({
    type: [CreateOrderItemDto],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];
}