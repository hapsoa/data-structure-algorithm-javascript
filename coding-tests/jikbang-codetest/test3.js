function sortByPriceAscending(jsonString) {
  // Your code goes here
  jsonObjects = JSON.parse(jsonString);

  jsonObjects.sort((a, b) => {
    const subtractedValue = a.price - b.price;

    if (subtractedValue === 0) {
      return a.name - b.name;
    }
    return subtractedValue;
  });

  return JSON.stringify(jsonObjects);
}

console.log(
  sortByPriceAscending(
    '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04},{"name":"ricf","price":4.04}]',
  ),
);
