import { EntityRepository, Repository } from 'typeorm';

import { User } from '../entity/User';
import { UserInfo } from '../types';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(userInfo: UserInfo) {
    const user = this.create(userInfo);
    return this.save(user);
  }

  async createUsers(usersInfo: Array<UserInfo>) {
    const users = this.create(usersInfo);
    return this.save(users);
  }
}
