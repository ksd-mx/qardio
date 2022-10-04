import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './domain/projects/project.module';
import { ModuleModule } from './domain/modules/module.module';
import { ProcessModule } from './domain/processes/process.module';
import { TransactionModule } from './domain/transactions/transaction.module';
import { ActionModule } from './domain/actions/action.module';
import { ProjectService } from './domain/projects/project.service';
import { ModuleService } from './domain/modules/module.service';
import { ProcessService } from './domain/processes/process.service';
import { TransactionService } from './domain/transactions/transaction.service';
import { ActionService } from './domain/actions/action.service';

import * as ormconfig from './cfg/database';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ProjectModule,
    ModuleModule,
    ProcessModule,
    TransactionModule,
    ActionModule
  ],
  providers: [
    ProjectService,
    ModuleService,
    ProcessService,
    TransactionService,
    ActionService
  ],
})
export class AppModule {}