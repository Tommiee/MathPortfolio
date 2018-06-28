const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(400,225,10,"#0000FF");
var b = new Point(70,40,10,"#FF0000");
var c = new Point(420,200,10,"#00FF00");
var l = new Line(1/3,16.66);

a.draw();
b.draw();
c.draw();

a.drag();
b.drag();
c.drag();

setInterval(loop,1);

function loop(){
  context.clearRect(0,0,800,450);
  l.drawLine(a,b,l);
  l.makePerpendicularLine(l,c);
  a.draw();
  b.draw();
  c.draw();
}
