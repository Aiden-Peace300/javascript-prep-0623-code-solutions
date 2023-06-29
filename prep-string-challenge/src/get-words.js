/* exported getWords */
function getWords(string) {
  /* The split method splits a string into an array of
     substrings based on a specified separator.
     In this case, the separator can be a space character. */
  const words = string.split(' ');

  // Check if the string is empty or contains only spaces
  if (string.trim() === '') {
    return [];
  }

  return words;
}
