import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsModule } from './modules/buildings/buildings.module';
import { TvPlansModule } from './modules/tv-plans/tv-plans.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { CustomersModule } from './modules/customers/customers.module';

@Module({
  imports: [BuildingsModule, TvPlansModule, SubscriptionsModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
