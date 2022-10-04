import { Injectable } from '@nestjs/common';

@Injectable()
export class ProcessService {
  async getHello() : Promise<string> {
    return "Hello World!";
  }
}