import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IModuleObject } from './module.interface';

@Entity()
export class ModuleEntity implements IModuleObject {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}