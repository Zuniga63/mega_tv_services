import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Building } from '@prisma/client';

@Injectable()
export class BuildingsService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Building[]> {
    return this.prisma.building.findMany({
      include: { subscritions: { include: { tvPlan: true } } },
    });
  }
}
