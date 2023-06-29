/******************************************************************
whileLoop1 purpose:
The purpose of this function is to generate an array with values
ranging from 0 to 9 using a while loop.

whileLoop1 Return(s):
This function returns an array containing 10 values ranging
from 0 to 9.
*******************************************************************/
function whileLoop1() {
  const newArray = []; // Create a new array
  let counter = 0; // Initialize the counter

  // Loop 10 times
  while (counter < 10) {
    newArray.push(counter); // Add the current value of the counter to the new array
    counter++; // Increment the counter
  } // end of whileLoop1()

  return newArray; // Return the new array with the numbers 0 - 9
}

console.log(whileLoop1()); // the log method of the console object is calling 'whileLoop1()'

/******************************************************************
whileLoop2 purpose:
The purpose of this function is to generate an array with values
ranging from 0 to 20 using a while loop.

whileLoop2 Return(s):
This function returns an array containing values ranging
from 0 to 20 with a step size of 2.
*******************************************************************/
function whileLoop2() {
  const newArray = []; // Create a new array
  let counter; // Initialize the counter
  counter = 0; // assigning counter to value 0

  while (counter < 20) {
    // Loop 10 times
    newArray.push(counter); // Add the current value of the counter to the new array
    counter += 2; // Increment the counter
  } // end of while loop

  return newArray; // Return the new array with the numbers 0 - 9
} // end of whileLoop2()

console.log(whileLoop2()); // the log method of the console object is calling 'whileLoop1()'

/******************************************************************
forLoop1 purpose:
The purpose of this function is to generate an array with values
ranging from 0 to 9 using a for loop.

forLoop1 Return(s):
This function returns an array containing values ranging from 0 to 9.
*******************************************************************/
function forLoop1() {
  const newArray = []; // Create a new array

  for (let i = 0; i < 10; i++) {
    newArray.push(i); // Add the current value of i to the new array
  } // end of for loop

  return newArray; // Return the new array with the numbers 0 - 9
} // end of forLoop1()

console.log(forLoop1()); // the log method of the console object is calling 'forLoop1()'

/******************************************************************
forLoop2 purpose:
The purpose of this function is to count down from 100 to 0 using
a for loop and print a message for each countdown step.

forLoop2 Return(s):
This function returns the final countdown message "Time til explosion 0".
*******************************************************************/
function forLoop2() {
  let result = ''; // assigning a empty string for the forloop
  // this for loop will loop though 0 - 100 in reverse
  for (let i = 100; i >= 0; i--) {
    result = 'Time til explosion ' + i; // concatnated string assigned to result
    // so that we can only print 'Time til explosion 0' once to the console
    if (i > 0) {
      console.log(result);
    } // end of if statement
  } // end of for loop
  return result;
} // end of forLoop2()

console.log(forLoop2()); // the log method of the console object is calling 'forLoop2()'

/******************************************************************
forInLoop1 purpose:
The purpose of this function is to generate an array with values
ranging from 0 to 9 using a for...in loop.

forInLoop1 Return(s):
This function returns an array containing the properties of the
provided object.
*******************************************************************/
function forInLoop1(object) {
  const newArray = [];
  // looping though the objects parameter
  for (const property in object) {
    newArray.push(property); // pushing each property of the object into newArray
  } // end of for loop
  return newArray;
} // end of forInLoop1 function

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log(forInLoop1(object)); // the log method of the console object is calling forInLoop1() function with the arg object

/******************************************************************
forInLoop2 purpose:
The purpose of this function is to generate an array with values
ranging from 0 to 9 using a for...in loop.

forInLoop2 Return(s):
This function returns an array containing the values of the
properties from the provided object.
*******************************************************************/
function forInLoop2(object) {
  const newArray = []; // creating empty array called newArray
  for (const value in object) {
    newArray.push(object[value]);
  } // end of for loop
  return newArray;
} // end of forLoop2 function

console.log(forInLoop2(object)); // the log method of the console object is calling forInLoop2() function with the arg object
