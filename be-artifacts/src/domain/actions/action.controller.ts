import { Controller, Get } from '@nestjs/common';
import { ActionService } from './action.service';

@Controller('actions')
export class ActionController {
  constructor(private readonly service:ActionService) {}
  @Get('hello')
  async getHello() : Promise<string> {
    return this.service.getHello();
  }
}