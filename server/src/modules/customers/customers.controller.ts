import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomerDto } from './dto/customer.dto';

@Controller('customers')
@ApiTags('Customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  @ApiOperation({
    summary: 'All customers',
    description: 'This end point return a list of customer with tv plan',
  })
  @ApiOkResponse({
    description: 'An array with the customer data of database',
    type: [CustomerDto],
  })
  findAll() {
    return this.customersService.findAll();
  }
}
