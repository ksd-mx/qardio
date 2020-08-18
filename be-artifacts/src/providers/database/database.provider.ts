import { Provider } from '@nestjs/common';
import { createConnection } from 'typeorm';

export const DatabaseProvider : Provider = {
  provide:'DbConnectionToken',
  useFactory: async() => {
    return createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'toor',
      database: 'app',
      entities: [`${__dirname}/../domain/**/*.entity.{ts,js}`],
      synchronize: true,
      logging: 'all'
    });
  }
}