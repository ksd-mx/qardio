import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly service:ProjectService) {}
  @Get('hello')
  getHello() : string {
    return this.service.getHello();
  }
}