import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './domain/projects/project.module';
import { ModuleModule } from './domain/modules/module.module';
import { ProcessModule } from './domain/processes/process.module';
import { TransactionModule } from './domain/transactions/transaction.module';
import { OperationModule } from './domain/operations/operation.module';
import { ProjectService } from './domain/projects/project.service';
import { ModuleService } from './domain/modules/module.service';
import { ProcessService } from './domain/processes/process.service';
import { TransactionService } from './domain/transactions/transaction.service';
import { OperationService } from './domain/operations/operation.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProjectModule,
    ModuleModule,
    ProcessModule,
    TransactionModule,
    OperationModule
  ],
  providers: [
    ProjectService,
    ModuleService,
    ProcessService,
    TransactionService,
    OperationService
  ],
})
export class AppModule {}