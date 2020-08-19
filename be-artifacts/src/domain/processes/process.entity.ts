import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IProcessObject } from './process.interface';

@Entity({ name:'Process' })
export class ProcessEntity implements IProcessObject {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}