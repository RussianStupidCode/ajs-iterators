import Team from '../team_iterator';

test('iterator test', () => {
  const persons = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Мечник',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 40,
    },
  ];

  const team = new Team(persons);

  expect(persons).toEqual([...team]);
});
