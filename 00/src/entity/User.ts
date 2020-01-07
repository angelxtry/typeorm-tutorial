import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

export enum ProviderEnum {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
}

export enum OpenImageChoiceEnum {
  OPEN = 'OPEN',
  FRIEND = 'FRIEND',
  CLOSE = 'CLOSE',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;
}
