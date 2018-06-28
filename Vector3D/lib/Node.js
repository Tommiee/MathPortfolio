function getNumber(max){
  return Math.floor(Math.random()*max)
}

function initNodes(nodeAmount){
  this.n = nodeAmount;
  let nodesList = [];
  for (var i = 0; i < this.n; i++) {
    let node = {};
    node.pos = new Vector2(getNumber(800),getNumber(450));
    node.point = new Point(node.pos.dx,node.pos.dy,10,"red",""+i);
    nodesList.push(node);
  }
  return nodesList;
}

function drawNodes(nodeList){
  this.nl = nodeList;
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = "3";
  context.moveTo(this.nl[0].pos.dx,this.nl[0].pos.dy);
  for (var i = 0; i < this.nl.length; i++) {
    context.lineTo(this.nl[i].pos.dx,this.nl[i].pos.dy);
  }
  context.closePath();
  context.stroke();
  for (var i = 0; i < this.nl.length; i++) {
    this.nl[i].point.draw();
  }
}
