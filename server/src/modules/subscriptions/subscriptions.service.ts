import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SubscriptionsService {
  constructor(private prisma: PrismaService) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      aptNumber,
      buildingId,
      tvPlanId,
    } = createSubscriptionDto;

    try {
      await this.prisma.customer.create({
        data: {
          firstName,
          lastName,
          email,
          phoneNumber,
          subscritions: {
            create: {
              building: {
                connect: { id: buildingId },
              },
              tvPlan: {
                connect: { id: tvPlanId },
              },
              aptNumber,
              subscriptionDate: new Date(),
            },
          },
        },
      });

      return { result: 'Ok' };
    } catch (error) {
      return { result: 'Error' };
    }
  }

  findAll() {
    return this.prisma.subscription.findMany({
      include: { customer: true, building: true, tvPlan: true },
    });
  }

  async remove(id: number) {
    const subscription = await this.prisma.subscription.delete({
      where: { id },
    });

    return subscription;
  }
}
