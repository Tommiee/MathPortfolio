class Point {
  constructor(x,y,r,color,label) {
    this.x = x;
    this.y = y;
    this.r = r || 15;
    this.color = color || "#000000";
    this.label = label || "";
  }
  draw(){
    context.beginPath();
    context.fillStyle= this.color;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.font = "30px Arial";
    context.fillText(this.label,this.x-10,this.y-(this.r+10));
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
  changeColor(line){
    let yCalc = line.slope*this.x + line.yIntercept;
    if(this.y - yCalc > 0){
      this.color = "limegreen";
    } else if (this.y - yCalc < 0){
      this.color = "red";
    }
  }

  getDistance(P){
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    return Math.sqrt((dx * dx) + (dy * dy));
  }
}

//line.slope + line.yIntercept + B
