import canIterate from '../can_iterate';

const DATA = [
  [
    new Map(),
    true,
  ],
  [
    new Set(),
    true,
  ],
  [
    1,
    false,
  ],
  [
    'qeqw',
    true,
  ],
  [
    [],
    true,
  ],
];

const handler = test.each(DATA);

handler('can iterate test', (object, expected) => {
  const result = canIterate(object);
  expect(result).toEqual(expected);
});
