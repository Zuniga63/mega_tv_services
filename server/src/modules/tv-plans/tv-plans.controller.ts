import { Controller, Get } from '@nestjs/common';
import { TvPlansService } from './tv-plans.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TvPlanDto } from './dto/tv-plan.dto';

@Controller('tv-plans')
@ApiTags('TvPlans')
export class TvPlansController {
  constructor(private readonly tvPlansService: TvPlansService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all plans',
    description: 'This end point return a array of plan',
  })
  @ApiOkResponse({
    type: [TvPlanDto],
  })
  findAll() {
    return this.tvPlansService.findAll();
  }
}
