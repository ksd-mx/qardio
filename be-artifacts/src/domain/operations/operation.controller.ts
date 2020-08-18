import { Controller, Get } from '@nestjs/common';
import { OperationService } from './operation.service';

@Controller('operations')
export class OperationController {
  constructor(private readonly service:OperationService) {}
  @Get('hello')
  async getHello() : Promise<string> {
    return this.service.getHello();
  }
}