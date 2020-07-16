import { hie } from '../hie';

describe('hie', () => {
  it('creates a matcher without a hierarchy definition.', () => {
    const matchRoles = hie();

    expect(matchRoles(['a', 'b'], ['b', 'd']).any).toBe(true);
    expect(matchRoles(['a', 'b'], 'd').any).toBe(false);
  });

  it('creates a matcher with a hierarchy definition.', () => {
    const matchRoles = hie({
      a: ['b', 'c'],
      c: ['d', 'e'],
    });

    expect(matchRoles('e', 'a').any).toBe(true);
    expect(matchRoles('e', 'f').any).toBe(false);
  });
});
