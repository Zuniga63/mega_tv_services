import { ApiProperty } from '@nestjs/swagger';

export class CustomerDto {
  @ApiProperty({
    example: 1,
  })
  id: number;

  @ApiProperty({ example: 'Jhon' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: 'jhondoe@example.com' })
  email: string;

  @ApiProperty({ example: '555-5555' })
  phoneNumber: string;

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
        building: {
          type: 'object',
          properties: {
            id: {
              type: 'number',
              example: 1,
            },
            name: {
              type: 'string',
              example: 'Exhibit',
            },
            address: {
              type: 'string',
              example: '56 Fulton Street',
            },
            city: {
              type: 'string',
              example: 'New York',
            },
            state: {
              type: 'string',
              example: 'NY',
            },
            zipCode: {
              type: 'string',
              example: '10038',
            },
          },
        },
      },
    },
  })
  subscriptions: any[];
}
