//variáveis de imagens
let bemtevi;
let dgrvermelha;
let dgrlaranja;
let dgrazul;
let dgrpreta;
let urbs;
let cenario;

//variáveis dos sons
let derrota;
let vitoria;

function preload(){
  bemtevi = loadImage("img/bemtevi.png");
  dgrazul = loadImage("img/dogeramazul.png");
  dgrvermelha = loadImage("img/dogerambordo.png");
  dgrlaranja = loadImage("img/dogeramlaranja.png");
  dgrpreta = loadImage("img/dogerampreta.png");
  urbs = loadImage("img/urbs.png");
  cenario = loadImage("img/cenario.png")
  imgcars = [dgrazul, dgrlaranja, dgrvermelha, dgrpreta, urbs];
  derrota = loadSound("sounds/derrota.mp4");
  vitoria = loadSound("sounds/vitoria.mp4");
}

function placar(){
  fill(22, 122, 22);
  text(mp, 633, 622);
  textSize(50);
}