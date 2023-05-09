import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSubscriptionDto {
  @ApiProperty({ example: 'Jhon', required: true })
  @MaxLength(45)
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe', required: true })
  @MaxLength(45)
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: '112', required: true })
  @MaxLength(20)
  @IsNotEmpty()
  aptNumber: string;

  @ApiProperty({ example: 'jhon@example.com', required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '555-5555', required: true })
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ example: 1, required: true })
  @IsNumber()
  buildingId: number;

  @ApiProperty({ example: 1, required: true })
  @IsNumber()
  tvPlanId: number;
}
