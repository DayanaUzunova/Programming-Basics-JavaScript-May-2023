function solve(input){

let length = Number(input[0]);
let width = Number(input[1]);
let heigth = Number(input[2]);
let percent = Number(input[3]);

let obem = length * width * heigth;
let obemInLitre = obem / 1000;
let space = percent / 100;

let neededSpace = obemInLitre * (1 - space);
console.log(neededSpace);
}
solve(["85 ","75 ","47 ","17 "])