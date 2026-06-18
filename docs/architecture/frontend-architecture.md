# Arquitetura Frontend

## Stack

* Next.js
* React
* TypeScript
* TailwindCSS

## Estrutura

app/

components/

context/

services/

hooks/

types/

constants/

public/

## Contextos

### CartContext

Responsável pelo gerenciamento global do carrinho de compras.

## Services

Centralizam as chamadas para a API do backend.

### drinks.service

Consulta das bebidas.

### ingredients.service

Consulta dos ingredientes.

### recipes.service

Consulta das receitas.

### custom-drinks.service

Geração das bebidas personalizadas.

## Páginas Principais

### Home

Catálogo principal.

### Drinks

Listagem de bebidas.

### Custom Drinks

Montagem de bebidas personalizadas.

### Orders

Resumo do pedido.

### Payment

Fluxo de pagamento.

### Success

Confirmação do pedido.

## Assets

As imagens dos produtos ficam centralizadas em public/assets.
