const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
Setup(); canvasW = canvas.width; canvasH = canvas.height;

let g = new GameObject(new Point(1,1,200,"#0000FF",""),new Vector2(100,800),new Vector2(1,2),new Vector2(0,0));
let h = new GameObject(new Point(1,1,25,"#FF0000",""),new Vector2(800,100),new Vector2(4,4),new Vector2(0,0));
g.rad = new Vector2(1,1);
g.tan = new Vector2(1,1);
h.rad = new Vector2(1,1);
h.tan = new Vector2(1,1);
g.m = g.point.r * g.point.r * Math.PI;
h.m = h.point.r * h.point.r * Math.PI;

AnimationLoop();

function AnimationLoop() {
  requestAnimationFrame(AnimationLoop);
  context.clearRect(0,0,canvasW,canvasH);
  g.Update();
  h.Update();

  g.rad.subtractVector(g.pos,h.pos);
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);

  g.tan.dx = g.rad.dy;
  g.tan.dy = -g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);

  h.rad.subtractVector(h.pos,g.pos);
  h.rad.r = 1;
  h.rad.r = h.rad.dot(h.vel);

  h.tan.dx = h.rad.dy;
  h.tan.dy = -h.rad.dx;
  h.tan.r = 1;
  h.tan.r = h.tan.dot(h.vel);

  if(g.point.getDistance(h.point) < g.point.r + h.point.r){

    let A1 = new Vector2(g.rad.dx,g.rad.dy);
    let A2 = new Vector2(h.rad.dx,h.rad.dy);
    A1.scalairVector((h.m - g.m) / (g.m + h.m));
    A2.scalairVector((g.m - h.m) / (h.m + g.m));

    let B1 = new Vector2(g.rad.dx,g.rad.dy);
    let B2 = new Vector2(h.rad.dx,h.rad.dy);
    B1.scalairVector((g.m - h.m) / (h.m + g.m));
    B2.scalairVector((h.m - g.m) / (g.m + h.m));

    g.rad.sumVector(A1,A2);
    h.rad.sumVector(B1,B2);

    g.vel.sumVector(g.rad,g.tan);
    h.vel.sumVector(h.rad,h.tan);
  }

  g.Draw();
  h.Draw();

  g.rad.draw(context,g.pos.dx,g.pos.dy,50);
  h.rad.draw(context,h.pos.dx,h.pos.dy,15);

  g.tan.draw(context,g.pos.dx,g.pos.dy,50);
  h.tan.draw(context,h.pos.dx,h.pos.dy,15);

  g.vel.draw(context,g.pos.dx,g.pos.dy,50);
  h.vel.draw(context,h.pos.dx,h.pos.dy,15);

}

function Setup(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
