const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
var canvasW, canvasH;

resize();

var earth = new GameObject(
  new Point(canvasW/2,canvasH/2,60,"blue"),
  new Vector2(canvasW/2,canvasH/2),
  new Vector2(0,0),
  new Vector2(0,0)
);

var moon = new GameObject(
  new Point(canvasW/2,canvasH/2,20,"#FFF"),
  new Vector2(400,400),
  new Vector2(1,-2),
  new Vector2(0,0),
  false
);

function loop(){
  requestAnimationFrame(loop);
  //context.clearRect(0,0,canvasW,canvasH);
  context.fillStyle = "rgba(0,0,0,0.1)";
  context.fillRect(0,0,canvasW,canvasH);
  earth.Draw();
  moon.Draw();
  earth.Update();
  moon.Update();
  moon.acc.subtractVector(moon.pos,earth.pos);
  moon.acc.scalairVector(0.0001);
}

loop();

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasW = canvas.width;
  canvasH = canvas.height;
}
