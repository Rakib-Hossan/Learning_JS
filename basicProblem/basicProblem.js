//Problem-1 : if mom give 1000 tk. Apple price is 380 tk and orange price is 350 tk. How much money shop keeper return you. Write a js program for this problem.
var momGiven = 1000;
var applePrice = 380;
var orangePrice = 350;
var totalCost = applePrice + orangePrice;
var shopKeeperReturn = momGiven - totalCost;
console.log(shopKeeperReturn);

//Problem-2 : write a js program to calculate the average marks of math, biology, chemistry, physics and English of a student.
let math = 75.27;
let biology = 65;
let chemistry = 80;
let physics = 55.47;
let english = 90.50;

let totalMark = (math + biology + chemistry + physics + english);

let average = (totalMark/5);
let averageMark = average.toFixed(2);

console.log(parseFloat(averageMark));

//Problem-3 : write a js program to add two string  
var textOne = 'i love';
var textTwo = 'my country';
var totalText = textOne + " " + textTwo;
console.log(totalText);

//Problem-4 : write a js program to find reminder 
let numOne = 25;
let numTwo =3;
let reminder = numOne % numTwo;
console.log(reminder);

//Problem-5 : write a js program to find the index of specific element from an array
var fruits = ['Apples', 'Banana', 'Orange']
console.log(fruits.indexOf("Banana"));

//Problem-6 : write a js program to replace the specific element from an array
var fruits = ['Apples', 'Banana', 'Orange']
fruits[1] = "Mango";
console.log(fruits);

//Problem-7 : write a js program to remove the an element from an array
var fruits = ['Apples', 'Banana', 'Orange']
fruits.pop();
console.log(fruits);

//Problem-8 : write a js program to add the an element from an array
var fruits = ['Apples', 'Banana', 'Orange']
fruits.push('Watermelon');
console.log(fruits);

//Problem-9 : The grading chart is 80 or above A+ grade, 70 or above A grade, 60 or above A- grade, 50 or above is B grade, 40 or above is c , 36 or above is D grade and 35 or less is F grade . Write a js program to find grade according to this grading chart.
let score = 75;

if(score>=80){
    console.log("Your Grade is A+");
}
else if(score<=79 && score>=70){
    console.log("Your Grade is A");
}
else if(score<=69 && score>=60){
    console.log("Your Grade is A-");
}
else if(score<=59 && score>=50){
    console.log("Your Grade is B");
}
else if(score<=49 && score>=40){
    console.log("Your Grade is C");
}
else if(score<=39 && score>=36){
    console.log("Your Grade is D");
}
else{
    console.log("Your Grade is F");
}

//Problem-10 : write js code for finding even and odd number;
let even = [];
let odd = [];
for ( let i=1; i<=20; i++){
    if(i%2==0){
        even.push(i);
    }
   else{
    odd.push(i);
   }
}
console.log("odd:");
console.log(odd);
console.log("even:");
console.log(even);

//Problem-11 : write js code for finding every array element using loop
var rolls = [1, 2, 5, 8, 25, 27, 33, 50];
for (let i=0; i<=rolls.length; i++){
    console.log(rolls[i]);
}

//Problem-12 : write js code for make average 3 values using js function
function makeAverage (num1,num2,num3){
    var total = num1 + num2 +num3;
    var average = total/3;
    return average;
}
var result = makeAverage(120,258,121);
console.log(result);

//Problem-13 : write a function which will take an array of integers and the size of that array and return the average of those values.
var numbers = [12,25,20,125,14,32];

function make_avg(value){
    var sum = 0;
    for(var i = 0; i<value.length; i++){
        var sum = sum + value[i];
        var average = sum/value.length;
    }
    return average;
}

var result = make_avg(numbers);
console.log(result);

//Problem-14 : Write a function which takes an integer value and tells whether this value is even or odd.
function oddEven(num){

    if(num%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
var result = oddEven(21);
console.log(result);

//Problem-15 : write a program to convert inch to feet 
function inchToFeet(inches){
    let feet = inches/12;
    return feet;
}
let yourFeet = inchToFeet(258);
console.log(yourFeet,"feet");

//Problem-16 : write a program to check leap yaer 
function leapYear(year){
    if((year%4==0) && (year%400==0)|| (year%100!=0)){
        return `${year} is Leap Year`;
    }
    else{
       return `${year} is Not Leap Year`;
    }
}

var checkYear = leapYear(2000);
console.log(checkYear);

//Problem-17 : write a program to get Odd Numbers of an array and get odd Sum of an array
let numbers = [12,65,14,15,17,89,54,61,48,56];

function oddSum(num){
    let sum = 0;
    for (let i =0; i<num.length; i++){
        if(num[i]%2!=0){
          sum = sum + num[i];
        }
    }
    return sum;
}

let result = oddSum(numbers);
console.log(result);

//Problem-18 : write a program to get factorial of number
function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
      fact = fact * i;
    }
    return fact;
  }
  
  var factValue = factorial(7);
  console.log(factValue);

