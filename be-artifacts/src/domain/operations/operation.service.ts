import { Injectable } from '@nestjs/common';

@Injectable()
export class OperationService {
  async getHello() : Promise<string> {
    return "Hello World";
  }
}