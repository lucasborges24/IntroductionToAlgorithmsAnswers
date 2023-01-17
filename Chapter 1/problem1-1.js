const second = 1 * 10 ** 6;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const month = 30 * day;
const year = 365 * month;
const century = 100 * year;
const unitsInMicroSeconds = {
  second,
  minute,
  hour,
  day,
  month,
  year,
  century,
};

const functions = {
  log_n: (time) => 2 ** time,
  sqrt_n: (time) => time ** 2,
  n: (time) => time,
  n_log_n: (time) => 1,
  n_square: (time) => Math.sqrt(time),
  n_cubed: (time) => time ** (1 / 3),
  two_to_the_nth: (time) => Math.log2(time),
  n_factorial: (time) => 1
};

const unitArray = [];
function evaluateUnits(units, handler) {
  const newObject = {};
  for (const functionn in handler) {
    newObject[functionn] = {};
    for (const unit in units) {
      const time = units[unit];
      newObject[functionn][unit] = handler[functionn](time);
    }
  }
  unitArray.push(newObject);
}
evaluateUnits(unitsInMicroSeconds, functions);

console.log(unitArray);
