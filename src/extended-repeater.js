const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatStr = '', repeatAddStr='';
  let repeatArr = [], repeatAddArr = [];
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;

  (typeof str !== 'string') ? str = str+'' : str;
  (options.hasOwnProperty('addition') && typeof addition !== 'string') ? addition = addition+'' : addition;

  if(repeatTimes) {
    repeatArr = Array(repeatTimes).fill(str)
  } else repeatArr[0] = str;


  if(additionRepeatTimes) {
    repeatAddArr = Array(additionRepeatTimes).fill(addition);
  }
  if(!additionRepeatTimes && addition) {
    repeatAddArr[0] = addition;
  }

  if(additionSeparator) {
    repeatAddStr = repeatAddArr.join(additionSeparator);
  } else repeatAddStr = repeatAddArr.join('|');

  repeatArr = repeatArr.map(el=>el+repeatAddStr);

  if(separator) {
    repeatStr = repeatArr.join(separator);
  } else repeatStr = repeatArr.join('+');

  return repeatStr;
};
