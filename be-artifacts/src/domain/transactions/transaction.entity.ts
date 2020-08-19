import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ITransactionObject } from './transaction.interface';

@Entity({ name:'Transaction' })
export class TransactionEntity implements ITransactionObject {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}