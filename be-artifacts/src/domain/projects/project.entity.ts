import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IProjectObject } from './project.interface';

@Entity({ name:"Project" })
export class ProjectEntity implements IProjectObject {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}