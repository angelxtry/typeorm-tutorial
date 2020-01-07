import 'reflect-metadata';
import connectDB, { getUserRepository } from './repository';

const startServer = async () => {
  await connectDB();

  const newUser = await getUserRepository().createByEmail('aaa@gmail.com');
  console.log(newUser);
};

startServer();
