class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.color = color || "#FFFFFF";
  }
  draw(){
    context.beginPath();
    context.fillStyle= this.color;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
  drag(){
    let drag = false;
    let xMouse,yMouse,dx,dy,distance;

    canvas.addEventListener('mousedown',(evt)=>{
      let rect = canvas.getBoundingClientRect();
      xMouse= evt.clientX - rect.left;
      yMouse = evt.clientY - rect.top;
      dx = xMouse - this.x;
      dy = yMouse - this.y;
      distance = Math.sqrt(dx*dx + dy*dy);
      if(distance<=this.r){
        drag = true;
        canvas.addEventListener('mouseup',(evt)=>{
          drag = false;
        })
      } else{
        drag = false;
      }
    })

    canvas.addEventListener('mousemove',(evt)=>{
      if(drag){
        let rect = canvas.getBoundingClientRect();
        xMouse= evt.clientX - rect.left;
        yMouse = evt.clientY - rect.top;
        dx = xMouse - this.x;
        dy = yMouse - this.y;
        this.x = xMouse;
        this.y = yMouse;
      }
    })
  }
  x(){
    return this.x;
  }
  y(){
    return this.y;
  }
  getToMiddle(line1,line2){
    this.x = (line2.yIntercept - line1.yIntercept) / (line1.slope - line2.slope);
    this.y = line1.slope * this.x + line1.yIntercept;
  }
  changeColor(line){
    let yCalc = line.slope*this.x + line.yIntercept;
    if(this.y - yCalc > 0){
      this.color = "limegreen";
    } else if (this.y - yCalc < 0){
      this.color = "red";
    }
  }
}
