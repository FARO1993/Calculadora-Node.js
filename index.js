/* Este módulo (index.js) recibe los comandos a ejecutar 
de las operaciones matemáticas*/
const operaciones = require("./operaciones");

function parsearTerminos(texto) {
  let simbolo;
  texto.includes("+")
    ? (simbolo = "+")
    : texto.includes("-")
    ? (simbolo = "-")
    : texto.includes("*")
    ? (simbolo = "*")
    : texto.includes("/")
    ? (simbolo = "/")
    : " ";

  const separador = /[+\-\*\/]/;
  let splitText = texto.split(separador);
  let numberText = splitText.map((item) => {
    return Number(item);
  });
  return {
    primerTermino: numberText[0],
    segundoTermino: numberText[1],
    operacion: simbolo,
  };
}

function ejecutarOperacion(objOperacion) {
  return objOperacion.operacion == "+"
    ? operaciones.sumar(objOperacion.primerTermino, objOperacion.segundoTermino)
    : objOperacion.operacion == "-"
    ? operaciones.restar(
        objOperacion.primerTermino,
        objOperacion.segundoTermino
      )
    : objOperacion.operacion == "*"
    ? operaciones.multiplicar(
        objOperacion.primerTermino,
        objOperacion.segundoTermino
      )
    : objOperacion.operacion == "/"
    ? operaciones.dividir(
        objOperacion.primerTermino,
        objOperacion.segundoTermino
      )
    : "No hay operación para realizar";
}

function main() {
  const operacionParseada = parsearTerminos(process.argv[2]);
  const resultado = ejecutarOperacion(operacionParseada);
  console.log(resultado);
}

main();
