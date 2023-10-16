"use strict";
// Concatenating two strings
const greeting = "Hello there";
const intro = "my name is Joe";
const introduction = greeting.concat(", ", intro);
console.log(introduction);
//
// I didn't like the automatic format of the date so I created a new one
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
const combinedDate = [currentDay, currentMonth, currentYear].join("/");
//
// Generating a random number between 0 and 99 as well as the current date
const aNumber = Math.floor(Math.random() * 100);
console.log("Today is " + combinedDate + " which means I am " + aNumber + " years old");
//
// If-else statement
if (aNumber > 49) {
    console.log("(oof, I'm getting old)");
}
else {
    console.log("(I'm so young!)");
}
//
// Creating an array, counting the amount of items in the array by using .length and adding to the array using push()
const animals = ["dog", "cat", "snake", "spider", "sloth"];
console.log("I have " + animals.length + " animals, but I want more...");
const amount = animals.push("hamster");
console.log("Now I have " + amount + "!");
//
// Using a function to generate a random item from the array
function getRandomAnimal(animals) {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const animal = animals[randomIndex];
    return animal;
}
console.log("My favourite animal is a " + getRandomAnimal(animals));
function createAnimal(name, type, colour) {
    return {
        name,
        type,
        colour,
    };
}
const myAnimal = createAnimal("Bobo", "dog", "orange");
const otherAnimal = createAnimal("Coco", "sloth", "purple");
const thirdAnimal = createAnimal("Loco", "cat", "pink");
console.log("I have an animal called " + myAnimal.name + ", who is an " + myAnimal.colour + " " + myAnimal.type +
    ". I also have a " + otherAnimal.colour + " " + otherAnimal.type + " named " + otherAnimal.name + ".");
//
console.log("This whole story is...");
/* Generating a random number to use the boolean function
If the random number is higher than 50, the console will display true.
If it's 50 or lower the console will display false */
const randomNum = Math.floor(Math.random() * 100);
console.log(Boolean(randomNum > 50));
