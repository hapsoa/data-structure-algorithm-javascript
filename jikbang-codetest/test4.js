function changeDateFormat(dates) {
  // Write the code that goes here

  const convertedDates = [];

  for (let i = 0; i < dates.length; i++) {
    if (dates[i].includes('/') && dates[i][2] === '/') {
      const splitedArray = dates[i].split('/');
      const joined = splitedArray[2] + splitedArray[1] + splitedArray[0];
      convertedDates.push(joined);
    } else if (dates[i].includes('/')) {
      const splitedArray = dates[i].split('/');
      const joined = splitedArray[0] + splitedArray[1] + splitedArray[2];
      convertedDates.push(joined);
    } else if (dates[i].includes('-')) {
      const splitedArray = dates[i].split('-');
      const joined = splitedArray[2] + splitedArray[0] + splitedArray[1];
      convertedDates.push(joined);
    } else {
      // convertedDates.push(dates[i]);
    }
  }

  return convertedDates;
}

var dates = changeDateFormat([
  '2010/03/30',
  '15/12/2016',
  '11-15-2012',
  '20130720',
]);
for (index = 0; index < dates.length; ++index) {
  console.log(dates[index]);
}
