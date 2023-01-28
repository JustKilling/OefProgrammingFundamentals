/*
# Symptoms (exam 2020-2021)
This whole assignment is about logbooks of patients, in which
one can see whether or not the patient showed symptoms on any give date.

`{"date": "2021/12/31", "symptoms": False}` implies that the patient
did not show any symptoms on the thirty-first of December.

`{"date": "2021/12/31", "symptoms": True}` implies that the patient
did show symptoms on the thirty-first of December.

One such piece of information is what we call an entry
(pl.: entries) in this assignment.

You can assume that the entries in these logbooks are **always sorted
by date** and that the log books are complete. Here, complete means
that you will find one entry for every day between the start date
and the and date. In other words, the dates in these entries do not
show any holes or jumps.

Using such a log book with the history of symptoms, we can partition
the entries in three periods: incubation, sickness, and recovered.
If you do not understand, we can show you an example table that
visualizes this exactly.

===

Write the function `had_symptoms(patient_logbook, date)`
which checks whether a patient was showing symptoms on a given date.
*Do this using the most efficient technique you know (minimise the
number of steps in your search)*.

Note that there are only 10 entries in this example but that this could be
many many more in a real case. The entries are sorted by date, however.

Note that dates are represented by `strings` in this assignment
(e.g. `"2021/01/02"`).
By using this somewhat odd representation (first year, then month, then day),
we can use simple string comparisons to compare dates.

This means  `<`, `==`, `>` can be used to determine order.
(just like for numbers)

`d1 < d2` is (only) true when `d1` happens before `d2`.

`d1 == d2` is true when `d1` and `d2` represent the exact same date.

`d1 > d2` is (only) true when `d1` happens after `d2`.
*/
function hadSymptoms(logbook, date) {
  let entry = findByDate(logbook, date);
  return entry ? entry.symptoms : undefined;
}
function findByDate(logbook, date, start = 0, end = logbook.length) {
  if (end - start === 0) return undefined;

  let mid = start + Math.floor((end - start) / 2);
  let midEntry = logbook[mid];
  if (date < midEntry.date){
    return findByDate(logbook, date, start, mid);
  }else if(date > midEntry.date){
    return findByDate(logbook, date, mid + 1, end);
  }else{
    return midEntry;
  }
}
export {hadSymptoms};
