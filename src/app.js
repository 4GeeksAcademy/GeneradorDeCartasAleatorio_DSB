/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  setInterval(generateCard, 10000);

  let simbolCard = ["♦", "♥", "♠", "♣"];
  let numCard = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function generateSimbol() {
    let randomSimbol =
      simbolCard[Math.floor(Math.random() * simbolCard.length)];
    return randomSimbol;
  }

  function generateNum() {
    let randomNum = numCard[Math.floor(Math.random() * numCard.length)];
    return randomNum;
  }

  function generateCard() {
    let generatedSimbol = generateSimbol();
    document.getElementById("card-simbol").innerHTML = generatedSimbol;
    document.getElementById("card-simbol-down").innerHTML = generatedSimbol;
    document.getElementById("card-num").innerHTML = generateNum();

    // Cambiar el color de la carta si es un símbolo rojo
    if (generatedSimbol === "♥" || generatedSimbol === "♦") {
      document.getElementById("card-simbol").style.color = "red";
      document.getElementById("card-simbol-down").style.color = "red";
      document.getElementById("card-num").style.color = "red";
    } else {
      document.getElementById("card-simbol").style.color = "black";
      document.getElementById("card-simbol-down").style.color = "black";
      document.getElementById("card-num").style.color = "black";
    }
  }

  // Generar una carta al cargar la página
  generateCard();

  // Agregar un botón para generar una nueva carta
  document.querySelector("button").addEventListener("click", generateCard);
};
