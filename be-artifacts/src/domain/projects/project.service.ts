import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  async getHello() : Promise<string> {
    return "Hello World";
  }
}