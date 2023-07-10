//variáveis dos carros
let xtotal = [-124, -124, 700, 700, -180];
let ytotal = [488, 142, 416, 232, 310];
let carwidth = [124, 124, 124, 124, 180];
let carheight = [48, 48, 48, 48, 84];
let maximo;
let minimo;

function carros(){
  for(let i = 0; i < imgcars.length; i++){
    image(imgcars[i], xtotal[i], ytotal[i], carwidth[i], carheight[i]);
  }
}

function movecar(){
  xtotal[0] += int(random(minimo, maximo));
  xtotal[2] -= int(random(minimo, maximo));
  xtotal[1] += int(random(minimo, maximo));
  xtotal[3] -= int(random(minimo, maximo));
  xtotal[4] += int(random(minimo, maximo));
}

function ciclo(){
  if (xtotal[0] > 700){
    xtotal[0] = -124;
  }
  if (xtotal[2] <= -124){
    xtotal[2] = 700;
  }
  if (xtotal[1] >= 700){
    xtotal[1] = -124;
  }
  if (xtotal[3] <= -124){
    xtotal[3] = 700;
  }
  if (xtotal[4] >= 700){
    xtotal[4] = -180;
  }
}

