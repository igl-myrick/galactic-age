import ConvertedAge from '../src/converted-age.js';

describe("ConvertedAge", () => {
  let newConversion;

  beforeEach(() => {
    newConversion = new ConvertedAge(20);
  });

  test("should store a new class with a mercuryAge value", () => {
    expect(newConversion.mercuryAge).toEqual(83.333);
  });

  test("should store a class with an additional venusAge value", () => {
    expect(newConversion.venusAge).toEqual(32.258);
  });
});