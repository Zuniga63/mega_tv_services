import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsModule } from './modules/buildings/buildings.module';
import { TvPlansModule } from './modules/tv-plans/tv-plans.module';

@Module({
  imports: [BuildingsModule, TvPlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