//Problem-19 : write a program to print random number between 1 to 6
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(randomNumber(1,6));

//Problem-20 : write a program to sort name in alphabetically
const studentName = ['rihan', 'asad', 'sagor', 'akib', 'basar'];
console.log(studentName.sort());

//Problem-21 : write a program to sort numbers 
const studentRoll = [5, 2, 8, 10, 3, 4, 7, 6, 9, 1];
const sortedRoll = studentRoll.sort(function(a,b){
  return a-b;
});
console.log(sortedRoll);

//Problem-22 : write a program to find how many vowels in a sentence 
const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
const sentence = 'A quick brown fox jumps over the lazy dogs';
function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence); // to convert string to array
    letters.forEach(function(value){
      if(vowels.includes(value)){
        count++;
      }
    });
    return count;
  }
  console.log(countVowels(sentence));

//Problem-23 : write a program to find duplicate elements in an array

// using filter method 
const checkNumbers = [2,5,4,2,4,6,4,10,5,74, 4 ,1,];
const duplicates = checkNumbers.filter(function(value,index,array){
  return array.indexOf(value) !== index;
})
console.log(duplicates);

// using for loop 
const checkNumber = [2,5,4,2,4,6,4,10,5,74, 4 ,1,];
let freshNumbers = [];
let duplicate =  [];
function duplicates(num){
  
  for(let i = 0; i<num.length; i++){
    if(freshNumbers.indexOf(num[i]) === -1){
      freshNumbers.push(num[i]);
    }
    else{
      duplicate.push(num[i]);
    }
}
return {freshNumbers,duplicate};
}
console.log(duplicates(checkNumber));

//Problem-24 : how many time 'js' have in this follow sentence. What is the first index of 'js'

const givenSentence = 'Hi, this is Rakib. My hobby is to write program in JS. JS is an advanced level programming language. JS is most important language for web development. Without JS the website cannot run efficiently.';

const matchJS = givenSentence.match(/js/gi);
const matchTime = matchJS ? matchJS.length : 0;
console.log('The match time is: '+matchTime);

const firstIndexMatch = givenSentence.search(/js/gi);
const position = firstIndexMatch >= 0 ? firstIndexMatch : "not found";
console.log('The first index of match: '+position);

//Problem-25 : Find the index number of 'd' from the given array.

function linearSearch(arr, val){
  let l = arr.length;
  for(let i = 0; i < l; i++){
    if(arr[i]=== val){
      return i;
    }
  }
  return "not found!"
 }

 console.log(linearSearch(['a','b','c','d','e','f','g','h'], 'c'));

 //Problem-26 : Find the longest string and the index number of longest string from an Array

 const  checkNames= ['rakib hossan redoy', 'shakib Mahmud','hassan Ali','dewan fariha tasnim'];
 
 function longestName(names){
  let longestWord = '';

  for( longName of names){
    if(longName.length>longestWord.length){
      longestWord = longName;
    }
  }

  return [longestWord, names.indexOf(longestWord)];
 }

 console.log(longestName(checkNames));

//Problem-27 : Find the number between 1-100 which is divided by 3,5 and also divided by 3 and 5 together

function fooBar(num){
  let foobar = [];
  for(let i = 1; i <= num; i++){

    if(i % 15 === 0){
      foobar.push(i);
    }
    else if(i % 3 === 0){
      foobar.push(i);
    }
    else if(i % 5 === 0){
      foobar.push(i);
    }
  }
  return foobar;
}

console.log(fooBar(100));

//Problem-28 : Find the js falsy value from an Array

// using array filter method 
const mixedArr = ['rhr', undefined, 'rakib hossan', false, '', 'bangladesh', 54, 't', true, 'Thank You', NaN];

let trueValue = mixedArr.filter(function(ele){
  if(ele){
    return true;
  }
  else{
    return false;
  }
});

console.log(trueValue);

// using Boolean function 
let trueElement = mixedArr.filter(Boolean);

console.log(trueElement);

//Problem-29 : Find the js falsy value from an Object

const obj = {
  a : 'rhr', b : undefined,
  c : 'rakib hossan', d : false, 
  e : '', f : 'bangladesh', 
  g : 54, h : 't', 
  i : true, j : 'Thank You',
  k : NaN,
};

const trueObj = function(obj) {
  for (let i in obj){
    if(!obj[i]){
       delete obj[i];
    }
  }
  return obj;
}

console.log(trueObj(obj));