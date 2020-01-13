import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { User } from './User';

export enum MotivationEnum {
  WEIGHT_INCREASE = 'WEIGHT_INCREASE',
  WEIGHT_LOSS = 'WEIGHT_LOSS',
  FIND_FRIEND = 'FIND_FRIEND',
  LONELINESS = 'LONELINESS',
}

@Entity()
export class Motivation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.motivations)
  user: User;

  @Column({ type: 'enum', enum: MotivationEnum })
  motivation: string;
}
