import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessService } from './process.service';
import { ProcessController } from './process.controller';
import { ProcessEntity } from './process.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessEntity])],
  providers: [ProcessService],
  controllers: [ProcessController]
})
export class ProcessModule {}
