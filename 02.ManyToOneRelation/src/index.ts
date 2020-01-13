import 'reflect-metadata';
import connectDB, { getUserRepository } from './database';
import users from './fakeUser';

const startServer = async () => {
  await connectDB();

  const createdUsers = await getUserRepository().createUsers(users);
  const usersExceptAaa = createdUsers.filter((u) => u.nickname !== 'aaa');
  console.log(usersExceptAaa);
  const deletedUser = await getUserRepository().remove(usersExceptAaa);
  console.log(deletedUser);
  const allUsers = await getUserRepository().find();
  console.log(allUsers);
};

startServer();
