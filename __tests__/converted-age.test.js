import ConvertedAge from '../src/converted-age.js';

describe("ConvertedAge", () => {
  let newConversion;

  beforeEach(() => {
    newConversion = new ConvertedAge();
  });

  test("should store a new class with a mercuryFormula value", () => {
    expect(newConversion.mercuryFormula(20)).toEqual(83.333);
  });

  test("should store an additional venusFormula value", () => {
    expect(newConversion.venusFormula(20)).toEqual(32.258);
  });

  test("should store an additional marsFormula value", () => {
    expect(newConversion.marsFormula(20)).toEqual(10.638);
  });

  test("should store an additional jupiterFormula value", () => {
    expect(newConversion.jupiterFormula(20)).toEqual(1.686);
  });
});

describe("ConvertedAge.prototype.getAge", () => {
  let newConversion;

  beforeEach(() => {
    newConversion = new ConvertedAge(20);
  });
  
  test("should return a Mercury age based on parameters", () => {
    expect(newConversion.getAge("Mercury")).toEqual(83.333);
  });
});