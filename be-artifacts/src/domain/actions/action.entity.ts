import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IActionObject } from './action.interface';

@Entity({ name:"Action" })
export class ActionEntity implements IActionObject {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}