/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

//I = array of numbers
//O = first number that occurs an even number of times in an input array
//C = none
//E = return null if there are no even occurrence items

//make an object to keep all the items with number of occurence of item as key and value pair
//check over the object and return the item that has value of even number
//if there is no key with even number as its value, return null

var evenOccurrence = function(arr) {
  // Your code here.
  const storage = {};
  for (let item of arr) {
    if (storage[item]) {
      storage[item]++;
    } else {
      storage[item] = 1;
    }
  }
  for (let item of arr) {
    if (storage[item] % 2 === 0) {
      return item;
    }
  }
  return null;
};
