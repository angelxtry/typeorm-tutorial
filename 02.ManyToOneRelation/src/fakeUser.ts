import { LevelEnum } from './entity/User';
import { UserInfo } from './types';

const users: Array<UserInfo> = [
  {
    email: 'aaa@gmail.com',
    nickname: 'aaa',
    level: LevelEnum.L1,
  },
  {
    email: 'bbb@gmail.com',
    nickname: 'bbb',
    level: LevelEnum.L2,
  },
  {
    email: 'ccc@gmail.com',
    nickname: 'ccc',
    level: LevelEnum.L3,
  },
];

export default users;
