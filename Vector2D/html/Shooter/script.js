const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let position = new Vector2(100,100);
let direction = new Vector2(1,0);
let velocity = new Vector2(1,1);

let player = new Point(position.dx,position.dy,20,"#00FFFF","P");
let bullets = [];

window.addEventListener('keydown',(e)=>{
  switch (e.keyCode) {
    case 37:
      velocity.angle -= 0.1;
      break;
    case 39:
      velocity.angle += 0.1;
      break;
    case 38:
      velocity.r++;
      break;
    case 40:
      velocity.r--;
      break;
    case 32:
        let bullet = {};
        bullet.position = new Vector2(position.dx,position.dy);
        bullet.velocity = new Vector2(velocity.dx*1.5,velocity.dy*1.5);
        bullet.point = new Point(bullet.position.dx,bullet.position.dy,15,"#0F00F0","x");
        bullets.push(bullet);
      break;
    default:

  }
})

function animationLoop(){
  requestAnimationFrame(animationLoop);
  context.clearRect(0,0,800,450);
  for (var i = 0; i < bullets.length; i++) {
    if(bullets[i].position.dx < 0 || bullets[i].position.dx > 800 || bullets[i].position.dy < 0 || bullets[i].position.dy > 450){
      bullets.slice(0,bullets[i]);
    } else {
      bullets[i].point.x = bullets[i].position.dx;
      bullets[i].point.y = bullets[i].position.dy;
      bullets[i].position.add(bullets[i].velocity);
      bullets[i].point.draw();
    }
  }
  if(position.dx < 0){
    position.dx = 800;
  }
  if(position.dx > 800){
    position.dx = 0;
  }
  if(position.dy < 0){
    position.dy = 450;
  }
  if(position.dy > 450){
    position.dy = 0;
  }
  player.x = position.dx;
  player.y = position.dy;
  position.add(velocity);
  player.draw();
  velocity.draw(context,player.x,player.y,50);
}

animationLoop();
