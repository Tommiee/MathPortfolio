const canvas = document.getElementById('canvas');
const context = canvas .getContext('2d')

let ball = new Point(0,0,20,"#FFFF00","boing");
let position = new Vector2(0,200);
let velocity = new Vector2(2,2);
let acceleration = new Vector2(0,1);
let Epot = 450 - position.dy;

function animationLoop(){
  requestAnimationFrame(animationLoop);
  context.clearRect(0,0,800,450);
  ball.x = position.dx;
  ball.y = position.dy;
  position.add(velocity);
  velocity.add(acceleration);
  if (position.dx < 0 || position.dx > 800) {
    velocity.dx = -velocity.dx
  }
  if (position.dy < 0 || position.dy > 450) {
    velocity.dy = Math.sqrt(2*Epot);
    velocity.dy = -velocity.dy
  }
  ball.draw();
  velocity.draw(context, ball.x , ball.y,10,"#00FFFF");
}

animationLoop();
