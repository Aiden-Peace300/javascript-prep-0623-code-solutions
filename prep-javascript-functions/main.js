/******************************************************************
 addTwoNumbers purpose:
 The purpose of this function is to add the values contained
 in the parameters together and return the result.

 addTwoNumbers Return:
 addTwoNumbers will return a one numeric value.
*******************************************************************/
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2); // assigning the result of addTwoNumbers() to the addTwoNumbersResult variable
console.log('addTwoNumbers Exercise:', addTwoNumbersResult); // the log method of the console object calls two arguments string and 'addTwoNumbersResult'

/******************************************************************
 convertHoursToMinutes purpose:
 The purpose of this function is to convert the value contained
 in the parameter from hours into minutes and return the result.

 convertHoursToMinutes Return:
 convertHoursToMinutes will return a one numeric value.
*******************************************************************/
function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2, 2); // assigning the result of convertHoursToMinutes() to the convertHoursToMinutesResult variable
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult); // the log method of the console object calls two arguments string and 'convertHoursToMinutesResult'

/******************************************************************
 getGreeting purpose:
 The purpose of this function is to convert the value contained
 in the parameter from hours into minutes and return the result.

 getGreeting Return:
 getGreeting the log method of the console calling one argument
 that argument being a concatenated sting.
*******************************************************************/
function getGreeting(name) {
  return console.log('Hello ' + name);
}

var getGreetingResult = getGreeting('World'); // assigning the result of getGreeting() to the getGreetingResult variable
console.log('getGreeting Exercise:', getGreetingResult); // the log method of the console object calls two arguments string and 'getGreetingResult'

/******************************************************************
 addAndMultiplyBy5 purpose:
 The purpose of this function is to add the values contained
 within the parameters together, multiply that result by 5,
 and then return the result.

 addAndMultiplyBy5 Return:
 addAndMultiplyBy5 will return a one numeric value.
*******************************************************************/
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5); // assigning the result of addAndMultiplyBy5() to the addAndMultiplyBy5Result variable
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result); // the log method of the console object calls two arguments string and 'addAndMultiplyBy5Result'

/******************************************************************
 multiplyAndDivideBy5 purpose:
 The purpose of this function is to multiply the values in the
 parameters together, divide that result by 5, and return the result.

 multiplyAndDivideBy5 Return:
 multiplyAndDivideBy5 will return a one numeric value.
*******************************************************************/
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10); // assigning the result of multiplyAndDivideBy5() to the multiplyAndDivideBy5Result variable
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Result); // the log method of the console object calls two arguments string and 'multiplyAndDivideBy5Result'

/******************************************************************
 subtractTwoNumbers purpose:
 The purpose of this function is to subtract the values contained
 in the parameters and return the result.

 subtractTwoNumbers Return:
 subtractTwoNumbers will return a one numeric value.
*******************************************************************/
function subtractTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else if (num1 < num2) {
    return num2 - num1;
  }
}

var subtractTwoNumbersResult = subtractTwoNumbers(35, 10); // assigning the result of subtractTwoNumbers() to the subtractTwoNumbersResult variable
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult); // the log method of the console object calls two arguments string and 'subtractTwoNumbersResult'

/******************************************************************
 getCircleCircumference purpose:
 The purpose of this function is to use the value contained in
 the parameter to find the circumference of the circle and
 return the result.

 getCircleCircumference Return:
 getCircleCircumference will return a one numeric value.
*******************************************************************/
function getCircleCircumference(radius) {
  const c = 2 * Math.PI * radius;
  return c;
}

var getCircleCircumferenceResult = getCircleCircumference(5); // assigning the result of getCircleCircumference() to the getCircleCircumferenceResult variable
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult); // the log method of the console object calls two arguments string and 'getCircleCircumferenceResult'

/******************************************************************
 getFullName purpose:
 The purpose of this function is to use string concatenation on
 the values contained in the parameters and return the result.

 getFullName Return:
 getFullName will return a string
*******************************************************************/
function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

var getFullNameResult = getFullName('Juan', 'Ramirez'); // assigning the result of getFullName() to the getFullNameResult variable
console.log('getFullName Exercise:', getFullNameResult); // the log method of the console object calls two arguments string and 'getFullNameResult'

/******************************************************************
 cube purpose:
 The purpose of this function is to find the cube of the value
 contained in the parameter and return the result.

 cube Return:
 cube will return a one numeric value.
*******************************************************************/
function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5); // assigning the result of cube() to the cubeResult variable
console.log('cube Exercise:', cubeResult); // the log method of the console object calls two arguments string and 'cubeResult'
