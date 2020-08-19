import { Injectable } from '@nestjs/common';

@Injectable()
export class ActionService {
  async getHello() : Promise<string> {
    return "Hello World!";
  }
}