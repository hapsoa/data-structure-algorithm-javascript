// const value = '2019-03-08';
const value = '11-15-2012';

// var date_pattern = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
// var date_pattern = /^(\d{4})-(\d{2})-(\d{2})$/;
var pattern = /^(\d{2})-(\d{2})-(\d{4})$/;

if (pattern.test(value)) {
  console.log('yes');
} else {
  console.log('no');
}
