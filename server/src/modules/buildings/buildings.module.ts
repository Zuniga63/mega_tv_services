import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BuildingsController],
  providers: [BuildingsService, PrismaService],
})
export class BuildingsModule {}
