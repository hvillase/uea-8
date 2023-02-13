// if-else
// copia y pega en setup()
// si (if) 4 es mayor que 3 (true): evalúa ellipse
// de otra manera (else): evalúa rect

if (4 > 3){
	ellipse(140, 40, 150, 50);
} else {
	rect(50, 50, 140, 230);
}

// for o bucle (loop) for: ejecuta sección de código varias veces
// let determina el estado inicial del bucle
// la segunda expresión es evaluada en cada vuelta del bucle, si es falsa (false) el programa se sale del bucle
// la tercera expresión es ejecutada al final de cada vuelta del bucle
// inicia el bucle en 0; si la variable i es menor que 9 (true) continúa, sino sal del bucle; suma a i su mismo valor
for (let i = 0; i < 9; i++)
{
console.log(i)
}

// for aplicado a los parametros de una ellipse
// copia y pega en setup ()
// inicia en 0; si i es menor que 9 continúa, sino sal del bucle; suma a i su mismo valor; multiplica la coordenada x por i
for (let i = 0; i < 9; i++) {
	ellipse(50 * i, 150, 5, 5);
}

// while o while (loop) bucle:
// let crea una variable (num) y determina su estado inicial igual a 5;
// mientras que num sea mayor que 0 (true) ejecuta el código dentro de las llaves {}, sino (flase) termina el bucle 
// num es igual a num menos 1, o sea 5 es igual a 5 menos 1 y num ahora vale 4; luego la consola imprime el valor de num
// comienza el bucle nuevamente: 4 es mayor que 0 (ture) etc.
let num = 5;
while (num > 0) {
  num = num - 1;
  console.log(num);
}

// while o while (loop) bucle:
let num = 5;
while (num > 0){
	num = num -1;
	ellipse(20 * num, 140, 50, 50);
}