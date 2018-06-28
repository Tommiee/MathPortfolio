let width = window.innerWidth;
let height = window.innerHeight;
let scene,camera,renderer;

let sun = {};
let earth = {};
let moon = {};
let stars = {};

let light;

function setUp(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45,width/height,1,1000);
  camera.position.z = 50;
  camera.position.y = 10;
  camera.lookAt(0,0,0);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width,height);
  document.body.appendChild(renderer.domElement);

  sun.texture = new THREE.TextureLoader().load('textures/sun-map_unwrapped.jpg');
  sun.geometry = new THREE.SphereGeometry(5,32,32);
  sun.material = new THREE.MeshToonMaterial({map:sun.texture});
  sun.mesh = new THREE.Mesh(sun.geometry,sun.material);
  scene.add(sun.mesh);

  light = new THREE.PointLight(0x222222, 10, 100);
  light.position.set(0,0,0);
  scene.add(light);

  earth.texture = new THREE.TextureLoader().load('textures/earth-map_unwrapped.jpg');
  earth.geometry = new THREE.SphereGeometry(2,32,32);
  earth.material = new THREE.MeshLambertMaterial({map:earth.texture});
  earth.mesh = new THREE.Mesh(earth.geometry,earth.material);
  earth.phi = 0;
  earth.theta = 0;
  earth.r = 25;
  scene.add(earth.mesh);

  moon.texture = new THREE.TextureLoader().load('textures/moon-map_unwrapped.jpg');
  moon.geometry = new THREE.SphereGeometry(1,32,32);
  moon.material = new THREE.MeshLambertMaterial({map:moon.texture});
  moon.mesh = new THREE.Mesh(moon.geometry,moon.material);
  moon.base = earth.mesh.position.clone();
  moon.phi = 0.5;
  moon.theta = 0;
  moon.r = 7.5;
  scene.add(moon.mesh);

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  sun.mesh.rotation.y += 0.001;
  earth.mesh.rotation.y += 0.05;
  moon.mesh.rotation.y += 0.1;

  earth.mesh.position.x = earth.r*Math.sin(earth.theta)*Math.cos(earth.phi);
  earth.mesh.position.y = earth.r*Math.cos(earth.theta)*Math.sin(earth.phi);
  earth.mesh.position.z = earth.r*Math.cos(earth.theta);

  earth.theta += 0.005;

  moon.base = earth.mesh.clone();
  moon.mesh.position.x = moon.r*Math.sin(moon.theta)*Math.cos(moon.phi) + moon.base.position.x;
  moon.mesh.position.y = moon.r*Math.cos(moon.theta)*Math.sin(moon.phi) + moon.base.position.y;
  moon.mesh.position.z = moon.r*Math.cos(moon.theta) + moon.base.position.z;

  moon.theta += 0.02;

  renderer.render(scene,camera);
}

setUp();
