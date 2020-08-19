import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IContextObject } from './context.interface';

@Entity({ name:"Context" })
export class ContextEntity implements IContextObject {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}