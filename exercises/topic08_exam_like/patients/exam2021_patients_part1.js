/*
# Symptoms (exam 2020-2021)
This whole assignment is about logbooks of patients, in which
one can see whether the patient showed symptoms on any give date.

`{"date": "2021/12/31", "symptoms": false}` implies that the patient
did not show any symptoms on the thirty-first of December.

`{"date": "2021/12/31", "symptoms": true}` implies that the patient
did show symptoms on the thirty-first of December.

One such piece of information is what we call an entry
(pl.: entries) in this assignment.

You can assume that the entries in these logbooks are **always sorted
by date** and that the log books are complete. Here, complete means
that you will find one entry for every day between the start date
and the and date. In other words, the dates in these entries do not
show any holes or jumps.

Using such a logbook with the history of symptoms, we can partition
the entries in three periods: incubation, sickness, and recovered.
If you do not understand, we can show you an example table that
visualizes this exactly.

===

## Find Indexes
Write (two) functions `indexOfFirstSymptomaticDay(logbook)` and
`indexOfLastSymptomaticDay(logbook)`
which look for the **index** on which the first symptom ever presented
itself and the **index** in which the last symptom
ever presented itself, respectively.

Make use of the tests to figure out how your functions should behave in
edge cases.

## Find Dates
Now, also write the two functions `firstSymptomaticDay(logbook)` and
`lastSymptomaticDay(logbook)` which return dates instead of indexes.
*Write as little new code as possible (for these last two functions).*

*/
function indexOfFirstSymptomaticDay(logbook) {
  for (let i = 0; i < logbook.length; i++) {
    if (logbook[i].symptoms) return i;
  }
}
function indexOfLastSymptomaticDay(logbook) {
  for (let i = logbook.length - 1; i >= 0; i--) {
    if (logbook[i].symptoms) return i;
  }
}
function firstSymptomaticDay(logbook) {
  let index = indexOfFirstSymptomaticDay(logbook);
  return index ? logbook[index].date : undefined;
}
function lastSymptomaticDay(logbook) {
  let index = indexOfLastSymptomaticDay(logbook);
  return index ? logbook[index].date : undefined;
}
export {
  indexOfFirstSymptomaticDay,
  indexOfLastSymptomaticDay,
  firstSymptomaticDay,
  lastSymptomaticDay
};
