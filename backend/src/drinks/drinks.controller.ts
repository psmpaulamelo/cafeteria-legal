import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { DrinksService } from './drinks.service';
import { CreateDrinkDto } from './dto/create-drinks.dto';
import { UpdateDrinkDto } from './dto/update-drinks.dto';
import { SwaggerResponses } from '../common/swagger/api-responses';

@ApiTags('Drinks')
@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar bebidas do cardápio',
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  findAll() {
    return this.drinksService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar bebida por ID',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID da bebida',
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.drinksService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar bebida',
  })
  @ApiBody({
    type: CreateDrinkDto,
  })
  @ApiResponse(SwaggerResponses.CREATED)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.FORBIDDEN)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  create(@Body() data: CreateDrinkDto) {
    return this.drinksService.create(data);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar bebida',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID da bebida',
  })
  @ApiBody({
    type: UpdateDrinkDto,
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.FORBIDDEN)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateDrinkDto) {
    return this.drinksService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Excluir bebida',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID da bebida',
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.FORBIDDEN)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.drinksService.remove(id);
  }
}
