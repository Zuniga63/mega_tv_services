import { ApiProperty } from '@nestjs/swagger';

export class TvPlanDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Basic' })
  name: string;

  @ApiProperty({ example: 30 })
  price: number;
}
