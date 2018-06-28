const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,400,10,"green","A");
let a = new Vector2(A.x,A.y);
let B = new Point(300,100,10,"red","B");
let b = new Vector2(B.x,B.y);
let C = new Point(600,300,10,"blue","C");
let c = new Vector2(C.x,C.y);

let ball = new Vector2(B.x,B.y);
let BALL = new Point(ball.dx,ball.dy,10,"black");
let vel = new Vector2(0,0);
let target = 0;

function ballLoop(targetBall){
  this.targetBall = targetBall;

  this.targetBall.draw();
  if(this.targetBall.getDistance(A) <= 4){
    target = 0;
  }
  if(this.targetBall.getDistance(B) <= 4){
    target = 1;
  }
  if(this.targetBall.getDistance(C) <= 4){
    target = 2;
  }
}

function animationLoop(){
  requestAnimationFrame(animationLoop);
  context.clearRect(0,0,800,450);
  ball.add(vel);
  BALL.x = ball.dx;
  BALL.y = ball.dy;

  A.draw();
  B.draw();
  C.draw();

  ballLoop(BALL);

  console.log(target);
  switch (target) {
    case 0:
      //move from A to B
      vel.subtractVector(ball,b);
      break;
    case 1:
      //move from B to C
      vel.subtractVector(ball,c);
      break;
    case 2:
      //move from C back to A
      vel.subtractVector(ball,a);
      break;
  }
  vel.r = 5;
  vel.draw(context,ball.dx,ball.dy,10);
}

animationLoop();
