/* exported getValues */
function getValues(object) {
  const objArray = [];

  for (const key in object) {
    const value = object[key];
    objArray.push(value);
  }

  return objArray;
}
