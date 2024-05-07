export default class ConvertedAge {
  constructor(inputAge) {
    this.mercuryAge = parseFloat((inputAge / 0.24).toFixed(3));
  }
}