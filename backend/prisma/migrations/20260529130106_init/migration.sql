-- CreateEnum
CREATE TYPE "IngredientType" AS ENUM ('base', 'additional');

-- CreateEnum
CREATE TYPE "DrinkSize" AS ENUM ('small', 'medium', 'large');

-- CreateEnum
CREATE TYPE "ConsumptionType" AS ENUM ('local', 'takeaway');

-- CreateTable
CREATE TABLE "Drink" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Drink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "IngredientType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomDrink" (
    "id" SERIAL NOT NULL,
    "generatedName" TEXT NOT NULL,
    "ingredients" TEXT[],
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "size" "DrinkSize" NOT NULL,
    "consumption" "ConsumptionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomDrink_pkey" PRIMARY KEY ("id")
);
