import {
  EntityRepository,
  Repository,
} from 'typeorm';

import { Motivation } from '../../entity/Motivation';
import { getUserRepository } from '../../database';

@EntityRepository(Motivation)
export class MotivationRepository extends Repository<Motivation> {
  // 특정 user의 motivation을 저장.
  // user의 기존 motivation을 삭제하고 저장.
  async saveByUserId(userId: string, motivations: Array<string>) {
    try {
      const user = getUserRepository().create({ id: userId });
      const motivationInstances = motivations.map((m) =>
        this.create({ user, motivation: m }));
      await this.delete({ user });
      return await this.save(motivationInstances);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
