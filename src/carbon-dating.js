const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity === 'string') {
    let x = parseFloat(sampleActivity);
    if (x > 0 && x < MODERN_ACTIVITY) {
      let z = MODERN_ACTIVITY / x;
      var t = Math.log(z) * HALF_LIFE_PERIOD / 0.693;
      return Math.floor(t) + 1;
    }
  }
  return false;
};