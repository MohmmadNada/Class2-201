'use strict';

/*This file for lab2 in 8.2.2021*/
/*This file updated  to lab3 in 9.2.2021*/
let score = 0;
let UserName = prompt('What is your name?');
console.log(UserName);
alert('Welcome ' + UserName + " let's make some fun!!!");

function q1(){
let Q1 = prompt('did you think  I am arabic man?');
Q1 = Q1.toUpperCase();

if (Q1 == "YES" || Q1 == "Y") {

    alert('Of course, I am  ');
    score++ ;
}
else if (Q1 == "NO" || Q1 == "Y") {
    alert("I am ");
}
console.log(Q1);
}
q1();


function q2(){
let Q2 = prompt("Am I from Jordan?");

Q2 = Q2.toUpperCase();

if (Q2 == "YES" || Q2 == "Y") {
    alert('correct');
    score++ ;
}
else if (Q2 == "NO" || Q2 == "N") {
    alert("I am from Jordan  ");
}
console.log(Q2);
}
q2();


function q3()
{
let Q3 = prompt("is Zarqa the capital of jordan?");
Q3 = Q3.toUpperCase();
if (Q3 == "YES" || Q3 == "Y") {
    alert('No, it is amman  ');
}
else if (Q3 == "NO" || Q3 == "N") {
    alert("It's Amman ");
    score++ ;
}
console.log(Q3);
}
q3();

function q4()
{
let Q4 = prompt("do you think Real madrid is the most club have Champion's League?");

Q4 = Q4.toUpperCase();
if (Q4 == "YES" || Q4 == "Y") {
    alert('correct, it is ');
    score++ ;
}
else if (Q4 == "NO" || Q4 == "N") {
    alert("incorrect; it have ");
    
}
console.log(Q4);
}
q4();
 

function q5(){
let Q5 = prompt("is the petra beautiful?");

Q5 = Q5.toUpperCase();

if (Q5 == "YES" || Q5 == "Y") {
    alert('correct, Magic place ');
    score++ ;
}
else if (Q5 == "NO" || Q5 == "N") {
    alert("No, it is Magic place ");
}
console.log(Q5);
}
q5();
function q6(){
let Q6 = prompt("Guss when I Graduate? ", "input year like 2019");

let i = 0;

for (i = 0; i < 5; i++) {
    if (Q6 == 2019) {
        alert("correct answer");
        score++;
        break;
    }
    else if (Q6 >= 2022 || Q6 <= 2015) {
        alert("your answer so far ");
        
        
    }
    else {
        alert("your answer is close ");
        
    }
    Q6 = prompt("Guss when I Graduate? ", "input year like 2019");
    
}
alert("the correct answer is 2019 ");
}
q6();

function q7(){
    let populationInJordan = [9, 10, 11];
    alert("you have 6 attemps ");
    
    let Q7 = prompt("how mony pepole live in Jordan ", "the number consider in million");
    let i = 0;


for (i = 0; i < 6; i++) {
    if (Q7 == populationInJordan[0] || Q7 == populationInJordan[1] || Q7 ==populationInJordan[2]) {
        alert("correct answer");
        score++ ;
        break;
    }
    
    else if (true) {
        alert("your answer is not correct ");
        Q7 = prompt("how mony pepole live in Jordan?");
    }
}

alert("the correct answers are 9 , 10 or 11 ");


alert("thank you " + UserName + " for your time"); 
}
console.log(score)
alert("the Total score is "+ score + " from 7");
q7();