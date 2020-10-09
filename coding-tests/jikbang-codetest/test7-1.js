const value = 'New Folder (1)';
// /^New Folder \((\d*)\)$/
var pattern = /^New Folder( \((\d*)\))?$/;

if (pattern.test(value)) {
  console.log('yes');

  const res = value.replace(/[^0-9]/g, '');
  console.log('!', res);
} else {
  console.log('no');
}
