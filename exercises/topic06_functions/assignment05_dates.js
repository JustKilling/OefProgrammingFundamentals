/*
Implements the functions
`isLeapYear`,
`numberOfDaysInMonth`,
`numberOfDaysInYear`,
`numberOfDay` (compute the number of days until this day in a given year), and
`dayDifference`
such that all tests succeed.

If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.
*/

const NUMBER_OF_DAYS_IN_MONTH = {
  true: [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],  // leap year
  false: [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  // non leap year
};

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function numberOfDaysInMonth(year, month) {
  const leapYear = isLeapYear(year);
  return NUMBER_OF_DAYS_IN_MONTH[leapYear][month];
}

function numberOfDaysInYear(year) {
  const leapYear = isLeapYear(year);
  let totalDays = 0;
  for (let i = 1; i < NUMBER_OF_DAYS_IN_MONTH[leapYear].length; i++) {
    totalDays += NUMBER_OF_DAYS_IN_MONTH[leapYear][i];
  }
  return totalDays;
}


function numberOfDay(year, month, day) {
  let result = day;
  for (let i = 1; i < month; i++) {
    result += numberOfDaysInMonth(year, i);
  }
  return result;
}

function dayDifference(startYear, startMonth, startDay, endYear, endMonth, endDay) {
  // Calculate the number of days from the start date to the end of the start year
  let result = numberOfDay(startYear, startMonth, startDay);
  // Add the number of days in each year between the start and end years, if there are any
  for (let i = startYear + 1; i < endYear; i++) {
    result += numberOfDaysInYear(i);
  }
  // Add the number of days from the start of the end year to the end date
  result += numberOfDay(endYear, endMonth, endDay);
  // Return the total number of days
  return result;
}

export {isLeapYear, numberOfDaysInYear, numberOfDaysInMonth, numberOfDay, dayDifference};

