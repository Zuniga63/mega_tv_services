import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TvPlan } from '@prisma/client';

@Injectable()
export class TvPlansService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<TvPlan[]> {
    return this.prisma.tvPlan.findMany();
  }
}
