-- AlterTable
ALTER TABLE "Drink" ADD COLUMN     "consumption" "ConsumptionType",
ADD COLUMN     "ingredients" TEXT[],
ADD COLUMN     "size" "DrinkSize";
