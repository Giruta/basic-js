const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!arguments.length || !sampleActivity || !+sampleActivity ||
    typeof sampleActivity !== 'string' || sampleActivity < 0 ||
    sampleActivity > MODERN_ACTIVITY || +sampleActivity > 15) {
    return false;
  }
  if ( typeof sampleActivity == 'string' && sampleActivity.trim().length === 0) {
    return false;
  }

  let k = Math.LN2 / HALF_LIFE_PERIOD;
  let ACTIVITY = Math.log(MODERN_ACTIVITY / sampleActivity);
  let year = Math.ceil(ACTIVITY / k);

  return year;
};
