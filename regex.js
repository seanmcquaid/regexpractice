// Regex Notes

// In JS, regex will be enclosed in "/ /"

// .test() method takes the regex and applies it to a string 
// returns true or false

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
// console.log(result);

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

// "|" means or, this can match multiple cases

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

// /regex/i - i will ignore the case when searching for a match

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

// .match() method will apply the regex to the string and return an array of the matchs

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

// g flag searches for and can extract a pattern multiple times
// you are able to use multiple flags at once, ie: gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

// . = wildcard char
// can match any one character

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

// you can user character classes allow you to define a 
// group of characters you wish to match by placing them 
// inside square ([ and ]) brackets.
// For example, you want to match "bag", "big", and "bug" but not "bog". 
// You can create the regex /b[aiu]g/ to do this

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result);

// Inside a character set, you can define a range of characters
// to match using a hyphen character: -. 
// For example, to match lowercase letters a through e you would use [a-e].

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

// Using the hyphen (-) to match a range of characters is not limited 
// to letters. It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, 
// including the 0 and 5.

// Also, it is possible to combine a range of letters and 
// numbers in a single character set.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// To create a negated character set, you place a caret character (^) after 
// the opening bracket and before the characters you do not want to match.


// For example, /[^aeiou]/gi matches all characters that are not a vowel. 
// Note that characters like ., !, [, @, / and white space are matched 
// -the negated vowel character set only excludes the vowel characters.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou\d]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// Sometimes, you need to match a character (or group of characters) 
// that appears one or more times in a row. This means 
// it occurs at least once, and may be repeated.

// You can use the "+" character to check if that is the case. 
// Remember, the character or pattern has to be present consecutively. 
// That is, the character has to repeat one after the other.

// For example, /a+/g would find one match in "abc" and return ["a"]. 
// Because of the +, it would also find a single match in "aabc" 
// and return ["aa"].

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);


// There's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

// lazy vs greedy
// greedy match finds the longest string that fits the regex pattern and 
// returns it as a match
// lazy finds the smallest possibel pattern that 
// satisfies the regex pattern.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>/; // Change this line
let result = text.match(myRegex);

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/g; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);


// Outside of a character set, 
// the ^ is used to search for patterns at the beginning of strings.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);


// In the last challenge, you learned to use the caret character 
// to search for patterns at the beginning of strings. 
// There is also a way to search for patterns at the end of strings.

// You can search the end of strings using the dollar sign 
// character $ at the end of the regex.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

// The closest character class in JavaScript to match the alphabet is \w. 
// This shortcut is equal to [A-Za-z0-9_]. This character class 
// matches upper and lowercase letters plus numbers. 
// Note, this character class also includes the underscore character (_).

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// You can search for the opposite of the \w with \W. 
// Note, the opposite pattern uses a capital letter. 
// This shortcut is the same as [^A-Za-z0-9_].

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;


// Another common pattern is looking for just digits or numbers.
// The shortcut to look for digit characters is \d, with a lowercase d. 
// This is equal to the character class [0-9], 
// which looks for a single character of any number between zero and nine.

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;

// You can also search for non-digits using a similar shortcut 
// that uses an uppercase D instead.

// The shortcut to look for non-digit characters is \D. 
// This is equal to the character class [^0-9], which looks for 
// a single character that is not a number between zero and nine.

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;

