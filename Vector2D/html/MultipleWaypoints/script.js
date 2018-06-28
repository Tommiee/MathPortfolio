const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let ballAmount = 5;
let nodeAmount = 10;

let nodeList = initNodes(nodeAmount);
let ballList = initBall(ballAmount);

function BallLoop(){
  for (var i = 0; i < ballList.length; i++) {
    ballList[i].point.draw();
    ballList[i].pos.add(ballList[i].vel);
    ballList[i].point.x = ballList[i].pos.dx;
    ballList[i].point.y = ballList[i].pos.dy;
    if(ballList[i].point.getDistance(nodeList[ballList[i].target].point) <= 4){
      if(ballList[i].target == nodeList.length-1){
        ballList[i].target = 0;
      } else {
        ballList[i].target++;
      }
      ballList[i].vel.subtractVector(ballList[i].pos,nodeList[ballList[i].target].pos);
    }
    ballList[i].vel.r = 5;
    ballList[i].vel.draw(context,ballList[i].pos.dx,ballList[i].pos.dy,10);
  }
}

function initBall(ballAmount){
  this.bAmount = ballAmount;
  let bList = [];
  for (var i = 0; i < this.bAmount; i++) {
    let pointLocation = Math.floor(Math.random() * nodeList.length);
    let b = {};
    b.pos = new Vector2(nodeList[i].pos.dx,nodeList[i].pos.dy);
    b.point = new Point(b.pos.dx,b.pos.dy,10,"black");
    b.vel = new Vector2(0,0);
    b.target = i;
    bList.push(b);
  }
  return bList;
}

function animationLoop(){
  requestAnimationFrame(animationLoop);
  context.clearRect(0,0,800,450);
  drawNodes(nodeList);
  BallLoop();
}

animationLoop();
