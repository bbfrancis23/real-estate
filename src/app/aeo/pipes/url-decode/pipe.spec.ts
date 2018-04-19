import { UrlDecodePipe } from './pipe';

describe('UrlDecodePipe', () => {
  let pipe = new UrlDecodePipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc', false)).toBe('Abc');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('abc def', true)).toBe('Abc Def');
  });

  it('transforms "abc def" to "Abc def"', () => {
    expect(pipe.transform('abc def', false)).toBe('Abc def');
  });

  it('transforms "cobra-kai" to "Cobra kai"', () => {
    expect(pipe.transform('cobra-kai', false)).toBe('Cobra kai');
  });

  it('transforms "cobra-kai" to "Cobra Kai"', () => {
    expect(pipe.transform('cobra-kai', true)).toBe('Cobra Kai');
  });
})
