//variáveis do btv
let ybtv = 600;
let xbtv = 122;
let wbtv = 30;
let hbtv = 48;
let mp = 0;

function movebtv(){
  if (keyIsDown(UP_ARROW)){
    ybtv -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    ybtv += 3;
  }
}

function mostrabemtevi(){
  image(bemtevi, xbtv, ybtv, wbtv, hbtv);
}

function bordas(){
  if (ybtv >= 652){
    ybtv -= 3;
  }
  if (ybtv <= 0){
    ybtv += 3;
  }
}

function colision(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imgcars.length; i++){
    colisao = collideRectRect(xtotal[i], ytotal[i], carwidth[i], carheight[i], xbtv, ybtv, wbtv, hbtv)
    if (colisao){
      ybtv = 600;
      derrota.play();
      if (mp > 0){
        mp -= 1;
      }
    }
  }
}

function pontuou(){
  if (ybtv <= 137){
    mp = mp + 1;
    ybtv = 600;
    vitoria.play();
  }
}
