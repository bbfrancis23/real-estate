import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe = new CapitalizePipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc', false)).toBe('Abc');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('abc def', true)).toBe('Abc Def');
  });

  it('transforms "abc def" to "Abc def"', () => {
    expect(pipe.transform('abc def', false)).toBe('Abc def');
  });


})
