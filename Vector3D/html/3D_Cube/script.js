let width = window.innerWidth;
let height = window.innerHeight;

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

let texture = new THREE.TextureLoader().load('texture/brick.jpg');
let material = new THREE.MeshLambertMaterial({color:0xFFFFFF,map:texture});
let geometry = new THREE.BoxGeometry(1,1,1);
let mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

mesh.position.z = 1;

function loop(){
  requestAnimationFrame(loop);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.03;
  renderer.render(scene, camera);
}

loop();
