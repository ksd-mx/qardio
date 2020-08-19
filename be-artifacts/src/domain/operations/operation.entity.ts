import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IOperationObject } from './operation.interface';

@Entity({ name:"Operation" })
export class OperationEntity implements IOperationObject {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}