import { Test, TestingModule } from '@nestjs/testing';
import { TvPlansController } from './tv-plans.controller';
import { TvPlansService } from './tv-plans.service';

describe('TvPlansController', () => {
  let controller: TvPlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TvPlansController],
      providers: [TvPlansService],
    }).compile();

    controller = module.get<TvPlansController>(TvPlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
