import { Injectable } from '@nestjs/common';

@Injectable()
export class ContextService {
  async getHello() : Promise<string> {
    return "Hello World!";
  }
}