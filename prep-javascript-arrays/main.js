const arrays = ['html', 'css', 'javascript', 'react', 'node', 'postgres']; // creating an Array called 'arrays' with six elements
console.log(arrays); // the log method of the console object calls one argument that argument being 'arrays'

const firstElement = arrays[0]; // Assigns the value arrays[0] (aka the first element of arrays object) to the variable 'firstElement'.
console.log('the first element of the array is ', firstElement); // the log method of the console object calls one argument that argument being 'firstElement'

const thirdElement = arrays[2]; // Assigns the value arrays[2] (aka the third element of arrays object) to the variable 'thirdElement'.
console.log('the third element of the array is ', thirdElement); // the log method of the console object calls one argument that argument being 'thirdElement'

const length =
  arrays.length; /* Assigns the value arrays.length (aka numerical value of how many
                                                                                 elements are in arrays) to the variable 'length'. */
console.log('The length of the array is ', length); // the log method of the console object calls two argument string and 'length'

const lastElement = arrays[length - 1]; // Assigns the value arrays[length -1] (aka the last element of arrays object) to the variable 'thirdElement'.
console.log('the last element of the array is ', lastElement); // the log method of the console object calls two arguments string and 'lastElement'
