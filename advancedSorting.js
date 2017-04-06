var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 3, name: "alex",     age: 22 }
];

// sort by value
function compareNumbers(a, b) {
  console.log(a.age-b.age);
  return b.age - a.age;
}

//sort students with respect to name.
students.sort( function(a,b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  else if (nameA > nameB) {
    return 1;
  }
  else {
    console.log("inside else");
    return compareNumbers(a,b);

  }

});

console.log(students);