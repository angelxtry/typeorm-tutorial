import 'reflect-metadata';
import connectDB, { getUserRepository } from './repository';
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

const startServer = async () => {
  await connectDB();

  // const newUser = await getUserRepository().createUser(users[0]);
  // console.log(newUser);

  const newUsers = await getUserRepository().createUsers(users);
  console.log(newUsers);
};

startServer();
