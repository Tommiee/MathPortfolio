const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let gameObject =
/* point */  new GameObject(new Point(1,1,30,"blue","G"),
/* position */  new Vector2(100,100),
/* velocity */  new Vector2(1,2),
/* acceleration */  new Vector2(0,0));

gameObject.rad = new Vector2(1,1);
gameObject.tan = new Vector2(1,1);

let P = new Point(200,125,50,"Yellow","P");
let Q = new Point(600,325,50,"Yellow","Q");

AnimationLoop();
function AnimationLoop() {
  requestAnimationFrame(AnimationLoop);
  context.clearRect(0,0,800,450);
  gameObject.Update();

  gameObject.rad.dx = P.x - gameObject.pos.dx;
  gameObject.rad.dy = P.y - gameObject.pos.dy;
  gameObject.rad.r = 1;
  gameObject.rad.r = gameObject.rad.dot(gameObject.vel);
  gameObject.tan.dx = -gameObject.rad.dy;
  gameObject.tan.dy = gameObject.rad.dx;
  gameObject.tan.r = 1;
  gameObject.tan.r = gameObject.tan.dot(gameObject.vel);
  CheckBumpers(P);
  CheckBumpers(Q);
  gameObject.Draw();
  gameObject.vel.draw(context,gameObject.pos.dx,gameObject.pos.dy,50);
  gameObject.rad.draw(context,gameObject.pos.dx,gameObject.pos.dy,50);
  gameObject.tan.draw(context,gameObject.pos.dx,gameObject.pos.dy,50);
  P.draw();
  Q.draw();
}

function CheckBumpers(targetPoint){
  if(gameObject.point.getDistance(targetPoint) <= targetPoint.r + gameObject.point.r){
    gameObject.rad.angle += Math.PI;
    gameObject.vel.sumVector(gameObject.rad,gameObject.tan);
  };

}
