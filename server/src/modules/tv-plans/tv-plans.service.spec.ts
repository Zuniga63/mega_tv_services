import { Test, TestingModule } from '@nestjs/testing';
import { TvPlansService } from './tv-plans.service';

describe('TvPlansService', () => {
  let service: TvPlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TvPlansService],
    }).compile();

    service = module.get<TvPlansService>(TvPlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
