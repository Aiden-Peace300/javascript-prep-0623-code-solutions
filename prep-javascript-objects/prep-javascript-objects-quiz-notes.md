# prep-javascript-objects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What data types can object properties hold?
  ANSWER: In JavaScript, object properties can hold values of various data types.
  Here are the common data types that object properties can hold:

  1. Primitives:

  - String: A sequence of characters enclosed in single quotes ('') or double quotes ("").
  - Number: Numeric values, including integers and floating-point numbers.
  - Boolean: Either true or false.
  - Null: A special value that represents the intentional absence of any object value.
  - Undefined: A variable that has been declared but has not been assigned a value.

  2. Objects:

  - Object: An object is a collection of key-value pairs, where each
    value can be of any data type, including other objects.
  - Array: An ordered list of values, which can include values of any
    data type, including other arrays and objects.
  - Function: A reusable block of code that performs a specific task.

---

---

- Describe the syntax (structure) of object-literals in JavaScript.
  ANSWER: Object literals in JavaScript use curly braces ({}) to define objects with key-value pairs. The keys represent property names, and the values can be of any data type. This concise syntax allows for easy creation and initialization of objects, making code more readable and expressive.

## Notes

All student notes should be written here.

- 2 OTHER WAYS TO DECLARE OBJECT:

1. Use the keyword new to create and define a JavaScipt Object.
   EXAMPLE:
   var person = new Object();
   person.firstName: 'Miles',
   person.lastName: 'Morales',
   person.hobby: 'Creating Music';

2. Use an Object Constructor to create and define a JavaScript Object.
   EXAMPLE:
   function person(firstName, lastName, hobby){
   this.firstName = name;
   this.lastName = lastName;
   this.hobby = hobby;
   }
   let spiderMan = person('Miles', 'Morales', 'Creating Music');

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
