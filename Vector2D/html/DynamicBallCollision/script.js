const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
Setup();
canvasW = canvas.width;
canvasH = canvas.height;

let g = new GameObject(new Point(200,125,100,"Yellow","G"),new Vector2(100,200),new Vector2(4,6),new Vector2(0,0));
let h = new GameObject(new Point(200,125,100,"Green","H"),new Vector2(400,100),new Vector2(8,3),new Vector2(0,0));
g.rad = new Vector2(1,1);
h.rad = new Vector2(1,1);
g.tan = new Vector2(1,1);
h.tan = new Vector2(1,1);

AnimationLoop();

function AnimationLoop() {
  requestAnimationFrame(AnimationLoop);
  context.clearRect(0,0,canvasW,canvasH);
  g.Update();
  h.Update();
  g.rad.subtractVector(g.pos,h.pos);
  h.rad.subtractVector(h.pos,g.pos);
  g.Draw();
  h.Draw();
  g.vel.draw(context,g.pos.dx,g.pos.dy,50);
  h.vel.draw(context,h.pos.dx,h.pos.dy,50);
  g.rad.r = 1;
  h.rad.r = 1;

  g.tan.dx = g.rad.dy;
  g.tan.dy = -g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);

  h.tan.dx = h.rad.dy;
  h.tan.dy = -h.rad.dx;
  h.tan.r = 1;
  h.tan.r = g.tan.dot(h.vel);

  g.rad.r = g.rad.dot(g.vel);
  h.rad.r = h.rad.dot(h.vel);

  if(g.point.getDistance(h.point)<=g.point.r + h.point.r){
    let temp = new Vector2(g.rad.dx,g.rad.dy);
    g.rad.dx = h.rad.dx;
    g.rad.dy = h.rad.dy;

    h.rad.dx = temp.dx;
    h.rad.dy = temp.dy;

    g.vel.sumVector(g.rad,g.tan);
    h.vel.sumVector(h.rad,h.tan);
    g.pos.add(g.vel);
    h.pos.add(h.vel);
  }

  g.rad.draw(context,g.pos.dx,g.pos.dy,50);
  h.rad.draw(context,h.pos.dx,h.pos.dy,50);
  g.tan.draw(context,g.pos.dx,g.pos.dy,50);
  h.tan.draw(context,h.pos.dx,h.pos.dy,50);
}

function Setup(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
