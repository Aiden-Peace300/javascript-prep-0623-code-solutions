/* Your JS goes in this file */
const age = 23;

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log(isAdult(age));

const student1Score = 99;

function didStudentPass(score) {
  if (score >= 70 && score <= 100) {
    return true;
  } else if (score <= 69) {
    return false;
  } else {
    return 'OUT OF BOUNDS';
  }
}

console.log(didStudentPass(student1Score));

const student2Score = 102;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 90 && score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}

console.log(gradeCalculator(student2Score));

const season = 'spring';

function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  }
}

console.log(seasonMessenger(season));

const dayOfTheWeek = 'thursday';

function dayDetector(dayOfTheWeek) {
  if (
    dayOfTheWeek === 'monday' ||
    dayOfTheWeek === 'tuesday' ||
    dayOfTheWeek === 'wednesday' ||
    dayOfTheWeek === 'thursday' ||
    dayOfTheWeek === 'friday'
  ) {
    return 'Its a weekday!';
  } else if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'Its a weekend!';
  }
}

console.log(dayDetector(dayOfTheWeek));
