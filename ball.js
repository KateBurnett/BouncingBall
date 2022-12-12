var ball1 = document.getElementById('ball1');
var velocity1 = 10;
var positionX1 = 169;
var reverse = 1;

function moveBall1() {
  positionX1 = positionX1 + velocity1 * reverse;
  ball1.style.left = positionX1 + 'px';
  if (positionX1 > 150){
    reverse=-1;
    ball1.style.background = "green";}
  if (positionX1 < 50){
    reverse = 1;
    ball1.style.background = "red";
  }
}

setInterval(moveBall1, 50);


var ball2 = document.getElementById('ball2');
var b2velocity = 10;
var b2position = 50;
var b2reverse = 1;

function moveBall2() {
    b2position = b2position + b2velocity * b2reverse;
    ball2.style.left = b2position + 'px';
    if (b2position > 250){
      b2reverse = -1;
      ball2.style.background = "red";}
    if (b2position < 0){
      b2reverse = 1;
      ball2.style.background = "green";
    }
  }

  setInterval(moveBall2, 100);

var ball3 = document.getElementById('ball3');
var b3velocity = 10;
var b3position = 50;
var b3reverse = 1;

function moveBall3() {
    b3position = b3position + b3velocity * b3reverse;
    ball3.style.top = b3position + 'px';
    if (b3position > 150){
      b3reverse = -1;
      ball3.style.background = "red";}
    if (b3position < 50){
      b3reverse = 1;
      ball3.style.background = "green";
    }
  }

  setInterval(moveBall3, 100);

var ball4 = document.getElementById('ball4');
var b4velocity = 10;
var b4position = 50;
var b4reverse = 1;

function moveBall4() {
    b4position = b4position + b4velocity * b4reverse;
    ball4.style.top = b4position + 'px';
    if (b4position > 150){
      b4reverse = -1;
      ball4.style.background = "green";}
    if (b4position < 50){
      b4reverse = 1;
      ball4.style.background = "red";
    }
  }

  setInterval(moveBall4, 50);

  //working code from ball sim assignment

//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse = 1;
//write a function that can change the position of the html element "ball"
function moveBall() {
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 200;
  positionX = positionX + velocity * reverse;
  ball.style.left = positionX + 'px';
  positionY = positionY + velocity * reverse;
  ball.style.top = positionY + 'px';
  if (positionX > Xmax){
    reverse=-1}
  if (positionX < Xmin){
    reverse = 1
  }
  if (positionY > Ymax){
    reverse=-1}
  if (positionY < Ymin){
    reverse = 1
  }
  // two fixed x-axis coordinates (you will use these variable in step 3)
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);

//updated ball sim code
//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse = true;
//write a function that can change the position of the html element "ball"
function moveBall() {
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 200;

  if (reverse){
  positionX = positionX - velocity;
  ball.style.left = positionX + 'px';
  positionY = positionY - velocity;
  ball.style.top = positionY + 'px';
  } else {
  positionX = positionX + velocity;
  ball.style.left = positionX + 'px';
  positionY = positionY + velocity;
  ball.style.top = positionY + 'px';
  }
  
  if (positionX > Xmax){
    reverse = true}
  if (positionX < Xmin){
    reverse = false}
  if (positionY > Ymax){
    reverse = true}
  if (positionY < Ymin){
    reverse = false}
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
