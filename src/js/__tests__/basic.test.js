import { Character } from '../Character';
import { Team } from '../Team';

describe('Check team', () => {
  const personal = new Team();
  const lanaya = new Character('Lanaya');
  const lanaya2 = new Character('FlexT4');
  const lanaya3 = new Character('FlexT4');
  const lanaya4 = new Character('MissLansha');
  personal.toArray();

  test('team checker case', () => {
    personal.add(lanaya);
    personal.add(lanaya2);
    personal.add(lanaya4);

    expect(personal.toArray()).toEqual(
      [
        { name: 'Lanaya' },
        { name: 'FlexT4' },
        { name: 'MissLansha' }
      ]
    )
  })

  test('team checker case2', () => {
    expect(() => {
      personal.add(lanaya);
      personal.add(lanaya2);
      personal.add(lanaya2);
      personal.add(lanaya4);
    }).toThrow('Ошибка');
  });

  test('team checker case3', () => {
    personal.addAll(lanaya, lanaya2, lanaya3, lanaya4);

    expect(personal.toArray()).toEqual(
      [
        { name: 'Lanaya' },
        { name: 'FlexT4' },
        { name: 'MissLansha' }
      ]
    )
  })
})