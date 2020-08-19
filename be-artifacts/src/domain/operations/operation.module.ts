import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { OperationEntity } from './operation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OperationEntity])],
  providers: [OperationService],
  controllers: [OperationController]
})
export class OperationModule {}
