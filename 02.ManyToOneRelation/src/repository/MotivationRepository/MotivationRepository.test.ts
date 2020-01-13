import { Connection } from 'typeorm';
import { User } from '../../entity/User';
import connectDB, {
  getUserRepository,
  getMotivationRepository,
} from '../../database';
import users from '../../fakeUser';
import { MotivationEnum } from '../../entity/Motivation';

let conn: Connection;
beforeAll(async () => {
  conn = await connectDB();
});
afterAll(async () => {
  await conn.close();
});

describe('Motivation Repostory', () => {
  it('특정 User는 motivation을 등록할 수 있다.', async () => {
    // user를 하나 생성하고
    // motivation을 2개 추가하고 <- 추가하는 메서드 작성
    // 해당 user로 User 데이터를 조회하여 확인한다. <- 조회 메서드 작성
    const user = await getUserRepository().createUser(users[0]);
    const motivations = [MotivationEnum.FIND_FRIEND, MotivationEnum.LONELINESS];
    await getMotivationRepository().saveByUserId(user.id, motivations);
    const currentUser = (await getUserRepository().findByUserId(
      user.id,
    )) as User;
    const result = currentUser.motivations.map((m) => m.motivation);
    expect(result.sort()).toEqual(motivations.sort());
  });

  it('motivation을 다시 등록하면 기존 데이터는 삭제되고 신규 데이터가 저장된다.', async () => {
    // user를 하나 생성하고
    // motivation을 2개 추가하고
    // 다른 motivation을 저장한다.
    // 해당 user로 조회하여 확인한다. <- 조회 메서드 작성
    const user = await getUserRepository().createUser(users[0]);
    const motivations1 = [
      MotivationEnum.FIND_FRIEND,
      MotivationEnum.LONELINESS,
    ];
    await getMotivationRepository().saveByUserId(user.id, motivations1);
    const motivations2 = [MotivationEnum.WEIGHT_INCREASE];
    await getMotivationRepository().saveByUserId(user.id, motivations2);

    const currentUser = (await getUserRepository().findByUserId(
      user.id,
    )) as User;
    const result = currentUser.motivations.map((m) => m.motivation);
    expect(result.sort()).toEqual(motivations2.sort());
  });
});
