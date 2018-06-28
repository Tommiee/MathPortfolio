const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let position = new Vector2(100,100);
let direction = new Vector2(1,0);
let velocity = new Vector2(0,0);
let impulse = new Vector2(0,0);
let impulseSpeed = 1;

let player = new Point(position.dx,position.dy,20,"#00FFFF","P");

window.addEventListener('keydown',(e)=>{
  switch (e.keyCode) {
    case 37:
      //left arrow
      impulse = new Vector2(-impulseSpeed,0);
    break;
    case 39:
      //right arrow
      impulse = new Vector2(impulseSpeed,0);
    break;
    case 38:
      //up arrow
      impulse = new Vector2(0,-impulseSpeed);
      // velocity.r++;
    break;
    case 40:
      //down arrow
      impulse = new Vector2(0,impulseSpeed);
      // velocity.r--;
    break;
    default:
  }
  velocity.add(impulse);
})

function animationLoop(){
  requestAnimationFrame(animationLoop);
  context.clearRect(0,0,800,450);
  //edge foldover
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
