let r = Math.random()
let a = 1
let b = 6

let randomNumber = a + r*(b-a) 

// random number generattor for 1st dice
let randomNumber1 = Math.floor(randomNumber)
console.log(randomNumber)
console.log(randomNumber1)

// random number generator for 2nd dice
let randomNumber2 = Math.floor(Math.random()*6)

//creating a array of images
// to change the dice images
const images = [
    "images/dice1.png", //0
    "images/dice2.png", //1
    "images/dice3.png", //2
    "images/dice4.png", //3
    "images/dice5.png", //4
    "images/dice6.png" //5
];

const imgTag1 = document.getElementById("img1")
imgTag1.src = images[randomNumber1]

const imgTag2 = document.getElementById("img2")
imgTag2.src = images[randomNumber2]

// to display the winner
if(randomNumber1 > randomNumber2){
    document.getElementById("heading").textContent = "Player 1 Won !"
}
else if(randomNumber1 < randomNumber2){
    document.getElementById("heading").textContent = 
    "Player 2 Won !"
}
else{
    document.getElementById("heading").textContent = "It's a Draw !"
}