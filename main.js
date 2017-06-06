// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a, b){
    if (a > b){
    return a;}
else {return b;}}
max(1,9);


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a, b, c){
    if (a > b && a > c){
      return a;}
    else if (b > a && b > c) {
      return b;}
      else {return c;}
}
maxOfThree(3, 90, 400);


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
      return true;}
      else {return false}
}
isVowel("b");


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum (a, b) {
  return (a + b)
}

sum (5,7)

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg (a, b, c){
  return ((a + b + c)/3)
}
avg(5,1,2);

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength (a){
  return (a.length)
}
getLength("This is a string");


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan (a, b){
  if (a > b)
  {return (true)}
  else {return (false)}
}

greaterThan (4, 500);

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet (a) {
  return ("Hello," + a + "!")
}
greet("Homie");

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

// I hope it's okay.  I remember doing this from the pre-work, but I think the pre-work added some additional elements that I had forgotten, so I re-did that one, which was basically the same, but with the addition of the randomization etc.

var people = ["Alice", "Bob", "Carol"];
var verbs = ["yelps", "chatters", "blurts"];
var nouns = ["turtle", "book", "tomato"];
var phrases = ["loves rock and roll", "was eaten by a lion", "walked across the street"];

var person = people[Math.floor(Math.random() * people.length)];
var verb = verbs[Math.floor(Math.random() * verbs.length)];
var noun = nouns[Math.floor(Math.random() * nouns.length)];
var phrase = phrases[Math.floor(Math.random() * phrases.length)];


function madlib (person, verb, noun, phrase){

  return ( person + " " + verb + " about the " + noun + " who " + phrase + ".") }

  madlib(person, verb, noun, phrase);
