/*
Instructions:

For this problem set you will be working with a
list of users stored as an array of
objects. The array has **already been provided for
you** as a variable named "users".

You can see the full list of us countries in the
provided file named `data.js`

All of the following problems require that you
use the `users` array to solve them.

Use any variables or methods deemed necessary
to solve each problem.

You can use either regular functions or
arrow functions for your callbacks
*/

const users = require('./data.js') // <- DO NOT Remove; this represents an array consisting of countries

/***********
Problem 1:

1. Using the `users` array, write a function called `printEmails` which returns an array that contains an email for each of the users.

2. Call the function and log the result of the function to the console:

 `console.log(printEmails())`

************/
console.log('Problem 1:')

// Add your code below this line

function printEmails() {
  return users.map((user) => {
    return user.email
  })
}

console.log(printEmails())
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `users` array, write a function called printHobbies which console.log's each hobby for each user

2. Call the function and log the result of the function to the console

 `console.log(printHobbies())`

************/
console.log('Problem 2:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `users` array, Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in


2. Call the function and log the result of the function to the console

 - running console.log(findHometownByState('NY'))` => should return an object representing jane

 - running `console.log(findHometownByState('CA'))` => should return an object representing david

************/
console.log('Problem 3:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `users` array, write a function called allLanguages which returns an array of all of the unique values for the languages that all the users know

2. Call the function and log the result of the function to the console

 - running console.log(allLanguages())` => should return an array similar to the following (with no duplicates):

 // ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]

************/
console.log('Problem 4:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 5:

1. Using the `users` array, write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in

2. Call the function and log the result of the function to the console

 - running console.log(hasFavoriteEditor('VS Code'))` => should return true
 - running console.log(hasFavoriteEditor('Eclipse'))` => should return false

************/
console.log('Problem 5:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 6:

1. Using the `users` array, Write a function called findByUsername which takes in a string as a parameter and returns an object from the users array that has that username

2. Call the function and log the result of the function to the console

 - running console.log(findByUsername('david'))` => should return an object representing the user 'david'
 - running console.log(findByUsername('james'))` => should return null


************/
console.log('Problem 6:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
