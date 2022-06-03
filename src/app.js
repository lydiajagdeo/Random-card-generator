/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardDiv = document.querySelector(".card");
  let numberSpan = document.querySelector(".number");
  let rank = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9];
  let suit = ["spades", "hearts", "diamonds", "clubs"];
  let selectedSuit = suit[getRandomInt(suit)];
  console.log(selectedSuit);
  cardDiv.classList.add(selectedSuit);
  numberSpan.innerHTML = rank[getRandomInt(rank)];
};
function getRandomInt(array) {
  return Math.floor(Math.random() * array.length);
}
