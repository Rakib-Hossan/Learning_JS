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

// Problem-15 : write a program to convert inch to feet 
function inchToFeet(inches){
    let feet = inches/12;
    return feet;
}
let yourFeet = inchToFeet(258);
console.log(yourFeet,"feet");

// Problem-16 : write a program to check leap yaer 
function leapYear(year){
    if((year%4==0) && (year%400==0)|| (year%100!=0)){
        return 'Leap Year';
    }
    else{
       return 'Not Leap Year';
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

//Problem-17 : write a program to get factorial of number
function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
      fact = fact * i;
    }
    return fact;
  }
  
  var factValue = factorial(7);
  console.log(factValue);