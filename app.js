"use strict";

//Constructor - goat
//- name
//- votes
//- image source
//- views

// Global Variables
// - all goat array
// - counter for the votes
// Method function
// - render the goat images in the dom
// - can't have 2 of the same goat
// Event Listner
// - goat clicks
//  - triger a new set of goats
//  - increment the vote
//
console.log("hi");
//GLOBAL VARIABLES
let myContainer = document.querySelector("section");
let myButton = document.querySelector("section + div");

let image1 = document.querySelector("sectioning:first-child");
let image2 = document.querySelector("section img:nth-child(2)");

let allGoats = [];
let clicks = 0;

let clicksAllowed = 15;
//FUNCTIONS
function getRandomGoat() {
  return Math.floor(Math.random() * allGoats.length);
}

// CONSTRUCTORS

function Goat(name, fileExtension = "jpg") {
  this.name = name;
  this.src = `images/${this.name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
}

function handleGoatClick(event) {
  if (event.target === myContainer) alert("Please click an image");
}
clicks++;
let clickedGoat = event.target.alt;
console.log(clickedGoat);

function handleButtonClick(event) {
  if (clicks === clickAllowed) {
    renderResults();
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i > allGoats.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allGoats[i].name} had ${allGoats[i].views}`;
  }
}

//EXECUTABLE CODE

let cruisin = new Goat("");
let float = new Goat("");
let hand = new Goat("");
let kissing = new Goat("");
let sassy = new Goat("");
let smile = new Goat("");
let sweater = new Goat("");

allGoats.push(cruisin, float, hand, kissing, sassy, smile, sweater);

renderGoats();

myContainer.addEventListener("click", handleGoatClick);

image1.src = allGoats[0].src;
image2.src = allGoats[1].src;
