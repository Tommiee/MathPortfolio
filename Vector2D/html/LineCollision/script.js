const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


let pointA = new Point(100,90,10,"Red","A");
let pointB = new Point(400,100,10,"Red","B");
let g = {};
g.point = new Point(200,200,10,"#77f","P");
g.pos = new Vector2(g.point.x,g.point.y);
g.vel = new Vector2(5,5);
g.Update = () =>{
  g.pos.add(g.vel);
  g.point.x = g.pos.dx;
  g.point.y = g.pos.dy;
  if (g.pos.dx > canvas.width - g.point.r || g.pos.dx < g.point.r) {
    g.vel.dx = -g.vel.dx;
  }
  if (g.pos.dy > canvas.height - g.point.r || g.pos.dy < g.point.r) {
    g.vel.dy = -g.vel.dy;
  }
  if (g.pos.dy >= l.slope * g.pos.dx + l.yIntercept) {
    if (g.point.getDistance(h.point) > 7.5) {
      g.pos.dy = (l.slope * g.pos.dx + l.yIntercept) - 10
    }
    h.tan.angle += Math.PI;
    g.vel.sumVector(h.tan,h.rad);
  }
  g.point.draw();
  g.vel.draw(context,g.point.x,g.point.y,20);
}

let h = {};
h.point = new Point(200,400,15,"yellow","P");
h.pos = new Vector2(1,1);
h.rad = new Vector2(1,1);
h.tan = new Vector2(1,0);
h.Update = () =>{
  h.point.x = l.intersection(l2).x;
  h.point.y = l.intersection(l2).y;

  h.rad.dx = 1;
  h.rad.dy = l.slope;
  h.rad.r = 1;
  h.rad.r = h.rad.dot(g.vel);

  h.tan.dx = -h.rad.dy;
  h.tan.dy = h.rad.dx;
  h.tan.r = 1;
  h.tan.r = h.tan.dot(g.vel);

  h.tan.draw(context,h.point.x,h.point.y,100,"Red");
  h.rad.draw(context,h.point.x,h.point.y,50,"Red");
  h.point.draw();
}

let l = new Line(1,1);
let l2 = new Line(2,2);

pointA.drag();
pointB.drag();

Update();
function Update() {
  requestAnimationFrame(Update);
  context.clearRect(0, 0, 800, 800);
  l.letTwoPointsDefineLine(pointA,pointB,"static");
  l2.makePerpendicularLine(l, g.point);
  g.Update();
  h.Update();
  pointA.draw();
  pointB.draw();
}
