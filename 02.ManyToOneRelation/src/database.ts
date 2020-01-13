import { getConnectionOptions, createConnection, Connection } from 'typeorm';

import { UserRepository } from './repository/UserRepository';
import { MotivationRepository } from './repository/MotivationRepository';

let connection: Connection;

const connectDB = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  connection = await createConnection({
    ...connectionOptions,
    name: 'default',
  });
  return connection;
};

export const getUserRepository = (): UserRepository =>
  connection.getCustomRepository(UserRepository);

export const getMotivationRepository = (): MotivationRepository =>
  connection.getCustomRepository(MotivationRepository);

export default connectDB;
