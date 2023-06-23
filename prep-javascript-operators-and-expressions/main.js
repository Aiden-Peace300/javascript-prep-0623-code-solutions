// Variables below
const number1 = 4; // Assigns the value 4 to the variable 'number1'.
const number2 = 7; // Assigns the value 7 to the variable 'number2'.
const product =
  number1 *
  number2; /* Calculates the product of 'number1' multiplied by 'number2'
                                           and assigns the result to the variable 'product'. */

const charge = 4.5; // Assigns the value 4.5 to the variable 'charge'.
const payment = 10; // Assigns the value 10 to the payment 'charge'.
const amountRemaining =
  payment -
  charge; /* Calculates the subtraction of the value of 'charge' from the value of 'payment'
                                                 and assigns the result to the variable 'amountRemaining'. */

const tests = 85; // Assigns the value 85 to the variable 'tests'.
const assignments = 92; // Assigns the value 92 to the variable 'assignments'.
const final = 95; // Assigns the value 95 to the variable 'final'.
const grade =
  (tests + assignments + final) /
  3; /* Calculates the average grade by adding the values of
                                                   'tests', 'assignments', and 'final', and then dividing
                                                   the sum by 3. The result is assigned to the variable 'grade'. */

const firstName = 'Aiden'; // Assigns the value 'Aiden' to the variable 'firstName'.
const lastName = 'Peace'; // Assigns the value 'Peace' to the variable 'lastName'.
const fullName =
  firstName +
  ' ' +
  lastName; /* Concatenates the values of 'firstName' and 'lastName'
                                                  together and assigns the resulting string to the variable 'fullName'. */

const pH = 6; // Assigns the value 6 to the variable 'pH'.
const isAcidic = pH > 7; /* Evaluates whether the pH is greater than 7
                                   and assigns the boolean result to 'isAcidic'. */

const numberOfSoldiers = 200; // Assigns the value 200 to the variable 'numberOfSoldiers'.
const isSparta =
  numberOfSoldiers ===
  300; /* Determines if 'numberOfSoldiers' is equal to 300 and assigns
                                                 the resulting boolean to 'isSparta'. */

let nickname; /* Declares a variable named 'nickname' without assigning it an initial value.
                                     Assigns the value of 'fullName' to the variable 'nickname'. */
nickname = fullName; // Assigns the value of 'fullName' to the variable 'nickname'.
nickname +=
  ' is the GOAT!'; /* Appends the string ' is the GOAT!' to the existing value of 'nickname'
                                     and updates the variable with the new concatenated string. */

console.log(
  'value of product:',
  product
); /* the log method of the console object has
                                                             two arguments a string and 'product' variable */
console.log(
  'typeof product:',
  typeof product
); /* the log method of the console object has
                                                             two arguments a string and typeof the variable 'product' */

console.log(
  'value of amountRemaining:',
  amountRemaining
); /* the log method of the console object has
                                                                     two arguments a string and 'amountRemaining' variable */
console.log(
  'typeof amountRemaining:',
  typeof amountRemaining
); /* the log method of the console object has
                                                                     two arguments a string and typeof the variable 'amountRemaining' */

console.log(
  'value of grade:',
  Math.floor(grade)
); /* the log method of the console object has
                                                           two arguments a string and the value of Math.floor(grade) */
console.log(
  'typeof grade:',
  typeof grade
); /* the log method of the console object has
                                                           two arguments a string and typeof the variable 'grade' */

console.log(
  'value of fullName:',
  fullName
); /* the log method of the console object has
                                                           two arguments a string and 'fullName' variable */
console.log(
  'typeof fullName:',
  typeof fullName
); /* the log method of the console object has
                                                           two arguments a string and typeof the variable 'fullName' */

console.log(
  'value of isAcidic:',
  isAcidic
); /* the log method of the console object has
                                                           two arguments a string and 'isAcidic' variable */
console.log(
  'typeof isAcidic:',
  typeof isAcidic
); /* the log method of the console object has
                                                           two arguments a string and typeof the variable 'isAcidic' */

console.log(
  'value of isSparta:',
  isSparta
); /* the log method of the console object has
                                                           two arguments a string and 'isSparta' variable */
console.log(
  'typeof isSparta:',
  typeof isSparta
); /* the log method of the console object has
                                                           two arguments a string and typeof the variable 'isSparta' */

console.log(
  'value of nickname:',
  nickname
); /* the log method of the console object has
                                                           two arguments a string and 'nickname' variable */
console.log(
  'typeof nickname:',
  typeof nickname
); /* the log method of the console object has
                                                           two arguments a string and typeof the variable 'nickname' */
