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

let myContainer = document.getElementById("DuckImages");
let myButton = document.getElementById("results-button");
let resultssection = document.getElementById("results");

let image1 = document.getElementById("pic1");
let image2 = document.getElementById("pic2");
let image3 = document.getElementById("pic3");
let duckNames = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "pen",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "unicorn",
  "water-can",
  "wine-glass",
];
let allDucks = [];
let clicks = 0;

let clicksAllowed = 15;
//FUNCTIONS
function getRandomIndex() {
  return Math.floor(Math.random() * allDucks.length);
}

// CONSTRUCTORS

function Duck(name, fileExtension = "jpg") {
  this.name = name;
  this.src = `images/${this.name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
  allDucks.push(this);
}

for (let i = 0; i < duckNames.length; i++) {
  new Duck(duckNames[i]);
}

function getImages() {
  let imagesIndexes = [];
  let newindex = getRandomIndex();
  while (imagesIndexes.length < 3) {
    if (!imagesIndexes.includes(newindex)) {
      imagesIndexes.push(newindex);
    } else {
      newindex = getRandomIndex();
    }
  }

  let index1 = imagesIndexes.shift();
  let index2 = imagesIndexes.shift();
  let index3 = imagesIndexes.shift();
  image1.src = allDucks[index1].src;
  image2.src = allDucks[index2].src;
  image3.src = allDucks[index3].src;
  image1.alt = allDucks[index1].name;
  image2.alt = allDucks[index2].name;
  image3.alt = allDucks[index3].name;
  image1.id = index1;
  image2.id = index2;
  image3.id = index3;
  allDucks[index1].views += 1;
  allDucks[index2].views += 1;
  allDucks[index3].views += 1;
  console.log(allDucks);
}

function handleButtonClick(event) {
  let id = parseInt(event.target.id);
  let duck = allDucks[id];
  duck.clicks += 1;
  clicks += 1;
  if (clicks === clicksAllowed) {
    myContainer.removeEventListener("click", handleButtonClick);
    myContainer.textContent = "";
    myButton.hidden = false;
  } else {
    getImages();
  }
  // // if(clicks === clickAllowed) {
  //   renderResults();
  // }
}
getImages();

//   if (event.target === myContainer) alert("Please click an image");
// }
// clicks++;
// let clickedGoat = event.target.alt;
// console.log(clickedGoat);

function renderResults() {
  let ul = document.createElement("ul");
  resultssection.appendChild(ul);
  for (let i = 0; i < allDucks.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allDucks[i].name} had ${allDucks[i].views} views and ${allDucks[i].clicks} clicks`;
    ul.appendChild(li);
  }
}

//EXECUTABLE CODE

// renderGoats();

myContainer.addEventListener("click", handleButtonClick);
myButton.addEventListener("click", renderResults);
