import { Body, Controller, Post } from '@nestjs/common';

import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipesService } from './recipes.service';
import { SwaggerResponses } from '../common/swagger/api-responses';

@ApiTags('Recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post('identify')
  @ApiOperation({
    summary: 'Identificar receita a partir dos ingredientes',
  })
  @ApiBody({
    type: CreateRecipeDto,
  })
  @ApiResponse(SwaggerResponses.OK)
  @ApiResponse(SwaggerResponses.BAD_REQUEST)
  @ApiResponse(SwaggerResponses.INTERNAL_ERROR)
  identify(@Body() data: CreateRecipeDto) {
    return this.recipesService.identify(data);
  }
}
