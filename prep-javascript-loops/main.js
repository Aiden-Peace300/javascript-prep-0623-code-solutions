// create your loops here.
function whileLoop1() {
  const newArray = []; // Create a new array
  let counter = 0; // Initialize the counter

  while (counter < 10) {
    // Loop 10 times
    newArray.push(counter); // Add the current value of the counter to the new array
    counter++; // Increment the counter
  }

  return newArray; // Return the new array with the numbers 0 - 9
}

console.log(whileLoop1()); // the log method of the console object is calling 'whileLoop1()'

function whileLoop2() {
  const newArray = []; // Create a new array
  let counter; // Initialize the counter
  counter = 0; // assigning counter to value 0

  while (counter < 20) {
    // Loop 10 times
    newArray.push(counter); // Add the current value of the counter to the new array
    counter += 2; // Increment the counter
  }

  return newArray; // Return the new array with the numbers 0 - 9
}

console.log(whileLoop2()); // the log method of the console object is calling 'whileLoop1()'

function forLoop1() {
  const newArray = []; // Create a new array

  for (let i = 0; i < 10; i++) {
    newArray.push(i); // Add the current value of i to the new array
  }

  return newArray; // Return the new array with the numbers 0 - 9
}

console.log(forLoop1()); // the log method of the console object is calling 'forLoop1()'

function forLoop2() {
  let result = '';
  for (let i = 100; i >= 0; i--) {
    result = 'Time til explosion ' + i;
    if (i > 0) {
      console.log(result);
    }
  }
  return result;
}

console.log(forLoop2()); // the log method of the console object is calling 'forLoop2()'

function forInLoop1(object) {
  const newArray = [];
  for (const property in object) {
    newArray.push(property);
  }
  return newArray;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log(forInLoop1(object));

function forInLoop2(object) {
  const newArray = [];
  for (const value in object) {
    newArray.push(object[value]);
  }
  return newArray;
}

console.log(forInLoop2(object));
