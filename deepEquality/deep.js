/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
 var deepEquals = function(apple, orange) {
  let isSame = true;
  const checkSame = (obj1, obj2) => {
    for (let key in obj1) {
      if (typeof obj1[key] !== "object") {
        if (obj1[key] !== obj2[key]) {
          isSame = false;
        }
      } else {
        checkSame(obj1[key], obj2[key]);
      }
    }
    for (let key in obj2) {
      if (!obj1[key]) {
        isSame = false;
      }
    }
  }
  checkSame(apple, orange);
  return isSame;
};

// var a = deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}});
// var b = deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}});
// console.log(a);
// console.log(b);