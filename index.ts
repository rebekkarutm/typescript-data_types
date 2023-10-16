// Concatenating two strings
const greeting: string = "Hello there"
const intro: string = "my name is Joe"
const introduction: string = greeting.concat(", ", intro);
console.log(introduction)
//
// I didn't like the automatic format of current date so I created a new one
const date = new Date()
const currentYear = date.getFullYear()
const currentMonth = date.getMonth() + 1
const currentDay = date.getDate()
const combinedDate = [currentDay, currentMonth, currentYear].join("/")
//
// Generating a random number between 0 and 99 as well as current date
const aNumber: number = Math.floor(Math.random() * 100)
console.log("Today is " + combinedDate + " which means I am " + aNumber + " years old")
//
// If-else statement
if (aNumber > 49) {
    console.log("(oof, I'm getting old)")
} else {console.log("(I'm so young!)")}
//
// Creating an array, counting the amount of items in the array by using .length and adding to the array using push()
const animals: string[] = ["dog", "cat", "snake", "spider", "sloth"]
console.log("I have " + animals.length + " animals, but I want more...")
const amount = animals.push("hamster")
console.log("Now I have " + amount + "!")
//
// Using a function to generate a random item from the array
function getRandomAnimal(animals: string[]) {
    const randomIndex = Math.floor(Math.random() * animals.length)
    const animal = animals[randomIndex]
    return animal
}
console.log("My favourite animal is a " + getRandomAnimal(animals))
//
// Creating an object and adding properties to it
interface animal {
    name: string;
    type: string;
    colour?: string;
}
function createAnimal (name: string, type: string, colour: string): animal {
    return {
        name,
        type,
        colour,
    }
}
const myAnimal: animal = createAnimal("Bobo", "dog", "orange")
const otherAnimal: animal = createAnimal("Coco", "sloth", "purple")
const thirdAnimal: animal = createAnimal("Loco", "cat", "pink")
console.log("I have an animal called " + myAnimal.name + ", who is an " + myAnimal.colour + " " + myAnimal.type + 
". I also have a " + otherAnimal.colour + " " + otherAnimal.type + " named " + otherAnimal.name + ".")
//
console.log("This whole story is...")
/* Generating a random number to use the boolean function
If the random number is higher than 50, the console will display true.
If it's 50 or lower the console will display false */
const randomNum: number = Math.floor(Math.random() * 100)
console.log(Boolean(randomNum > 50))