module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //const turns = Hanoi(disksNumber, '1','2','3');
  const turns = (2 ** disksNumber) - 1;
  const seconds = Math.floor(turns * 3600 / turnsSpeed);

  return { turns, seconds }
};

// let count=0;
// function Hanoi(n,a,b,c){
//   if (n > 0) {
//     Hanoi(n-1, a, c, b);
//     count++;
//     Hanoi(n-1, c, b, a);
//   }
//   return count;
// }
