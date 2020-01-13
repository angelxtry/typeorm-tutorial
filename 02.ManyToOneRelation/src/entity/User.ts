import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Motivation } from './Motivation';

export enum LevelEnum {
  L1 = 'Level 1',
  L2 = 'Level 2',
  L3 = 'Level 3',
  L4 = 'Level 4',
  L5 = 'Level 5',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  nickname: string;

  @Column({ type: 'enum', enum: LevelEnum, default: LevelEnum.L1 })
  level: LevelEnum;

  @OneToMany(() => Motivation, (motivation) => motivation.user)
  motivations: Motivation[];
}
