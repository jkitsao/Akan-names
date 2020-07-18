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
const greet = document.getElementById("greet");
button.addEventListener("click", function (e) {
  var century = cc(year.value);
  var yearvalue = yy(year.value);
  var monthvalue = month.value;
  var datevalue = date.value;
  var gendervalue = gender.value;
  // console.log(year.value.length);
  if (
    year.value.length === 4 &&
    monthvalue > 0 &&
    monthvalue <= 12 &&
    datevalue > 0 &&
    datevalue <= 31
    // true == true
  ) {
    dweek.innerText = " ";
    akanName.innerText = "";
    if (
      getDay(century, yearvalue, monthvalue, datevalue) === 0 &&
      gendervalue === "Male"
    ) {
      result.innerText = "you were born on a  sunday";
      akan.innerText = "your Akan name is Kwasi";
      greet.innerText = "hello there Kwasi";
    } else if (gendervalue === "Female") {
      akan.innerText = "your Akan name is Akosua";
      greet.innerText = "hello there Akosua";
    }

    if (getDay(century, yearvalue, monthvalue, datevalue) === 1) {
      result.innerText = "you were born on a  monday";
      akan.innerText = "your Akan name is Kwadwo";
      greet.innerText = "hello there Kwadwo";
    } else if (gendervalue === "Female") {
      akan.innerText = "your Akan name is Adwoa";
      greet.innerText = "hello there Adwoa";
    }
    if (getDay(century, yearvalue, monthvalue, datevalue) === 2) {
      result.innerText = "you were born on a  Tuesday";
      akan.innerText = "your Akan name is Kwabena";
      greet.innerText = "hello there Kwabena";
    } else if (gendervalue === "Female") {
      akan.innerText = "your Akan name is Abenaa";
      greet.innerText = "hello there Abenaa";
    }

    if (getDay(century, yearvalue, monthvalue, datevalue) === 3) {
      result.innerText = "you were born on a  wednesday";
      akan.innerText = "your Akan name is Kwaku";
      greet.innerText = "hello there Kwaku";
    } else if (gendervalue === "Female") {
      akan.innerText = "your Akan name is Akua";
      greet.innerText = "hello there Akua";
    }

    if (getDay(century, yearvalue, monthvalue, datevalue) === 4) {
      result.innerText = "you were born on a  Thursday";
      akan.innerText = "your Akan name is Yaw";
      greet.innerText = "hello there yaw";
    } else if (gendervalue === "Female") {
      akan.innerText = "your Akan name is Yaa";
      greet.innerText = "hello there Yaa";
    }

    if (getDay(century, yearvalue, monthvalue, datevalue) === 5) {
      result.innerText = "you were born on a  Friday";
      akan.innerText = "your Akan name is Kofi";
      greet.innerText = "hello there Kofi";
    } else if (gendervalue === "Female") {
      akan.innerText = "your Akan name is Afua";
      greet.innerText = "hello there Afua";
    }

    if (getDay(century, yearvalue, monthvalue, datevalue) === 6) {
      result.innerText = "you were born on a  Saturday";
      akan.innerText = "your Akan name is Kwame";
      greet.innerText = "hello there Kwame";
    } else if (gendervalue === "Female") {
      akan.innerText = "your Akan name is Ama";
      greet.innerText = "hello there Ama";
    }
  } else {
    const akanName = document.getElementById("akan-name");
    dweek.className = "text-danger";
    dweek.innerText = "invalid input please check your input";
    result.innerText = "";
    akan.innerText = "";
    akanName.innerText = "";
  }
});
