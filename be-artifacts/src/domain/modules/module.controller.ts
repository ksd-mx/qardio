import { Controller, Get } from '@nestjs/common';
import { ModuleService } from './module.service';

@Controller('modules')
export class ModuleController {
  constructor(private readonly service:ModuleService) {}
  @Get('hello')
  async getHello() : Promise<string> {
    return this.service.getHello();
  }
}