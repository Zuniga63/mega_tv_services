import { Controller, Get } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BuildingDto } from './dto/building.dto';

@Controller('buildings')
@ApiTags('Buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all buildings',
    description: 'This end point return a array of buildings',
  })
  @ApiOkResponse({
    type: [BuildingDto],
  })
  findAll() {
    return this.buildingsService.findAll();
  }
}
