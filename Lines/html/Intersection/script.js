const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(40,30,10,"#0000FF");
var b = new Point(70,40,10,"#FF0000");
var c = new Point(420,200,10,"#00FF00");
var d = new Point(430,240,10,"#0F00F0");
var point = new Point(100,100,10,"#ffffff");
var l = new Line(1/3,16.66);
var k = new Line(1/3,16.66);

a.draw();
b.draw();
c.draw();
d.draw();
point.draw();

a.drag();
b.drag();
c.drag();
d.drag();

setInterval(loop,1);

function loop(){
  context.clearRect(0,0,800,450);
  a.draw();
  b.draw();
  c.draw();
  d.draw();
  l.drawLine(a,b,l);
  k.drawLine(c,d,k);
  point.draw();
  point.getToMiddle(l,k);
}
