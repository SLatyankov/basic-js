module.exports = function getSeason(date) {
  if (date == undefined) {
    console.log('Unable to determine the time of year!');
    return 'Unable to determine the time of year!';
  }
  if (typeof date === Date) {
    let key = date.getMonth();
    console.log(key);
    switch (key) {
      case 0:
      case 1:
      case 11:
        return 'winter';
      case 2:
      case 3:
      case 4:
        return 'spring';
      case 5:
      case 6:
      case 7:
        return 'summer';
      case 8:
      case 9:
      case 10:
        return 'autumn';
      default:
        return 'Error';
            console.log('Error');
    }
    console.log('Error');
    return 'Error';
  };
}