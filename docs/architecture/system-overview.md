# Visão Geral do Sistema

## Objetivo

O Cafeteria Legal é uma aplicação web desenvolvida para simular uma plataforma de pedidos em uma cafeteria digital. O sistema permite consultar bebidas, montar receitas personalizadas, adicionar produtos ao carrinho, realizar pagamentos e acompanhar pedidos.

O projeto foi concebido como um ambiente de estudo e evolução contínua, com foco em boas práticas de arquitetura, qualidade de software e automação de testes.

## Arquitetura

O sistema é dividido em dois módulos principais:

### Frontend

Aplicação web construída com Next.js e TypeScript.

Responsável por:

* Interface do usuário.
* Navegação entre páginas.
* Gestão do carrinho.
* Integração com APIs do backend.

### Backend

API REST construída com NestJS e Prisma.

Responsável por:

* Regras de negócio.
* Gestão de bebidas.
* Gestão de ingredientes.
* Geração de bebidas personalizadas.
* Persistência em banco PostgreSQL.

## Banco de Dados

PostgreSQL.

A camada de acesso aos dados é realizada através do Prisma ORM.

## Principais Funcionalidades

* Consulta de bebidas.
* Personalização de receitas.
* Carrinho de compras.
* Fluxo de pagamento.
* Confirmação de pedido.
* Geração dinâmica de nomes para bebidas personalizadas.

## Tecnologias Utilizadas

Frontend:

* Next.js
* React
* TypeScript
* TailwindCSS

Backend:

* NestJS
* Prisma ORM
* PostgreSQL

Ferramentas:

* Git
* GitHub
* Swagger
* VSCode
* OpenAI Codex para apoio na geração e refatoração de código
