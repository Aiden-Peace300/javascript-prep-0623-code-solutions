const person = {
  /* declaring person object with the initial properties
                                being 'firstName', 'lastName', and 'hobby' */
  firstName: 'Miles', // Assigns the value 'Miles' to the variable 'firstName' inside the person object.
  lastName: 'Morales', // Assigns the value 'Morales' to the variable 'lastName' inside the person object.
  hobby: 'Creating Music', // Assigns the value 'Creating Music' to the variable 'hobby' inside the person object.
}; // closing bracket to properly close the person object

const fullName = person.firstName + ' ' + person.lastName + '.';
person.job = 'Being Neighborhood Spider-Man'; // Add a new property (the job property - with dot notation) to the person object
person['previousJob'] = 'Unemployed / Highschool Student'; // Add a new property (the previousJob property - with bracket notation) to the person object

console.log(person); // the log method of the console object has 1 argument that argument being person object.

console.log(
  "The person's name is",
  fullName
); /* the log method of the console object has 2 arguments
                                                    first argument being a sting the second argument is 'fullname' variable */

console.log(
  "The person's job is",
  person.job
); /* the log method of the console object has 2 arguments first argument being a sting
                                                     the second argument is 'person.job' (dot notation) variable of the person object */

console.log(
  "The person's previous job is",
  person['previousJob']
); /* the log method of the console object has 2 arguments first argument being a sting the
                                                                         second argument is 'person['previousJob']' (bracket notation) variable of the person object */

console.log(person); // the log method of the console object has 1 argument that argument being person object.
