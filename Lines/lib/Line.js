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


    // ay = Aslope * ax+aIntercept
    // by = -1/aSlope * bX+bIntercept
    // bIntercept = bY-aSlope*bX
  }
}
