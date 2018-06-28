const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let num = document.getElementById('num').value;
let A = new Point(200,200,20,"#ff0000","a");
let B = new Point(400,200,20,"#00ff00","b");
let C = new Point(200,300,20,"#0000ff","c");

let a = new Vector2(1,1,"a");
let b = new Vector2(1,1,"b");
let ab = new Vector2(1,1,"a+b");
let ab2 = new Vector2(1,1,"a-b");
let a2 = new Vector2(1,1);

animationLoop();
A.drag();B.drag();C.drag();

function animationLoop(){
  requestAnimationFrame(animationLoop);
  num = document.getElementById('num').value;
  context.clearRect(0,0,800,450);
  A.draw();B.draw();C.draw();

  a2.dx = a.dx;
  a2.dy = a.dy;
  a2.scalairVector(num);
  a2.draw(context,A.x,A.y,1);
  a2.label = "a*" + num;

  a.dx = B.x - A.x;
  a.dy = B.y - A.y;
  a.draw(context,A.x,A.y,1);

  b.dx = C.x - A.x;
  b.dy = C.y - A.y;
  b.draw(context,A.x,A.y,1)

  ab.sumVector(a,b);
  ab.draw(context,A.x,A.y,1);

  ab2.subtractVector(a,b);
  ab2.draw(context,A.x,A.y,1);
}
