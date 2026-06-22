import { OrderStatus } from '@prisma/client';

import { IsEnum } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderStatusDto {
  @ApiProperty({
    enum: OrderStatus,
    example: OrderStatus.received,
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}