import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContextService } from './context.service';
import { ContextController } from './context.controller';
import { ContextEntity } from './context.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContextEntity])],
  providers: [ContextService],
  controllers: [ContextController]
})
export class ContextModule {}
