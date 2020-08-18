import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleService {
  async getHello() : Promise<string> {
    return "Hello World";
  }
}