import { PrismaClient } from '@prisma/client';
import buildings from './moked/building.json';
import plans from './moked/plans.json';

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    plans.map((plan) =>
      prisma.tvPlan.create({
        data: {
          name: plan.name,
          price: plan.price,
        },
      }),
    ),
  );

  await Promise.all(
    buildings.map((building) =>
      prisma.building.create({
        data: {
          name: building.name,
          address: building.address,
          city: building.city,
          state: building.state,
          zipCode: building.postal,
        },
      }),
    ),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
