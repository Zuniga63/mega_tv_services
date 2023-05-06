import { ApiProperty } from '@nestjs/swagger';

export class BuildingDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({
    example: 'Exhibit',
  })
  name: string;

  @ApiProperty({ example: '56 Fulton Street' })
  address: string;

  @ApiProperty({ example: 'New York' })
  city: string;

  @ApiProperty({ example: 'NY' })
  state: string;

  @ApiProperty({ example: '10038' })
  zipCode: string;
}
