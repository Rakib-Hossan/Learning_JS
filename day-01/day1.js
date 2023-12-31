/****************
(#) what is variable?
--> Variables are Containers for Storing Data
****************/

// How to declare variable in JavaScript

var name = "Rakib";

/******************
 here 'var' is the keyword to define as variable, 'name' is the variable name '=' is use to assign value in variable name, "Rakib" is the variable value which is set in 'name' variable, ";" is used to stop the statement .
 *****************/

/***************
 Rules of declare variable name

    1. variable name can not be any keywords.
    2. variable name has to be in one word. No space between variable name.
    3. variable name can not have quotation.
    4. variable name can not starts with a number but use number under variable name.
    5. to write long name of variable we use '_' between variable name. We also used camel case. 
    6. variable name are case sensitive.
****************/

// Different data type of variable

// String data type
var friend = 'Farhan'; // To write string we wrtie the value into "--" or '--'

// Numeric data type
var age = 18; 

// Boolean data type
var isTrue = true; // the boolean data type returns only true or false

// Undefined data type 
var job;

// how to check data type of any variable 
var myName = "rakib";
console.log(typeof(myName));// we used typeof function to find data type of variable


// to see output using js 

console.log("rakib");

// basic mathematical operator

// addition
var firstNum = 25;
var secondNum = 15;
var addition = firstNum + secondNum;
console.log (addition);

// subtraction
var firstNum = 35;
var secondNum = 15;
var subtraction = firstNum -secondNum;
console.log(subtraction);

// multiplication
var firstNum = 25;
var secondNum = 15;
var multiplication = firstNum * secondNum;
console.log(multiplication);

// division
var firstNum = 25;
var secondNum = 15;
var division = firstNum / secondNum;
console.log(division);

// reminder
var firstNum = 25;
var secondNum = 15;
var reminder = firstNum % secondNum;
console.log(reminder);

// shorthand of addition 

var sum = 23;
var sum = sum + 10;
console.log(sum);

var Num = 25;
Num+=10;
console.log(Num);

// shorthand of subtraction
var sub = 23;
var sub = sub - 10;
console.log(sub);

var Num = 25;
Num-=10;
console.log(Num);

// shorthand of multiplication
var mult = 23;
var mult = mult * 10;
console.log(mult);

var Num = 25;
Num*=10;
console.log(Num);

// shorthand of division
var divi = 23;
var divi = divi / 10;
console.log(divi);

var Num = 25;
Num/=10;
console.log(Num);

// shorthand of reminder
var rim = 23;
var rim = rim % 10;
console.log(rim);

var Num = 25;
Num%=10;
console.log(Num);

// To increase and decrease value of any variable we use ++ and -- symbol 
// Example of increase value 
var num =12;
 num++;
 var newNum = num;
 console.log(newNum);

// Example of decrease value 
var num =12;
 num--;
 var newNum = num;
 console.log(newNum);

// concatenation of string . concatenation means adding string from two different variable.
var firstName = "rakib";
var secondName = "hossan";
var fullName = firstName + secondName;
console.log(fullName);

// how to convert data type

// string to integer value 
var rollNo = "25";
console.log(typeof(rollNo));
var roll = parseInt(rollNo)// we use parseInt or parseFloat to convert string into integer or float.
console.log(typeof(roll));

// To used toFixed function to fixed floating number.
var numOne =0.25;
var numTwo = 0.2154;
var multi = numOne * numTwo;
var newAns = multi.toFixed(2);
var ans = parseFloat(newAns);
console.log(ans);


/*************
string method
*************/

// toUpperCase method
let myName = 'rakib hossan redoy';
let upperCaseName = myName.toUpperCase();
console.log(upperCaseName);

// toLowerCase method 
let sampleText = 'A QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
let lowerCaseText = sampleText.toLowerCase();
console.log(lowerCaseText);

// replace method 
let hobby = "Programming, Cricket, Reading"
let newHobby = hobby.replace('Reading','Traveling');
console.log(newHobby);

// slice method
let textSlice = "a quick brown fox jumps over the lazy dog";
let sliceText = textSlice.slice(8,17)
console.log(sliceText);

// substring method 
let textSub = 'A quick brown fox jumps over the lazy dog';
let subStringText = textSub.substring(8,13);
console.log(subStringText);

// substr method 
let SubText = 'A quick brown fox jumps over the lazy dog';
let subStrText = SubText.substr(8,15);
console.log(subStrText);

//split method
let textSplit = 'twinkle, twinkle little star. How I wonder, what you are? Like above the world so high. Like a diamond in the sky';
let splitText = textSplit.split('.');
console.log(splitText);

// concat method 
const myFirst = 'Rakib';
const myLast = 'Hossan';
const myFullName = myFirst.concat(' ', myLast);
console.log(myFullName);

// trim method 
let textTrim = '    A quick brown fox jumps over the lazy dog';
let TrimText = textTrim.trim();
console.log(TrimText);

/*******************
 string searching
 *******************/

// includes method
const massage = 'my country is my first love';
const isIncludesMassage = massage.includes('my');
console.log(isIncludesMassage);

// indexOf method 
const textIndex = 'there are nothing to hide';
const indexText = textIndex.indexOf('nothing');
console.log(indexText);

// lastindexOf 
const lastText = 'there are nothing to hide';
const lastIndexText = lastText.lastIndexOf('hide');
console.log(lastIndexText); 

// search
const textSearch = 'there are nothing to hide';
const searchText = textSearch.search('nothing');
console.log(searchText);

// match
const textMatch = 'there are nothing to hide';
const matchText = textMatch.match('e');
console.log(matchText);

//startsWith method
const textStart = 'my passion is my strength';
const startText = textStart.startsWith('my');
console.log(startText);

//endsWith method
const textEnd = 'my passion is my strength';
const endText = textEnd.endsWith('strength');
console.log(endText);

