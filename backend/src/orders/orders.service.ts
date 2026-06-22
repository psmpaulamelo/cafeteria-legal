import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { OrderStatus } from '@prisma/client';
@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const totalPrice = createOrderDto.items.reduce(
      (total, item) =>
        total + item.quantity * item.unitPrice,
      0,
    );

    return this.prisma.order.create({
      data: {
        customerId: createOrderDto.customerId,

        paymentMethod: createOrderDto.paymentMethod,

        consumptionType:
          createOrderDto.consumptionType,

        status: OrderStatus.received,

        orderNumber: `PED-${Date.now()}`,

        totalPrice,

        items: {
          create: createOrderDto.items.map(
            (item) => ({
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              drinkId: item.drinkId,
              customDrinkId: item.customDrinkId,
            }),
          ),
        },
      },

      include: {
        items: {
          include: {
            drink: true,
            customDrink: true,
          },
        },
        customer: true,
      },
    });
  }


  async findAll() {
    return this.prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  async findByStatus(status: OrderStatus) {
    return this.prisma.order.findMany({
      where: {
        status,
      },
      include: {
        items: {
          include: {
            drink: true,
            customDrink: true,
          },
        },
        customer: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            drink: true,
            customDrink: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Pedido não encontrado');
    }

    return order;
  }

  async updateStatus(
    id: number,
    updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.prisma.order.update({
      where: { id },
      data: {
        status: updateOrderStatusDto.status,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.order.delete({
      where: {
        id,
      },
    });
  }
}