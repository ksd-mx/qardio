import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
  async getHello() : Promise<string> {
    return "Hello World!";
  }
}