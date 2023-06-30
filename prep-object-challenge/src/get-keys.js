/* exported getKeys */
function getKeys(object) {
  const objArray = [];

  for (const key in object) {
    objArray.push(key.toString());
  }

  return objArray;
}
