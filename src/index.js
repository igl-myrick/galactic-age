import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import ConvertedAge from "./converted-age.js";

function handleConversionForm(e) {
  e.preventDefault();
  if (document.querySelector("p#conversion-result-p")) {
    const pastResult = document.querySelector("p#conversion-result-p");
    pastResult.remove();
  }
  const newP = document.createElement("p");
  newP.setAttribute("id", "conversion-result-p");
  const conversionDiv = document.getElementById("conversion-result");

  const userAge = document.getElementById("user-age-1").value;
  const userPlanet = document.getElementById("planet-selection").value;
  const newConversion = new ConvertedAge(userAge);
  newP.innerText = `Your age on ${userPlanet} would be ${newConversion.getAge(userPlanet)}.`;
  conversionDiv.append(newP);
}

function handleSinceBirthdayForm(e) {
  e.preventDefault();
  if (document.querySelector("p#since-birthday-result-p")) {
    const pastResult = document.querySelector("p#since-birthday-result-p");
    pastResult.remove();
  }
  const newP = document.createElement("p");
  newP.setAttribute("id", "since-birthday-result-p");
  const sinceBirthdayDiv = document.getElementById("since-birthday-result");

  const userCurrentAge = document.getElementById("user-age-2").value;
  const userPastAge = document.getElementById("past-age").value;
  const newConversion = new ConvertedAge(userCurrentAge);
  newP.innerText = newConversion.sinceBirthday(userPastAge);
  sinceBirthdayDiv.append(newP);
}

function handleUntilBirthdayForm(e) {
  e.preventDefault();
  if (document.querySelector("p#until-birthday-result-p")) {
    const pastResult = document.querySelector("p#until-birthday-result-p");
    pastResult.remove();
  }
  const newP = document.createElement("p");
  newP.setAttribute("id", "until-birthday-result-p");
  const untilBirthdayDiv = document.getElementById("until-birthday-result");

  const userCurrentAge = document.getElementById("user-age-3").value;
  const userFutureAge = document.getElementById("future-age").value;
  const newConversion = new ConvertedAge(userCurrentAge);
  newP.innerText = newConversion.untilBirthday(userFutureAge);
  untilBirthdayDiv.append(newP);
}

document.getElementById("age-conversion").addEventListener("submit", handleConversionForm);
document.getElementById("since-birthday").addEventListener("submit", handleSinceBirthdayForm);
document.getElementById("until-birthday").addEventListener("submit", handleUntilBirthdayForm);