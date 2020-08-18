import { Controller, Get } from '@nestjs/common';
import { ProcessService } from './process.service';

@Controller('processes')
export class ProcessController {
  constructor(private readonly service:ProcessService) {}
  @Get('hello')
  async getHello() : Promise<string> {
    return this.service.getHello();
  }
}