import { EntityRepository, Repository } from 'typeorm';

import { User } from '../entity/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createByEmail(email: string) {
    const user = this.create({ email });
    return this.save(user);
  }
}
