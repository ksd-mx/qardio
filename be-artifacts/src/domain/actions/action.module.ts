import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionService } from './action.service';
import { ActionController } from './action.controller';
import { ActionEntity } from './action.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActionEntity])],
  providers: [ActionService],
  controllers: [ActionController]
})
export class ActionModule {}
