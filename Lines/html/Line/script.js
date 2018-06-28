const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(400,225,10,"#0000FF");
var b = new Point(70,40,10,"#FF0000");
var l = new Line(1/3,16.66);

a.draw();
b.draw();
a.drag();
b.drag();

setInterval(loop,1);

function loop(){
  context.clearRect(0,0,800,450);
  drawLine();
  a.draw();
  b.draw();
}

function drawLine(){
  l.slope = (a.y - b.y) / (a.x - b.x);
  l.yIntercept = a.y - a.x * l.slope;
  context.beginPath();
  context.moveTo(0,l.calcY(0));
  context.lineTo(800,l.calcY(800));
  context.stroke();
  context.closePath();
}
