// creamos una varible
let circuloX=100;

function setup() {
  createCanvas(400, 400);
}

// agregamos la función ratón presionado para cambiar el valor de variable a 0
function mousePressed(){
  circuloX=0;
}

function draw() {
  background(220);
  noStroke();
  fill(255);
  circle(circuloX, 100, 50);
  circuloX = circuloX +1; // incrementa el valor de la variable por uno en cada ciclo de draw
}

