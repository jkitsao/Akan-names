//caching the DOM elements
// const year = document.getElementById("year");
// const month = document.getElementById("month");
// const gender = document.getElementById("gender");
// const button = document.getElementById("submit");
//variable initilization

var mm = null;
var dd = null;
//function to get the cc/centuary details
//the function gets the two first digits of a number
const cc = (y) => {
  let convert = y.toString();
  let sec = convert.split("")[0] + convert.split("")[1];
  let num = Number(sec);
  return num;
};
// console.log(cc(1978));

//get last year digits
//we
const yy = (y) => {
  let convert = y.toString();
  let sec = convert.split("")[2] + convert.split("")[3];
  let num = Number(sec);
  return num;
};
// console.log(yy(1978));

//function to get the day of the month
const getDay = (cc, yy, mm, dd) => {
  return Math.floor(
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
  );
};
console.log(getDay(cc(1943), yy(1943), 2, 17));
