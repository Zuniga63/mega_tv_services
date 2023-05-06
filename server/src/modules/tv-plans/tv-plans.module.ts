import { Module } from '@nestjs/common';
import { TvPlansService } from './tv-plans.service';
import { TvPlansController } from './tv-plans.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TvPlansController],
  providers: [TvPlansService, PrismaService],
})
export class TvPlansModule {}
