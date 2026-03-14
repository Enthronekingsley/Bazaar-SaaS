/*
  Warnings:

  - You are about to drop the column `cart` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "IdType" AS ENUM ('NATIONAL_ID', 'INTERNATIONAL_PASSPORT');

-- CreateEnum
CREATE TYPE "IdStatus" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED');

-- CreateEnum
CREATE TYPE "KycStatus" AS ENUM ('UNVERIFIED', 'PENDING', 'VERIFIED');

-- CreateEnum
CREATE TYPE "BusinessType" AS ENUM ('INDIVIDUAL', 'COMPANY', 'PARTNERSHIP');

-- CreateEnum
CREATE TYPE "StoreStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cart",
DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "kycStatus" "KycStatus" NOT NULL DEFAULT 'UNVERIFIED',
ALTER COLUMN "image" DROP NOT NULL;

-- CreateTable
CREATE TABLE "MeansOfId" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "IdType" NOT NULL,
    "idNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "middleName" TEXT,
    "status" "IdStatus" NOT NULL DEFAULT 'PENDING',
    "imageUrl" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MeansOfId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" JSONB NOT NULL,
    "businessType" "BusinessType" NOT NULL,
    "registrationNo" TEXT,
    "taxId" TEXT,
    "status" "StoreStatus" NOT NULL DEFAULT 'PENDING',
    "reason" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "subdomain" TEXT,
    "customDomain" TEXT,
    "logo" TEXT NOT NULL,
    "coverImage" TEXT,
    "favicon" TEXT,
    "themeColor" TEXT,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MeansOfId_userId_key" ON "MeansOfId"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Store_slug_key" ON "Store"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Store_userId_key" ON "Store"("userId");

-- AddForeignKey
ALTER TABLE "MeansOfId" ADD CONSTRAINT "MeansOfId_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
