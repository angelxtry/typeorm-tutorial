import { LevelEnum } from './entity/User';

export interface UserInfo {
  email: string;
  nickname: string;
  level: LevelEnum;
}
