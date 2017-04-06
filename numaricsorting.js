//compareFunction is a annanomus callback function which returns some value to sort function.

var array = [10, 2, 5, 1, 9];
array.sort( function compareFunction(a,b) {
  return a-b;
});
console.log(array);

// sorting normally works abnormal for numarics.. test below code to observe
// var array1 = [10, 2, 5, 1, 9];
// console.log(array1);