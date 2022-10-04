import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly service:TransactionService) {}
  @Get('hello')
  async getHello() : Promise<string> {
    return this.service.getHello();
  }
}