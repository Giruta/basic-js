module.exports = function transform(arr) {
  const nextDel = '--discard-next';
  const prevDel = '--discard-prev';
  const nextDbl = '--double-next';
  const prevDbl = '--double-prev';

  if (!(arr instanceof Array)) throw new Error();

  let resArr = [...arr];

  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i] === nextDel) {
      resArr.splice(i, 2, undefined);
    } else if (resArr[i] === prevDel && i===0) {
      resArr.splice(i, 1);
    } else if (resArr[i] === prevDel) {
        resArr.splice(i - 1, 2, undefined);
    } else if (resArr[i] === nextDbl) {
      resArr.splice(i, 1, resArr[i + 1]);
    } else if (resArr[i] === prevDbl) {
      resArr.splice(i, 1, resArr[i - 1]);
    }
  }
  resArr = resArr.filter((e) => e !== undefined);
  return resArr;
}
