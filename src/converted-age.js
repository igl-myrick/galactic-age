export default class ConvertedAge {
  constructor(inputAge) {
    this.mercuryAge = parseFloat((inputAge / 0.24).toFixed(3));
    this.venusAge = parseFloat((inputAge / 0.62).toFixed(3));
  }
}