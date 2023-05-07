import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SubscriptionIsSuccessDto } from './dto/subscription-is-success.dto';

@Controller('subscriptions')
@ApiTags('Subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Post()
  @ApiOperation({
    summary: 'Add new subscription',
    description: 'This end point add a new customer and subscription',
  })
  @ApiCreatedResponse({
    description: 'Subscription was created sucessfully',
    type: SubscriptionIsSuccessDto,
  })
  @ApiBadRequestResponse({ description: 'Validation error' })
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionsService.create(createSubscriptionDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all Subscription',
    description: 'Array of subscription with customer, building and tv plan',
  })
  @ApiOkResponse({
    description: 'Array of subscriptions',
    type: SubscriptionIsSuccessDto,
  })
  findAll() {
    return this.subscriptionsService.findAll();
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete subscription',
    description: 'This end point delete a subscription by ID',
  })
  @ApiOkResponse({
    description: 'Return the subscription was deleted',
  })
  remove(@Param('id') id: string) {
    return this.subscriptionsService.remove(+id);
  }
}
