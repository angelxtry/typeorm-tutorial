import 'reflect-metadata';
import connectDB, { getUserRepository } from './repository';
// import { LevelEnum, User } from './entity/User';
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

  // ## INSERT
  // const newUser = await getUserRepository().createUser(users[0]);
  // console.log(newUser);

  // const newUsers = await getUserRepository().createUsers(users);
  // console.log(newUsers);

  // ## SELECT
  // await getUserRepository().createUsers(users);
  // const userAAA = await getUserRepository().findOne({ email: users[0].email });
  // console.log(userAAA);

  // const userAAA2 = await getUserRepository().findOne({
  //   where: { email: users[0].email },
  // });
  // console.log(userAAA2);

  // const selectedUsers = await getUserRepository().find();
  // console.log(selectedUsers);

  // const userIds = selectedUsers.map((u) => u.id);
  // console.log(userIds);

  // const userAaaId1 = getUserRepository().getId(selectedUsers[0]);
  // console.log(userAaaId1);

  // primary key만 조회 가능
  // const createdUser2 = getUserRepository().create({ email: users[0].email });
  // const userAaaId2 = getUserRepository().getId(createdUser2);
  // console.log(userAaaId2);

  // const createdUser3 = getUserRepository().create({ id: userIds[1] });
  // if (getUserRepository().hasId(createdUser3)) {
  //   console.log('exist');
  // } else {
  //   console.log('not exist');
  // }

  // ## Update
  // // email을 받은 경우
  // const user1 = await getUserRepository().findByEmail(users[2].email);
  // if (user1) {
  //   user1.nickname = 'zzz';
  //   user1.level = LevelEnum.L5;
  //   const upatedUser1 = await getUserRepository().save(user1);
  //   console.log(upatedUser1);
  // }

  // // select는 순서를 보장하지 않는다.
  // const user2: User = getUserRepository().create({ id: userIds[1] });
  // console.log(user2);
  // user2.nickname = 'yyy';
  // user2.level = LevelEnum.L4;
  // const upatedUser2 = await getUserRepository().save(user2);
  // console.log(upatedUser2);

  // const allUsers = await getUserRepository().find();
  // console.log(allUsers);

  // ## delete, remove
  // delete - Deletes entities by entity id, ids or given conditions:
  // await getUserRepository().createUsers(users);
  // const deletedUser = await getUserRepository().delete({
  //   email: users[0].email,
  // });
  // console.log(deletedUser);
  // const allUsers = await getUserRepository().find();
  // console.log(allUsers);

  // remove - Removes a given entity or array of entities.
  const createdUsers = await getUserRepository().createUsers(users);
  const usersExceptAaa = createdUsers.filter(u => u.nickname !== 'aaa');
  console.log(usersExceptAaa);
  const deletedUser = await getUserRepository().remove(usersExceptAaa);
  console.log(deletedUser);
  const allUsers = await getUserRepository().find();
  console.log(allUsers);
};

startServer();
