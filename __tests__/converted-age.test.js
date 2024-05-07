import ConvertedAge from '../src/converted-age.js';

describe("ConvertedAge", () => {

  test("should store a new class with a mercuryAge value", () => {
    let newConversion = new ConvertedAge(20);
    expect(newConversion.mercuryAge).toEqual(83.333);
  });
});