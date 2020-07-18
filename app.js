//caching the DOM elements

// const gender = document.getElementById("gender");
const button = document.getElementById("submit");
//variable initilization

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
  let num = parseInt(sec, 10);
  return num;
};
// console.log(yy(1978));

//function to get the day of the month
const getDay = (cc, yy, mm, dd) => {
  return Math.floor(
    (cc / 4 - 2 * (cc - 1) + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
  );
};
const year = document.getElementById("year");
const month = document.getElementById("month");
const result = document.getElementById("result");
const date = document.getElementById("date");

button.addEventListener("click", function (e) {
  var first = cc(year.value);
  var second = yy(year.value);
  var third = month.value;
  var fourth = date.value;

  if (getDay(first, second, third, fourth) === 0)
    return (result.innerText = "sunday");
  if (getDay(first, second, third, fourth) === 1)
    return (result.innerText = "monday");
  if (getDay(first, second, third, fourth) === 2)
    return (result.innerText = "tuesday");
  if (getDay(first, second, third, fourth) === 3)
    return (result.innerText = "wednesday");
  if (getDay(first, second, third, fourth) === 4)
    return (result.innerText = "thursday");
  if (getDay(first, second, third, fourth) === 5)
    return (result.innerText = "friday");
  if (getDay(first, second, third, fourth) === 6)
    return (result.innerText = "saturday");
  else {
    return (result.innerText = "error");
  }
  //   console.log(cc(year.value));
  //   console.log(yy(year.value));

  //   event.preventDefault();
});
