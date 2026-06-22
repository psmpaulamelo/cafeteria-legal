import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
  ) {}

  // Criar pedido
  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }

  // Listar todos
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  // Buscar por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  // Alterar status
  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateOrderStatusDto,
  ) {
    return this.ordersService.updateStatus(+id, dto);
  }

  // Excluir pedido
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }

  // Pedidos recebidos
  @Get('status/received')
  findReceived() {
    return this.ordersService.findByStatus('received');
  }

  // Em preparação
  @Get('status/preparing')
  findPreparing() {
    return this.ordersService.findByStatus('preparing');
  }

  // Prontos
  @Get('status/ready')
  findReady() {
    return this.ordersService.findByStatus('ready');
  }

  // Entregues
  @Get('status/delivered')
  findDelivered() {
    return this.ordersService.findByStatus('delivered');
  }

  // Cancelados
  @Get('status/cancelled')
  findCancelled() {
    return this.ordersService.findByStatus('cancelled');
  }
}