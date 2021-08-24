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
  const map = {
    "+": operaciones.sumar,
    "-": operaciones.restar,
    "*": operaciones.multiplicar,
    "/": operaciones.dividir,
  };

  const simbol = objOperacion.operacion;
  const ejecutor = map[simbol];
  return ejecutor(objOperacion.primerTermino, objOperacion.segundoTermino);
}

function main() {
  const operacionParseada = parsearTerminos(process.argv[2]);
  const resultado = ejecutarOperacion(operacionParseada);
  console.log(resultado);
}

main();
