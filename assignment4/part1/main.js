/*
Name: Justin Bourne
File: main.js
Date: 6 November 2024
The Javascript file that allows the random story generator to run as intended.
*/

//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const insertY = ['the soup kitchen', 'Disneyland', 'the White House',]
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away',]


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    //Create a new random story every time the button is pressed
    let newStory = storyText

    //Create variables for calling a random value from each array
    xItem = randomValueFromArray(insertX)
    yItem = randomValueFromArray(insertY)
    zItem = randomValueFromArray(insertZ)

  if(customName.value !== '') {
    const name = customName.value;
    //replace(storyText = Bob, name)

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature =  `${Math.round((94-32)*5/9)} centigrade`;
    const updated = weight.replace("300 pounds", weight);
    const updated2 = temperature.replace("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
