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

import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { SwaggerResponses } from '../common/swagger/api-responses';

@ApiTags('Ingredients')
@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar ingredientes',
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  findAll() {
    return this.ingredientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar ingrediente por ID',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID do ingrediente',
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientsService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar ingrediente',
  })
  @ApiBody({
    type: CreateIngredientDto,
  })
  @ApiResponse(SwaggerResponses.CREATED)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.FORBIDDEN)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  create(@Body() data: CreateIngredientDto) {
    return this.ingredientsService.create(data);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar ingrediente',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID do ingrediente',
  })
  @ApiBody({
    type: UpdateIngredientDto,
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.FORBIDDEN)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateIngredientDto,
  ) {
    return this.ingredientsService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Excluir ingrediente',
  })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID do ingrediente',
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.FORBIDDEN)
  @ApiResponse(SwaggerResponses.NOT_FOUND)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientsService.remove(id);
  }
}
