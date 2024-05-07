export default class ConvertedAge {
  constructor(inputAge) {
    this.mercuryFormula = function(inputNum) {
      return parseFloat((inputNum / 0.24).toFixed(3));
    }
    this.venusFormula = function(inputNum) {
      return parseFloat((inputNum / 0.62).toFixed(3));
    }
    this.marsFormula = function(inputNum) {
      return parseFloat((inputNum / 1.88).toFixed(3));
    }
    this.jupiterFormula = function(inputNum) {
      return parseFloat((inputNum / 11.86).toFixed(3));
    }
  }
}