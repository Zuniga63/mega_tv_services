-- CreateTable
CREATE TABLE "Building" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "city" VARCHAR(45) NOT NULL,
    "address" VARCHAR(45) NOT NULL,
    "zipCode" VARCHAR(20) NOT NULL,
    "state" VARCHAR(45) NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(45) NOT NULL,
    "lastName" VARCHAR(45) NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" VARCHAR(20) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TvPlan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "price" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "TvPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER,
    "buildingId" INTEGER NOT NULL,
    "tvPlanId" INTEGER NOT NULL,
    "subscriptionDate" TIMESTAMP(3) NOT NULL,
    "aptNumber" VARCHAR(10),

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_tvPlanId_fkey" FOREIGN KEY ("tvPlanId") REFERENCES "TvPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
