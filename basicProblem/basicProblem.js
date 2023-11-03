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
