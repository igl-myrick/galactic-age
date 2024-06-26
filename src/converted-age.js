export default class ConvertedAge {
  constructor(inputAge) {
    this.inputAge = inputAge;
    this.mercuryFormula = function(inputNum) {
      return parseFloat((inputNum / 0.24).toFixed(3));
    };
    this.venusFormula = function(inputNum) {
      return parseFloat((inputNum / 0.62).toFixed(3));
    };
    this.marsFormula = function(inputNum) {
      return parseFloat((inputNum / 1.88).toFixed(3));
    };
    this.jupiterFormula = function(inputNum) {
      return parseFloat((inputNum / 11.86).toFixed(3));
    };
  }

  getAge(planetToConvert) {
    if (planetToConvert.toLowerCase() === "mercury") {
      return this.mercuryFormula(this.inputAge);
    } else if (planetToConvert.toLowerCase() === "venus") {
      return this.venusFormula(this.inputAge);
    } else if (planetToConvert.toLowerCase() === "mars") {
      return this.marsFormula(this.inputAge);
    } else if (planetToConvert.toLowerCase() === "jupiter") {
      return this.jupiterFormula(this.inputAge);
    } else {
      return "Invalid input";
    }
  }

  findDifference(num1, num2) {
    if (num2 > num1) {
      return num2 - num1;
    } else {
      return num1 - num2;
    }
  }

  sinceBirthday(numToCompare) {
    const difference = this.findDifference(this.inputAge, numToCompare);
    return `${difference} Earth years have passed.\n${this.mercuryFormula(difference)} Mercury years have passed.\n${this.venusFormula(difference)} Venus years have passed.\n${this.marsFormula(difference)} Mars years have passed.\n${this.jupiterFormula(difference)} Jupiter years have passed.`;
  }

  untilBirthday(numToCompare) {
    const difference = this.findDifference(this.inputAge, numToCompare);
    return `${difference} Earth years have yet to pass.\n${this.mercuryFormula(difference)} Mercury years have yet to pass.\n${this.venusFormula(difference)} Venus years have yet to pass.\n${this.marsFormula(difference)} Mars years have yet to pass.\n${this.jupiterFormula(difference)} Jupiter years have yet to pass.`;
  }
}