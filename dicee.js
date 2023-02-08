var randomNumber1= Math.round(Math.random()*6);
var r1="dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",r1);

var randomNumber2= Math.round(Math.random()*6);
var r2="dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",r2);

if (randomNumber1>randomNumber2){

    document.querySelector("h1").innerHTML=" ✌ player 1 won";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML=" Its a draw";


}
else{
    document.querySelector("h1").innerHTML="player 2 won ✌";
}