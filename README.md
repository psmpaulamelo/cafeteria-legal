# ☕ Cafeteria Legal

Sistema Full Stack para gerenciamento e personalização de bebidas, desenvolvido com foco em qualidade de software, arquitetura em camadas e testes automatizados.

O projeto simula uma cafeteria digital, permitindo a criação de bebidas personalizadas, gerenciamento do carrinho, fluxo de pagamento e acompanhamento do pedido.

---

# Arquitetura

O projeto está organizado em um monorepo contendo:

```
cafeteria-legal
│
├── backend
│
└── frontend
```

### Backend

- NestJS
- Prisma ORM
- PostgreSQL
- Swagger
- DTOs e validações
- Arquitetura em camadas

### Frontend

- Next.js
- TypeScript
- Context API
- Tailwind CSS
- Componentização

---

# Tecnologias Utilizadas

## Backend

- NestJS
- Prisma
- PostgreSQL
- Swagger
- Class Validator
- TypeScript

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Ferramentas

- Git
- GitHub
- VSCode
- Postman
- Codex (OpenAI)
- ChatGPT

---

# Funcionalidades

### Cardápio de bebidas

- Listagem de bebidas
- Seleção de tamanho
- Tipo de consumo
- Adição ao carrinho

### Bebidas personalizadas

- Seleção de base
- Escolha de ingredientes adicionais
- Geração automática do nome da bebida
- Cálculo do valor total

### Carrinho

- Adicionar itens
- Alterar quantidade
- Remover produtos
- Limpar carrinho

### Pagamento

- Cartão de crédito
- Cartão de débito
- PIX
- Dinheiro

### Pedido

- Resumo do pedido
- Número do pedido
- Tempo estimado de preparo

---

# Estrutura do Projeto

```
backend/
├── prisma
├── src
│   ├── custom-drinks
│   ├── drinks
│   ├── ingredients
│   ├── recipes
│   └── prisma
└── .env.example

frontend/
├── app
├── components
├── constants
├── context
├── public
├── services
└── types
```

---

# Variáveis de Ambiente

O arquivo `.env` não é versionado.

Utilize o arquivo:

```
backend/.env.example
```

para criar seu ambiente local.

---

# Executando o Backend

Entrar na pasta:

```bash
cd backend
```

Instalar dependências:

```bash
npm install
```

Executar migrations:

```bash
npx prisma migrate deploy
```

Executar aplicação:

```bash
npm run start:dev
```

Swagger:

```
http://localhost:3001/api
```

---

# Executando o Frontend

Entrar na pasta:

```bash
cd frontend
```

Instalar dependências:

```bash
npm install
```

Executar aplicação:

```bash
npm run dev
```

Aplicação:

```
http://localhost:3000
```

---


# Inteligência Artificial

Durante o desenvolvimento foram utilizadas ferramentas de IA para apoio à engenharia de software e produtividade:

- ChatGPT
- Codex (OpenAI)

As ferramentas foram utilizadas para suporte em:

- Arquitetura
- Refatoração
- Componentização
- Documentação
- Geração de código
- Estratégia de testes

---

# Autor

Paula Melo

QA Engineer | Quality Assurance

LinkedIn:

https://www.linkedin.com/in/paulasmelo/

GitHub:

https://github.com/psmpaulamelo