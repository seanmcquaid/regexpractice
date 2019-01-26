// Regex Notes

// In JS, regex will be enclosed in "/ /"

// .test() method takes the regex and applies it to a string 
// returns true or false

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line
// console.log(result);

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

// "|" means or, this can match multiple cases

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);

// /regex/i - i will ignore the case when searching for a match

// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);

// .match() method will apply the regex to the string and return an array of the matchs

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line

// g flag searches for and can extract a pattern multiple times
// you are able to use multiple flags at once, ie: gi

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line

// . = wildcard char
// can match any one character

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; // Change this line
// let result = unRegex.test(exampleStr);

// you can user character classes allow you to define a 
// group of characters you wish to match by placing them 
// inside square ([ and ]) brackets.
// For example, you want to match "bag", "big", and "bug" but not "bog". 
// You can create the regex /b[aiu]g/ to do this

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result);

// Inside a character set, you can define a range of characters
// to match using a hyphen character: -. 
// For example, to match lowercase letters a through e you would use [a-e].

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

// Using the hyphen (-) to match a range of characters is not limited 
// to letters. It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, 
// including the 0 and 5.

// Also, it is possible to combine a range of letters and 
// numbers in a single character set.

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line


