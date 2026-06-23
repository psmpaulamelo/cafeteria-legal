# ☕ Cafeteria Legal

<div align="center">

Sistema Full Stack desenvolvido para reproduzir a experiência de uma cafeteria digital moderna, permitindo pedidos, bebidas personalizadas e gerenciamento completo do fluxo de compra.

<br>

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![NestJS](https://img.shields.io/badge/NestJS-E0234E)
![Prisma](https://img.shields.io/badge/Prisma-2D3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D)
![Vercel](https://img.shields.io/badge/Vercel-black)
![Render](https://img.shields.io/badge/Render-46E3B7)

<br>

### 🚀 Aplicação em Produção

**Frontend:** https://cafeteria-legal.vercel.app/

**Backend:** https://cafeteria-legal-api.onrender.com

**Swagger:** https://cafeteria-legal-api.onrender.com/api

</div>

---

# 📖 Sobre o Projeto

O **Cafeteria Legal** é uma aplicação Full Stack desenvolvida para simular o funcionamento de uma cafeteria digital, oferecendo uma experiência completa desde a escolha da bebida até a finalização do pedido.

A aplicação foi construída utilizando uma arquitetura moderna baseada em **Next.js**, **NestJS**, **Prisma** e **PostgreSQL**, com frontend, backend e banco de dados hospedados em ambientes distintos.

## ✨ Funcionalidades

* ☕ Catálogo de bebidas
* 🎨 Criação de bebidas personalizadas
* 🛒 Carrinho de compras
* 📦 Gerenciamento de pedidos
* 💳 Fluxo completo de pagamento
* 📚 API REST documentada com Swagger
* 💾 Persistência dos dados em PostgreSQL
* ☁️ Deploy em nuvem

---

# 📸 Telas

## Home

![Home](image.png)

## Bebidas Personalizadas

![Custom Drinks](image-1.png)

## Carrinho

![Cart](image-2.png)

## Pagamento

![Payment](image-3.png)

## Pedido Realizado

![Success](image-4.png)

---

# 🏗 Arquitetura

```text
Frontend (Next.js)
        │
        ▼
Backend API (NestJS)
        │
        ▼
Prisma ORM
        │
        ▼
PostgreSQL (Supabase)
```

---

# 🛠 Tecnologias

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

## Backend

* NestJS
* Prisma ORM
* PostgreSQL
* Swagger

## Infraestrutura

* Vercel
* Render
* Supabase

## Ferramentas

* Git
* GitHub
* npm
* Concurrently

---

# 📂 Estrutura do Projeto

```bash
cafeteria-legal
│
├── frontend
│
├── backend
│
├── package.json
│
└── README.md
```

---

# 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/psmpaulamelo/cafeteria-legal.git
```

Acesse a pasta do projeto:

```bash
cd cafeteria-legal
```

Instale as dependências:

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

### Dependências da raiz

```bash
cd ..
npm install
```

---

# ▶️ Executando Localmente

Com apenas um comando:

```bash
npm run dev
```

### Frontend

```text
http://localhost:3000
```

### Backend

```text
http://localhost:3001
```

### Swagger

```text
http://localhost:3001/api
```

---

# 🔄 Fluxo da Aplicação

```text
Home
 ↓
Catálogo
 ↓
Bebidas Personalizadas
 ↓
Carrinho
 ↓
Pedidos
 ↓
Pagamento
 ↓
Pedido Realizado
```

---

# ☕ Fluxo de Compra

### Escolha da bebida

* Bebidas tradicionais
* Bebidas personalizadas

### Carrinho

* Visualização dos itens
* Alteração de quantidade
* Remoção de produtos
* Cálculo do valor total

### Pagamento

Métodos disponíveis:

* Crédito
* Débito
* PIX

### Finalização

Após a confirmação do pagamento, o pedido é enviado para a API e armazenado no banco de dados.

---

# 📚 API

### Swagger

```text
https://cafeteria-legal-api.onrender.com/api
```

## Principais Endpoints

### Drinks

```http
GET /api/drinks
POST /api/drinks
PATCH /api/drinks/:id
DELETE /api/drinks/:id
```

### Ingredients

```http
GET /api/ingredients
POST /api/ingredients
PATCH /api/ingredients/:id
DELETE /api/ingredients/:id
```

### Custom Drinks

```http
POST /api/custom-drinks/generate
GET /api/custom-drinks
DELETE /api/custom-drinks/:id
```

### Orders

```http
POST /api/orders
GET /api/orders
GET /api/orders/:id
PATCH /api/orders/:id/status
DELETE /api/orders/:id
```

---

# ☁️ Deploy

| Serviço        | Plataforma            |
| -------------- | --------------------- |
| Frontend       | Vercel                |
| Backend        | Render                |
| Banco de Dados | PostgreSQL (Supabase) |
| Documentação   | Swagger               |

---

# 👩‍💻 Desenvolvido por

## Paula Melo

**QA Engineer | Software Quality | Test Automation**

🔗 LinkedIn
https://www.linkedin.com/in/paulasmelo/

💻 GitHub
https://github.com/psmpaulamelo

---

⭐ Se este projeto foi útil, considere deixar uma estrela no repositório.
