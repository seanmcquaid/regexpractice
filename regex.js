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

// You need to check all the usernames in a database. 
// Here are some simple rules that users have to follow 
// when creating their username.

// 1) The only numbers in the username have to be at the end. 
// There can be zero or more of them at the end.

// 2) Username letters can be lowercase and uppercase.

// 3) Usernames have to be at least two characters long. 
// A two-letter username can only use alphabet letter characters.

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);

// You can search for whitespace using \s, which is a lowercase s. 
// This pattern not only matches whitespace, but also carriage 
// return, tab, form feed, and new line characters. 

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

// Search for non-whitespace using \S, which is an uppercase s. 
// This pattern will not match whitespace, carriage return, 
// tab, form feed, and new line characters. 

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

// You can specify the lower and upper number of patterns 
// with quantity specifiers. Quantity specifiers are used with 
// curly brackets ({ and }). You put two numbers between the curly brackets 
// - for the lower and upper number of patterns.

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);

// You can specify the lower and upper number of patterns with quantity 
// specifiers using curly brackets. Sometimes you only want to specify 
// the lower number of patterns with no upper limit.

// To only specify the lower number of patterns, 
// keep the first number followed by a comma.

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // Change this line
let result = haRegex.test(haStr);

// You can specify the lower and upper number of patterns with quantity 
// specifiers using curly brackets. Sometimes you only want a 
// specific number of matches.

// To specify a certain number of patterns, just have 
// that one number between the curly brackets.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

// You can specify the possible existence of an element with a question mark,
// ?. This checks for zero or one of the preceding element. 
// You can think of this symbol as saying the previous element is optional.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

// Lookaheads are patterns that tell JavaScript to look-ahead in your 
// string to check for patterns further along. This can be useful 
// when you want to search for multiple patterns over the same string.

// There are two kinds of lookaheads: positive lookahead and negative 
// lookahead.

// A positive lookahead will look to make sure the element in the 
// search pattern is there, but won't actually match it. A positive 
// lookahead is used as (?=...) where the ... is the required part that 
// is not matched.

// On the other hand, a negative lookahead will look to make 
// sure the element in the search pattern is not there. A negative 
// lookahead is used as (?!...) where the ... is the pattern that 
// you do not want to be there. The rest of the pattern is returned 
// if the negative lookahead part is not present.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

// You can search for repeat substrings using capture groups. 
// Parentheses, ( and ), are used to find repeat substrings. 
// You put the regex of the pattern that will repeat in between 
// the parentheses.

// To specify where that repeat string will appear, 
// you use a backslash (\) and then a number. This number starts at 1 
// and increases with each additional capture group you use. 
// An example would be \1 to match the first group.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

// You can search and replace text in a string using .replace() 
// on a string. The inputs for .replace() is first the regex 
// pattern you want to search for. The second parameter is the 
// string to replace the match or a function to do something.

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

// Sometimes whitespace characters around strings are not 
// wanted but are there. Typical processing of strings is to 
// remove the whitespace at the start and end of it.


// Write a regex and use the appropriate string methods to 
// remove whitespace at the beginning and end of strings.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line