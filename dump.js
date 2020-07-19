if (getDay(century, yearvalue, monthvalue, datevalue) === 0) {
    result.innerText = "you were born on a  sunday";
    akan.innerText = "your Akan name is Kwasi";
    greet.innerText = "hello there Kwasi";
  } else if (
    gendervalue == "Female" &&
    getDay(century, yearvalue, monthvalue, datevalue) === 0
  ) {
    result.innerText = "you were born on a  sunday";
    akan.innerText = "your Akan name is Akosua";
    greet.innerText = "hello there Akosua";
    console.log("hello");
  }

  if (getDay(century, yearvalue, monthvalue, datevalue) === 1) {
    result.innerText = "you were born on a  monday";
    akan.innerText = "your Akan name is Kwadwo";
    greet.innerText = "hello there Kwadwo";
  } else if (
    gendervalue == "Female" &&
    getDay(century, yearvalue, monthvalue, datevalue) === 1
  ) {
    result.innerText = "you were born on a  monday";
    akan.innerText = "your Akan name is Adwoa";
    greet.innerText = "hello there Adwoa";
    console.log("hello");
  }
  if (getDay(century, yearvalue, monthvalue, datevalue) === 2) {
    result.innerText = "you were born on a  Tuesday";
    akan.innerText = "your Akan name is Kwabena";
    greet.innerText = "hello there Kwabena";
  } else if (
    gendervalue == "Female" &&
    getDay(century, yearvalue, monthvalue, datevalue) === 2
  ) {
    result.innerText = "you were born on a  Tuesday";
    akan.innerText = "your Akan name is Abenna";
    greet.innerText = "hello there Abenna";
    console.log("hello");
  }

  if (getDay(century, yearvalue, monthvalue, datevalue) === 3) {
    result.innerText = "you were born on a  wednesday";
    akan.innerText = "your Akan name is Kwaku";
    greet.innerText = "hello there Kwaku";
  } else if (
    gendervalue == "Female" &&
    getDay(century, yearvalue, monthvalue, datevalue) === 3
  ) {
    result.innerText = "you were born on a  wednesday";
    akan.innerText = "your Akan name is Akua";
    greet.innerText = "hello there Akua";
    console.log("hello");
  }

  if (getDay(century, yearvalue, monthvalue, datevalue) === 4) {
    result.innerText = "you were born on a  Thursday";
    akan.innerText = "your Akan name is Yaw";
    greet.innerText = "hello there yaw";
  } else if (
    gendervalue == "Female" &&
    getDay(century, yearvalue, monthvalue, datevalue) === 4
  ) {
    result.innerText = "you were born on a  Thursday";
    akan.innerText = "your Akan name is Yaa";
    greet.innerText = "hello there yaa";
    console.log("hello");
  }
  if (getDay(century, yearvalue, monthvalue, datevalue) === 5) {
    result.innerText = "you were born on a  Friday";
    akan.innerText = "your Akan name is Kofi";
    greet.innerText = "hello there Kofi";
  } else if (
    gendervalue == "Female" &&
    getDay(century, yearvalue, monthvalue, datevalue) === 5
  ) {
    result.innerText = "you were born on a  Friday";
    akan.innerText = "your Akan name is Afua";
    greet.innerText = "hello there Afua";
    console.log("hello");
  }

  if (getDay(century, yearvalue, monthvalue, datevalue) === 6) {
    result.innerText = "you were born on a  Saturday";
    akan.innerText = "your Akan name is Kwame";
    greet.innerText = "hello there Kwame";
  } else if (
    gendervalue == "Female" &&
    getDay(century, yearvalue, monthvalue, datevalue) === 6
  ) {
    result.innerText = "you were born on a  Saturday";
    akan.innerText = "your Akan name is Ama ";
    greet.innerText = "hello there Ama";
    console.log("hello");
  }
  //female logic goes here
  // else if (gendervalue === "Female") {
  //   if (getDay(century, yearvalue, monthvalue, datevalue) === 0) {
  //   }

  //   if (getDay(century, yearvalue, monthvalue, datevalue) === 1) {

  //   }
  //   if (getDay(century, yearvalue, monthvalue, datevalue) === 2) {

  //   }

  //   if (getDay(century, yearvalue, monthvalue, datevalue) === 3) {

  //   }

  //   if (getDay(century, yearvalue, monthvalue, datevalue) === 4) {

  //   }
  //   if (getDay(century, yearvalue, monthvalue, datevalue) === 5) {

  //   }

  //   if (getDay(century, yearvalue, monthvalue, datevalue) === 6) {

  //   }
  // }
  // }
} else {
  const akanName = document.getElementById("akan-name");
  dweek.className = "text-danger";
  dweek.innerText = "invalid input please check your input";
  result.innerText = "";
  akan.innerText = "";
  akanName.innerText = "";
}