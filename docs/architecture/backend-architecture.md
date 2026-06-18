# Arquitetura Backend

## Stack

* NestJS
* TypeScript
* Prisma ORM
* PostgreSQL

## Estrutura

src/

* custom-drinks
* drinks
* ingredients
* recipes
* prisma
* common

## Responsabilidades

### Drinks

Responsável pela gestão das bebidas disponíveis no catálogo.

### Ingredients

Responsável pela gestão dos ingredientes utilizados nas receitas.

### Recipes

Responsável pela composição das receitas cadastradas.

### Custom Drinks

Responsável pela geração dinâmica de bebidas personalizadas.

### Prisma

Camada responsável pela comunicação com o banco de dados.

## Documentação da API

Disponível através do Swagger.

## Banco de Dados

PostgreSQL.

ORM utilizado:

Prisma ORM.
