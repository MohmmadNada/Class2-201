'use strict';

/*This file for lab2 in 8.2.2021*/
/*This file updated  to lab3 in 9.2.2021*/
let score = 0;
let UserName = prompt('What is your name?');
console.log(UserName);
alert('Welcome ' + UserName + " let's make some fun!!!");

function question1() {
    let answer1 = prompt('did you think  I am arabic man?');
    answer1 = answer1.toUpperCase();

    if (answer1 == "YES" || answer1 == "Y") {

        alert('Of course, I am  ');
        score++;
    } else if (answer1 == "NO" || answer1 == "Y") {
        alert("I am ");
    }
    console.log(answer1);
}
question1();


function question2() {
    let answer2 = prompt("Am I from Jordan?");

    answer2 = answer2.toUpperCase();

    if (answer2 == "YES" || answer2 == "Y") {
        alert('correct');
        score++;
    } else if (answer2 == "NO" || answer2 == "N") {
        alert("I am from Jordan  ");
    }
    console.log(answer2);
}
question2();


function question3() {
    let answer3 = prompt("is Zarqa the capital of jordan?");
    answer3 = answer3.toUpperCase();
    if (answer3 == "YES" || answer3 == "Y") {
        alert('No, it is amman  ');
    } else if (answer3 == "NO" || answer3 == "N") {
        alert("It's Amman ");
        score++;
    }
    console.log(answer3);
}
question3();

function question4() {
    let answer4 = prompt("do you think Real madrid is the most club have Champion's League?");

    answer4 = answer4.toUpperCase();
    if (answer4 == "YES" || answer4 == "Y") {
        alert('correct, it is ');
        score++;
    } else if (answer4 == "NO" || answer4 == "N") {
        alert("incorrect; it have ");

    }
    console.log(answer4);
}
question4();


function question5() {
    let question5 = prompt("is the petra beautiful?");

    question5 = question5.toUpperCase();

    if (question5 == "YES" || question5 == "Y") {
        alert('correct, Magic place ');
        score++;
    } else if (question5 == "NO" || question5 == "N") {
        alert("No, it is Magic place ");
    }
    console.log(question5);
}
question5();

function question6() {
    let question6 = prompt("Guss when I Graduate? ", "input year like 2019");

    let i = 0;

    for (i = 0; i < 5; i++) {
        if (question6 == 2019) {
            alert("correct answer");
            score++;
            break;
        } else if (question6 >= 2022 || question6 <= 2015) {
            alert("your answer so far ");


        } else {
            alert("your answer is close ");

        }
        question6 = prompt("Guss when I Graduate? ", "input year like 2019");

    }
    alert("the correct answer is 2019 ");
}
question6();

function question7() {
    let populationInJordan = [9, 10, 11];
    alert("you have 6 attemps ");

    let question7 = prompt("how mony pepole live in Jordan ", "the number consider in million");
    let i = 0;


    for (i = 0; i < 6; i++) {
        if (question7 == populationInJordan[0] || question7 == populationInJordan[1] || question7 == populationInJordan[2]) {
            alert("correct answer");
            score++;
            break;
        } else if (true) {
            alert("your answer is not correct ");
            question7 = prompt("how mony pepole live in Jordan?");
        }
    }

    alert("the correct answers are 9 , 10 or 11 ");


    alert("thank you " + UserName + " for your time");
}
console.log(score)
alert("the Total score is " + score + " from 7");
question7();