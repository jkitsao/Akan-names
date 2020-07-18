//caching the DOM elements

// const gender = document.getElementById("gender");
const button = document.getElementById("submit");
//variable initilization

//function to get the cc/centuary details
//the function gets the two century digits of a number
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
const gender = document.getElementById("gender");
const akan = document.getElementById("akan");
const dweek = document.getElementById("dweek");
button.addEventListener("click", function (e) {
  var century = cc(year.value);
  var yearvalue = yy(year.value);
  var monthvalue = month.value;
  var datevalue = date.value;
  var gendervalue = gender.value;
  // console.log();
  if (
    century.length === 4 &&
    yearvalue.length === 4 &&
    monthvalue > 0 &&
    monthvalue <= 12 &&
    datevalue > 0 &&
    datevalue <= 31
  ) {
    if (
      getDay(century, yearvalue, monthvalue, datevalue) === 0 &&
      fifth === "Male"
    ) {
      result.innerText = "sunday";
      akan.innerText = "Kwasi";
    }
    akan.innerText = "Akosua";
    if (getDay(century, yearvalue, monthvalue, datevalue) === 1) {
      result.innerText = "monday";
      akan.innerText = "Kwadwo";
    }
    akan.innerText = "Adwoa";
    if (getDay(century, yearvalue, monthvalue, datevalue) === 2) {
      result.innerText = "Tuesday";
      akan.innerText = "Kwabena";
    }
    akan.innerText = "Abenna";
    if (getDay(century, yearvalue, monthvalue, datevalue) === 3) {
      result.innerText = "wednesday";
      akan.innerText = "Kwaku";
    }
    akan.innerText = "Akua";
    if (getDay(century, yearvalue, monthvalue, datevalue) === 4) {
      result.innerText = "Thursday";
      akan.innerText = "Yaw";
    }
    if (getDay(century, yearvalue, monthvalue, datevalue) === 5) {
      result.innerText = "Friday";
      akan.innerText = "Kofi";
    }
    if (getDay(century, yearvalue, monthvalue, datevalue) === 6) {
      result.innerText = "Saturday";
      akan.innerText = "Kwame";
    } else {
      return (result.innerText = "error");
    }
    //   console.log(cc(year.value));
    //   console.log(yy(year.value));

    //   event.preventDefault();
  } else {
    const akanName = document.getElementById("akan-name");
    dweek.className = "text-danger";
    dweek.innerText = "Please enter a valid input ";
    result.innerText = "";
    akan.innerText = "";
    akanName.innerText = "";
  }
});
