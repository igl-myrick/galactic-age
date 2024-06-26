import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import ConvertedAge from "./converted-age.js";

function clearResult(element) {
  if (document.querySelector(element)) {
    const pastResult = document.querySelector(element);
    pastResult.remove();
  }
}

function displayError(elementToAppend, errorText, errorID) {
  const errorP = document.createElement("p");
  errorP.setAttribute("id", errorID);
  errorP.innerText = errorText;
  errorP.style.color = "red";
  elementToAppend.append(errorP);
}

function handleConversionForm(e) {
  e.preventDefault();
  clearResult("p#conversion-result-p");
  clearResult("p#conversion-error");
  const newP = document.createElement("p");
  newP.setAttribute("id", "conversion-result-p");
  const conversionDiv = document.getElementById("conversion-result");

  const userAge = parseInt(document.getElementById("user-age-1").value);
  const userPlanet = document.getElementById("planet-selection").value;
  if (userAge <= 0) {
    displayError(conversionDiv, "Please enter a positive number.", "conversion-error");
  } else {
    clearResult("p#conversion-error");
    const newConversion = new ConvertedAge(userAge);
    newP.innerText = `Your age on ${userPlanet} would be ${newConversion.getAge(userPlanet)}.`;
    conversionDiv.append(newP);
  }
}

function handleSinceBirthdayForm(e) {
  e.preventDefault();
  clearResult("p#since-birthday-result-p");
  clearResult("p#since-birthday-error");
  const newP = document.createElement("p");
  newP.setAttribute("id", "since-birthday-result-p");
  const sinceBirthdayDiv = document.getElementById("since-birthday-result");

  const userCurrentAge = parseInt(document.getElementById("user-age-2").value);
  const userPastAge = parseInt(document.getElementById("past-age").value);
  if ((userCurrentAge <= 0 || userPastAge <= 0) || (userCurrentAge <= 0 && userPastAge <= 0)) {
    displayError(sinceBirthdayDiv, "Please enter a positive number.", "since-birthday-error");
  } else if (userPastAge >= userCurrentAge) {
    displayError(sinceBirthdayDiv, "The second number must be lower than the first.", "since-birthday-error");
  } else {
    clearResult("p#since-birthday-error");
    const newConversion = new ConvertedAge(userCurrentAge);
    newP.innerText = newConversion.sinceBirthday(userPastAge);
    sinceBirthdayDiv.append(newP);
  }
}

function handleUntilBirthdayForm(e) {
  e.preventDefault();
  clearResult("p#until-birthday-result-p");
  clearResult("p#until-birthday-error");
  const newP = document.createElement("p");
  newP.setAttribute("id", "until-birthday-result-p");
  const untilBirthdayDiv = document.getElementById("until-birthday-result");

  const userCurrentAge = parseInt(document.getElementById("user-age-3").value);
  const userFutureAge = parseInt(document.getElementById("future-age").value);
  if ((userCurrentAge <= 0 || userFutureAge <= 0) || (userCurrentAge <= 0 && userFutureAge <= 0)) {
    displayError(untilBirthdayDiv, "Please enter a positive number.", "until-birthday-error");
  } else if (userCurrentAge >= userFutureAge) {
    displayError(untilBirthdayDiv, "The second number must be higher than the first.", "until-birthday-error");
  } else {
    clearResult("p#until-birthday-error");
    const newConversion = new ConvertedAge(userCurrentAge);
    newP.innerText = newConversion.untilBirthday(userFutureAge);
    untilBirthdayDiv.append(newP);
  }
}

document.getElementById("age-conversion").addEventListener("submit", handleConversionForm);
document.getElementById("since-birthday").addEventListener("submit", handleSinceBirthdayForm);
document.getElementById("until-birthday").addEventListener("submit", handleUntilBirthdayForm);