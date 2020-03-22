module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let bag = [];
  members.forEach(element => {
    if (typeof element === 'string') {
      bag.push(element.trim()[0]);
    }
  })
  let str = bag.join('');
  bag = str.toUpperCase().split('');
  str = bag.sort().join('');
  return str;
};