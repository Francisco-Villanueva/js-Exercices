/*
EJERCICIO 1: toTime ()
Crea una Función llamada toTime() que tome como argumento un número entero (segundos). La Función debe convertir el valor recibido en un string ("") que describe cuántas horas y minutos comprenden esa cantidad de segundos.

El resultado debe tener el siguiente formato: "X hora (s) y X minuto (s)".

Ejemplos:

toTime(3600) ==> "1 hour(s) and 0 minutes(s)"
toTime(3500) ==> "0 hour(s) and 58 minutes(s)"
toTime(323500) ==> "89 hour(s) and 51 minutes(s)"

*/
function toTime(n) {
  // codigo aquí:
  let min = Math.floor(n / 60);
  let hs = Math.floor(min / 60);

  while (min >= 60) {
    min -= 60;
  }

  return `${hs} hour(s) and ${min} minutes(s)`;
}

module.exports = {
  toTime,
};
