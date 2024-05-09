import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import ConvertedAge from "./converted-age.js";

function handleConversionForm(e) {
  e.preventDefault();
  if (document.querySelector("p#converted-age-result")) {
    const pastResult = document.querySelector("p#converted-age-result");
    pastResult.remove();
  }
  const newP = document.createElement("p");
  newP.setAttribute("id", "converted-age-result");
  const conversionDiv = document.getElementById("left");

  const userAge = document.getElementById("user-age").value;
  const userPlanet = document.getElementById("planet-selection").value;
  const newConversion = new ConvertedAge(userAge);
  newP.innerText = `Your age on ${userPlanet} would be ${newConversion.getAge(userPlanet)}.`;
  conversionDiv.append(newP);
}

document.getElementById("age-conversion").addEventListener("submit", handleConversionForm);