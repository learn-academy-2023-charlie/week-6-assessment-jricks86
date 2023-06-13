// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("newArray", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(newArray(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// FAIL  week-6/week-6-assessment-jricks86/code-challenges.test.js
// ● newArray › returns an array with a sentence about each person with their name capitalized

//   ReferenceError: newArray is not defined

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Named new function newArray
function newArray(array) {
  // use map method to iterate over the array
  return array.map(person => {
    // declare new variable to make array a string
    const splitName = person.name.split(" ");
    // declare new variabe to make string capitalized at the first letter using charAt and toUpperCase then attach the rest of the word starting at the 1 index.
    const firstName = splitName[0,1].charAt(0).toUpperCase() + splitName[0].slice(1);
    // Use conditional statement that checks if the splitName array has more than one element and if so to capitalize first character of second element and concat with remaining. If one element, then assign empty string
    const lastName = splitName.length > 1 ? splitName[1].charAt(0).toUpperCase() + splitName[1].slice(1) : "";
    // use string interprelation for sentence
    return `${firstName} ${lastName} is ${person.occupation}.`;
  });
}
console.log(newArray(hitchhikersCharacters));

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("onlyRemainders", () => {
  it('retuns an array of only the remainders of the numbers when divided by 3', () => {
    expect(onlyRemainders(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(onlyRemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})
// ● onlyRemainders › retuns an array of only the remainders of the numbers when divided by 3

// ReferenceError: onlyRemainders is not defined

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

function onlyRemainders (array) {
  // use filter method to only find elements that are numbers
  const onlyNumbers = array.filter(value => typeof value ==='number')
  // use map method to create a new array with only the remainders when divided by three using modulo operator
  return onlyNumbers.map(value => value % 3)
}
console.log(onlyRemainders(hodgepodge1));
console.log(onlyRemainders(hodgepodge2));

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('sumFunction', () => {
  it('returns the sum of all the numbers cubed', () => {
    expect(sumFunction(cubeAndSum1)).toEqual(99)
    expect(sumFunction(cubeAndSum2)).toEqual(1125)
  })
})
// ● sumFunction › returns the sum of all the numbers cubed

// ReferenceError: sumFunction is not defined

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.


function sumFunction(array) {
  // use map method to create a new array with only the cubed numbers
  const sum = array.map(value => value * value * value)
  // use reduce method to sum the cubed numbers
    .reduce((acc, curr) => acc + curr, 0);
  return sum;
}

console.log(sumFunction(cubeAndSum1)); // Output: 99
console.log(sumFunction(cubeAndSum2)); // Output: 1125
