/*
  Warnings:

  - You are about to drop the column `consumption` on the `Drink` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Drink` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Drink" DROP COLUMN "consumption",
DROP COLUMN "size";
