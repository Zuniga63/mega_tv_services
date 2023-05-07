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

  @ApiProperty({
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          example: 1,
        },
        subscriptionDate: {
          type: 'string',
          format: 'date-time',
        },
        appNumber: {
          type: 'string',
          example: '112',
        },
        tvPlan: {
          type: 'object',
          properties: {
            id: {
              type: 'number',
              example: 1,
            },
            name: {
              type: 'string',
              example: 'Basic',
            },
            price: {
              type: 'number',
              example: 50,
            },
          },
        },
      },
    },
  })
  subscriptions: any[];
}
