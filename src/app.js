/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateexcuse();
  });
  console.log("Hello Raquel from the console!");
};

let generateexcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["dog", "cat", "car", "dentist"];
  let action = ["bit my", "stole my", "took my", "hit my"];
  let possetion = ["head", "homework", "car", "ball", "shoe"];
  let where = [
    "in my house",
    "on the street",
    "in the park",
    "at the hospital"
  ];

  let pronIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possetion.length);
  let wherIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[possIndx] +
    " " +
    where[wherIndx]
  );
};
