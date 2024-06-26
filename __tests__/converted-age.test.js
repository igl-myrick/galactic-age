import ConvertedAge from '../src/converted-age.js';

describe("ConvertedAge", () => {
  let newConversion;

  beforeEach(() => {
    newConversion = new ConvertedAge(20);
  });

  test("should store a new number based on the object parameter", () => {
    expect(newConversion.inputAge).toEqual(20);
  })

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
  
  test("should return a Venus age based on parameters", () => {
    expect(newConversion.getAge("Venus")).toEqual(32.258);
  });
  
  test("should return a Mars age based on parameters", () => {
    expect(newConversion.getAge("Mars")).toEqual(10.638);
  });

  test("should return a Jupiter age based on parameters", () => {
    expect(newConversion.getAge("Jupiter")).toEqual(1.686);
  });

  test("should return an error if an invalid parameter is given", () => {
    expect(newConversion.getAge("Pluto")).toEqual("Invalid input");
  })
});

describe("ConvertedAge.prototype.findDifference", () => {
  
  test("should find the difference between a smaller and a larger number", () => {
    let newConversion = new ConvertedAge(20);
    expect(newConversion.findDifference(20, 26)).toEqual(6);
  });
  
  test("should find the difference between a larger and smaller number", () => {
    let newConversion = new ConvertedAge(20);
    expect(newConversion.findDifference(37, 30)).toEqual(7);
  });
});

describe("ConvertedAge.prototype.sinceBirthday", () => {

  test("should return how many years have passed since a given birthday based on the inputted age", () => {
    let newConversion = new ConvertedAge(56);
    expect(newConversion.sinceBirthday(43)).toEqual("13 Earth years have passed.\n54.167 Mercury years have passed.\n20.968 Venus years have passed.\n6.915 Mars years have passed.\n1.096 Jupiter years have passed.");
  });
});

describe("ConvertedAge.prototype.untilBirthday", () => {

  test("should return how many years until a given birthday based on the inputted age", () => {
    let newConversion = new ConvertedAge(56);
    expect(newConversion.untilBirthday(61)).toEqual("5 Earth years have yet to pass.\n20.833 Mercury years have yet to pass.\n8.065 Venus years have yet to pass.\n2.66 Mars years have yet to pass.\n0.422 Jupiter years have yet to pass.")
  });
});