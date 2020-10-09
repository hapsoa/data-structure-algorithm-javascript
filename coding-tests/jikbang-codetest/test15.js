function findHobbyists(hobbies, hobby) {
  const resultNames = [];
  const keys = Object.keys(hobbies);

  for (let i = 0; i < keys.length; i++) {
    const personnName = keys[i];
    const personHobbies = hobbies[personnName];

    for (let j = 0; j < personHobbies.length; j++) {
      if (personHobbies[j] === hobby) {
        resultNames.push(personnName);
        break;
      }
    }
  }

  return resultNames;
}

var hobbies = {
  John: ['Piano', 'Puzzles', 'Yoga'],
  Adam: ['Drama', 'Fashion', 'Pets'],
  Mary: ['Magic', 'Pets', 'Reading'],
};

console.log(findHobbyists(hobbies, 'Yoga'));
