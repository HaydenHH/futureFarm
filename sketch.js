let bg,bg2,icon
function setup() {
  let canvas = createCanvas(270,270);
  canvas.parent('#canvasBox')

  bg = loadImage('./img/center.png')
  bg2=loadImage('./img/map.png')

  icon = loadImage('./img/iconC.png')
}

function draw() {



//   background(220);
    clear()
    if(isthing1){
        image(bg,0,0,270,270)
    }else{  
    image(bg2,0,0,270,270)
    }



    translate(noise(frameCount/1000)*120+100,noise(frameCount/2000)*120+100)
    // map的icon的移动距离，改*后面的数字，改小是指随机距离，/1000是改快慢
    
    rotate(noise(frameCount/300)*PI/2)
    image(icon,0,0,30,30)
    
    resetMatrix()
    
}
