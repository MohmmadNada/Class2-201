'use strict';

/*This file fore lab2 in 8.2.2021*/

let UserName = prompt('What is your name?');
//console.log(UserName);
alert('Welcome ' + UserName + " let's make some fun!!!");

let Q1 = prompt('did you think the arabic language is difficult?');
Q1 = Q1.toUpperCase();

if (Q1 == "YES" || Q1 == "Y") {

    alert('Of course, It is easy ');
}
else if (Q1 == "NO" || Q1 == "Y") {
    alert("It is so easy");
}
//console.log(Q1);

let Weather = prompt("do you think the weather is hot in everest?");

Weather = Weather.toUpperCase();

if (Weather == "YES" || Weather == "Y") {
    alert('incorrect, it is cold');
}
else if (Weather == "NO" || Weather == "N") {
    alert("Of course, It is so cold ");
}
console.log(Weather);



let wordcup = prompt("do you think Brazil is the most country have worldcup?");

wordcup = wordcup.toUpperCase();
if (wordcup == "YES" || wordcup == "Y") {
    alert('incorrect, it is ');
}
else if (wordcup == "NO" || wordcup == "N") {
    alert("No, it have ");
}
console.log(wordcup);



let ChampionsLeague = prompt("do you think Real madrid is the most club have Champion's League?");

ChampionsLeague = ChampionsLeague.toUpperCase();
if (ChampionsLeague == "YES" || ChampionsLeague == "Y") {
    alert('incorrect, it is ');
}
else if (ChampionsLeague == "NO" || ChampionsLeague == "N") {
    alert("No, it have ");
}
console.log(ChampionsLeague);




let petra = prompt("is the petra beautiful?");

petra = petra.toUpperCase();

if (petra == "YES" || petra == "Y") {
    alert('incorrect, it is ');
}
else if (petra == "NO" || petra == "N") {
    alert("No, it have ");
}
console.log(petra);


alert("thank you " + UserName + " for your time")


