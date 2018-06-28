class Line {
  constructor(slope,yIntercept) {
    this.slope = slope;
    this.yIntercept = yIntercept;
  }
  calcY(x){
    return this.slope*x + this.yIntercept
  }

  drawLine(slope,inters,line){
    line.slope = (slope.y - inters.y) / (slope.x - inters.x);
    line.yIntercept = slope.y - slope.x * line.slope;
    context.beginPath();
    context.moveTo(0,line.calcY(0));
    context.lineTo(800,line.calcY(800));
    context.stroke();
    context.closePath();
  }
  makePerpendicularLine(line,point){
    this.slope = -1/line.slope;
    this.yIntercept = point.y - this.slope * point.x;

    context.beginPath();
    context.moveTo(0,line.calcY(0));
    context.lineTo(800,line.calcY(800));
    context.stroke();
    context.closePath();
  }
  letTwoPointsDefineLine(A,B){
    this.slope = (B.y-A.y)/(B.x-A.x);
    this.yIntercept = (A.y-this.slope*A.x);
  }
  letSlopeAndPointDefineLine(slope,A){
  this.slope = slope;
  this.yIntercept= A.y - (A.x*this.slope);
}
  draw(x0,x1,color){
    context.beginPath();
    context.setLineWidth=1;
    context.strokeStyle = color || "black";
    context.moveTo(x0,this.calcY(x0));
    context.lineTo(x1,this.calcY(x1));
    context.stroke();
    context.closePath();
  }
  intersection (m){
  var ans = {};
  ans.x = (m.yIntercept - this.yIntercept)/(this.slope-m.slope);
  ans.y = (ans.x * this.slope) + this.yIntercept
  return ans;
}
}
