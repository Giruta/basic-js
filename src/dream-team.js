module.exports = function createDreamTeam(members) {
  let team='';
  if(typeof members == 'number' || !members || !members.length) return false;
  members.forEach(el => {
    if (typeof el === 'string')
    {
      team += el.trim()[0].toUpperCase()
    }
  })

  return team.split('').sort().join('');
};
