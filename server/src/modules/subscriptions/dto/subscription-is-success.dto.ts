import { ApiProperty } from '@nestjs/swagger';

export class SubscriptionIsSuccessDto {
  @ApiProperty({ example: 'Ok' })
  result: string;
}
