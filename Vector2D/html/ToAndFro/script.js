const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,400,10,"black","A");
let a = new Vector2(A.x,A.y);
let B = new Point(600,100,10,"red","B");
let b = new Vector2(B.x,B.y);
let c = new Vector2(A.x,A.y);
let C = new Point(c.dx,c.dy,10,"blue","C");
let vel = new Vector2(1,1);
let swap = false;

function animationLoop(){
  requestAnimationFrame(animationLoop);
  context.clearRect(0,0,800,450);
  c.add(vel);
  a.dx = A.x; a.dy = A.y;
  b.dx = B.x; b.dy = B.y;
  C.x = c.dx;
  C.y = c.dy;

  A.draw();
  B.draw();
  C.draw();

  if(c.dx >= b.dx && c.dy >= b.dy){
    swap = true;
  }

  if(c.dx <= a.dx && c.dy >= a.dy){
    swap = false;
  }

  if(swap){
    vel.subtractVector(b,a);
  } else {
    vel.subtractVector(a,b);
  }
  vel.r = 5;
  vel.draw(context,c.dx,c.dy,10);
}

animationLoop();
