import ConvertedAge from '../src/converted-age.js';

describe("ConvertedAge", () => {
  let newConversion;

  beforeEach(() => {
    newConversion = new ConvertedAge(20);
  });

  test("should store a new class with a mercuryAge value", () => {
    expect(newConversion.mercuryAge).toEqual(83.333);
  });

  test("should store an additional venusAge value", () => {
    expect(newConversion.venusAge).toEqual(32.258);
  });

  test("should store an additional marsAge value", () => {
    expect(newConversion.marsAge).toEqual(10.638);
  });

  test("should store an additional jupiterAge value", () => {
    expect(newConversion.jupiterAge).toEqual(1.686);
  });
});