function setup() {
  createCanvas(700, 700);
  maximo = int(random(2, 5));
  minimo = int(random(8, 10));
}

function draw() {
  background(cenario);
  mostrabemtevi();
  carros();
  movecar();
  movebtv();
  bordas();
  ciclo();
  colision();
  pontuou();
  placar();
}
