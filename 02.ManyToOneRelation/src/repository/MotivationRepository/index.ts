import {
  EntityRepository,
  Repository,
  getManager,
} from 'typeorm';

import { Motivation, MotivationEnum } from '../../entity/Motivation';
import { getUserRepository } from '../../database';

@EntityRepository(Motivation)
export class MotivationRepository extends Repository<Motivation> {
  // 특정 user의 motivation을 저장.
  // user의 기존 motivation을 삭제하고 저장.
  async saveByUserId(userId: string, motivations: Array<MotivationEnum>) {
    try {
      const user = getUserRepository().create({ id: userId });
      const motivationInstances = motivations.map((m) =>
        this.create({ user, motivation: m }));

      return await getManager().transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.delete(Motivation, { user });
          await transactionalEntityManager.save(motivationInstances);
        },
      );
      // await this.delete({ user });
      // return await this.save(motivationInstances);
    } catch (error) {
      // console.log(error);
      return new Error('Motivation save error.');
    }
  }
}
