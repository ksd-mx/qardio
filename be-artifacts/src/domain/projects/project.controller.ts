import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly service:ProjectService) {}
  @Get('hello')
  async getHello() : Promise<string> {
    return this.service.getHello();
  }
}