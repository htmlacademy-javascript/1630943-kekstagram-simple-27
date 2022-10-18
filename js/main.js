function compareLineLength(currentLine , maxLength) {
if (currentLine.length <= maxLength) {
  return true
}
return false
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//источник - https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
