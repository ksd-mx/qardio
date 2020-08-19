import { Controller, Get } from '@nestjs/common';
import { ContextService } from './context.service';

@Controller('contexts')
export class ContextController {
  constructor(private readonly service:ContextService) {}
  @Get('hello')
  async getHello() : Promise<string> {
    return this.service.getHello();
  }
}