/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const lb = 2.2046;
  const grm = 0.001;
  const oz = 35.274;

  const kg = document.getElementById("search").value;

  const output = document.getElementById("output");

  const lbsText = document.createElement("h4");

  const grmText = document.createElement("h4");

  const ozText = document.createElement("h4");

  lbsText.textContent = "Svoris lb: " + kg * lb + " lb";
  grmText.textContent = "Svoris gramais: " + kg / grm + " gramai";
  ozText.textContent = "Svoris oz: " + kg * oz + " oz";

  output.append(lbsText, grmText, ozText);
});
