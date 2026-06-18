import { ApiResponseOptions } from '@nestjs/swagger';

export const SwaggerResponses = {
  OK: {
    status: 200,
    description: 'Operação realizada com sucesso',
  } satisfies ApiResponseOptions,

  CREATED: {
    status: 201,
    description: 'Recurso criado com sucesso',
  } satisfies ApiResponseOptions,

  BAD_REQUEST: {
    status: 400,
    description: 'Dados inválidos enviados na requisição',
  } satisfies ApiResponseOptions,

  FORBIDDEN: {
    status: 403,
    description: 'Acesso negado',
  } satisfies ApiResponseOptions,

  NOT_FOUND: {
    status: 404,
    description: 'Recurso não encontrado',
  } satisfies ApiResponseOptions,

  INTERNAL_ERROR: {
    status: 500,
    description: 'Erro interno do servidor',
  } satisfies ApiResponseOptions,
};
