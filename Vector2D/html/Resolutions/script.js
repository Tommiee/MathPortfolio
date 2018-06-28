const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,100,20,"red","A");
let B = new Point(400,300,20,"green","B");
let C = new Point(700,200,20,"blue","C");

let v = new Vector2(B.x-A.x,B.y-A.y);
let lineVector = new Vector2(1,1);
let normalVector = new Vector2(1,1);

let l = new Line(0,0);
let m = new Line(0,0);

A.drag();
B.drag();
C.drag();

function animationLoop(){
  requestAnimationFrame(animationLoop);
  context.clearRect(0,0,800,450);

  //m.letSlopeAndPointDefineLine(-1/l.slope,A);
  //l.letTwoPointsDefineLine(A,C);

  v.dx = B.x-A.x;
  v.dy = B.y-A.y;

  lineVector.dx = 1;
  lineVector.dy = l.slope;
  lineVector.r = 1;
  lineVector.r = lineVector.dot(v);

  normalVector.dx = -lineVector.dy;
  normalVector.dy = lineVector.dx;
  normalVector.r = 1;
  normalVector.r = normalVector.dot(v);

  l.draw(0,800,"blue");
  m.draw(0,800,"red");

  A.draw();
  B.draw();
  C.draw();

  v.draw(context,A.x,A.y,1,"#FFF");
  lineVector.draw(context,A.x,A.y,1,"black");
  normalVector.draw(context,A.x,A.y,1,"black");
}

animationLoop();
