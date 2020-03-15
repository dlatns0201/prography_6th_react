import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user';

@Entity('Todos')
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false, default: false })
  done: boolean;

  @ManyToOne(
    type => User,
    user => user.Todos,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  User: User;
}
