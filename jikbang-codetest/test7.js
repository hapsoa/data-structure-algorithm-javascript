// new folder 시리즈가 있으면, new folder 제일 마지막 이름을 반환한다.

function generateNewFolderName(existingFolders) {
  // Write your code here

  const pattern = /^New Folder( \((\d*)\))?$/;
  const folderNumbers = [];

  for (let i = 0; i < existingFolders.length; i++) {
    if (pattern.test(existingFolders[i])) {
      const folderNumberString = existingFolders[i].replace(/[^0-9]/g, '');

      let folderNumber = 0;
      if (folderNumberString === '') {
        folderNumber = 1;
      } else {
        folderNumber = Number(folderNumberString);
      }

      folderNumbers.push(folderNumber);
    }
  }

  if (folderNumbers.length > 0) {
    // const currentMaxNumber = Math.max(...folderNumbers);
    // return `New Folder (${currentMaxNumber + 1})`;

    folderNumbers.sort();

    let currentK = 0;
    for (let i = 0; i < folderNumbers.length; i++) {
      if (folderNumbers[i] - currentK === 1) {
        currentK = folderNumbers[i];
      } else {
        return `New Folder (${currentK + 1})`;
      }
    }

    return `New Folder (${currentK + 1})`;
  } else {
    return 'New Folder';
  }
}

console.log(
  generateNewFolderName([
    'New Folder',
    'New Folder (2)',
    'New Folder (0)',
    'New Folder (3)',
  ]),
);
