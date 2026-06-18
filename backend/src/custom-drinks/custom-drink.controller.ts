import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateCustomDrinkDto } from './dto/create-custom-drink.dto';
import { CustomDrinksService } from './custom-drink.service';
import { SwaggerResponses } from '../common/swagger/api-responses';

@ApiTags('Custom Drinks')
@Controller('custom-drinks')
export class CustomDrinksController {
  constructor(private readonly customDrinksService: CustomDrinksService) {}

  @Post('generate')
  @ApiOperation({
    summary: 'Gerar bebida personalizada',
  })
  @ApiBody({
    type: CreateCustomDrinkDto,
  })
  @ApiResponse(SwaggerResponses.CREATED)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.FORBIDDEN)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  generate(@Body() data: CreateCustomDrinkDto) {
    return this.customDrinksService.generate(data);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar bebidas personalizadas',
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  findAll() {
    return this.customDrinksService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar bebida personalizada por ID',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID da bebida personalizada',
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customDrinksService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remover bebida personalizada',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID da bebida personalizada',
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.FORBIDDEN)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customDrinksService.remove(id);
  }
}
