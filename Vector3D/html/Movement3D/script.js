let width = window.innerWidth;
let height = window.innerHeight;
let skybox = {};
let earthbox = {};

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer();
renderer.setSize(width,height);

let camera = new THREE.PerspectiveCamera(45,width/height,1,1000);

camera.position.z = 5;

document.body.appendChild(renderer.domElement);

let lightR = new THREE.DirectionalLight(0xFF0000);
let lightG = new THREE.DirectionalLight(0x00FF00);
let lightB = new THREE.DirectionalLight(0x0000FF);
lightR.position.set(0,2,1);
lightG.position.set(2,1,0);
lightB.position.set(1,0,2);
scene.add(lightR);
scene.add(lightG);
scene.add(lightB);

let texture = new THREE.TextureLoader().load('texture/diablock.jpg');
let material = new THREE.MeshLambertMaterial({color:0xFFFFFF,map:texture});
let geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
let mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

mesh.position.z = 1;

skybox.texture = new THREE.TextureLoader().load('texture/earth-map_unwrapped.jpg');
skybox.material = new THREE.MeshBasicMaterial({map:skybox.texture});
skybox.material.side = THREE.FrontSide;
skybox.geometry = new THREE.SphereGeometry(5,32,32);
skybox.mesh = new THREE.Mesh(skybox.geometry,skybox.material);
scene.add(skybox.mesh);

earthbox.texture = new THREE.TextureLoader().load('texture/dirt.jpg');
earthbox.material = new THREE.MeshBasicMaterial({map:earthbox.texture});
earthbox.material.side = THREE.BackSide;
earthbox.texture.wrapS = THREE.RepeatWrapping;
earthbox.texture.wrapT = THREE.RepeatWrapping;
earthbox.texture.repeat.set(15,15);
earthbox.geometry = new THREE.SphereGeometry(5,32,32);
earthbox.mesh = new THREE.Mesh(earthbox.geometry,earthbox.material);
scene.add(earthbox.mesh);

function loop(){
  requestAnimationFrame(loop);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.03;
  renderer.render(scene, camera);
  skybox.mesh.rotation.y += 0.001;
  earthbox.mesh.rotation.y = skybox.mesh.rotation.y;
}

loop();

window.addEventListener("keydown",(evt)=>{
  let direction = camera.getWorldDirection(new THREE.Vector3(0,0,0)).clone();
  switch (evt.code) {
    case "ArrowUp":
      camera.rotation.x += 0.1;
      break;
    case "ArrowDown":
      camera.rotation.x -= 0.1;
      break;
    case "ArrowLeft":
      camera.rotation.y += 0.1;
      break;
    case "ArrowRight":
      camera.rotation.y -= 0.1;
      break;
    case "ShiftLeft":
      direction.multiplyScalar(0.1);
      camera.position.add(direction);
      break;
    case "ControlLeft":
      direction.multiplyScalar(0.1);
      camera.position.sub(direction);
      break;
    default:
      console.log(evt.code);
  }
});

let mousePos = {};

// window.addEventListener("mousemove",(evt)=>{
//   if(mousePos.newx){
//     mousePos.oldx = mousePos.newx;
//   }
//   if(mousePos.newy){
//     mousePos.oldy = mousePos.newy;
//   }
//   mousePos.newx = evt.clientX;
//   mousePos.newy = evt.clientY;
//   mousePos.dx = mousePos.newx - mousePos.oldx;
//   mousePos.dy = mousePos.newy - mousePos.oldy;
//   console.log(mousePos);
//   camera.position.z += mousePos.dx*0.001;
//   camera.position.x += mousePos.dy*0.001;
// })
