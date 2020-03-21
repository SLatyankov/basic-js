const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' ) {
    return false;
  } 
  let z = MODERN_ACTIVITY / sampleActivity;
  var t = Math.log(z)/0.000122;
  console.log(t);
  return Math.round(t);
};
