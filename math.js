const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * perimetroCuadrado;

console.group("Cuadrado");

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

console.groupEnd("Cuadrado");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.group("Triangulo");

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});
console.groupEnd("Triangulo");

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.group("Circulo");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circunferencia = diametroCirculo;
const areaCirculo = radioCirculo ** 2 * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio,2);

  return {
    circunferencia: radio * 2 * PI,
    area: radioAlCuadrado * PI
  };
}

function calcularAltura(lado, base){
    return Math.sqrt((lado**2) - ((base**2)/4))
}

console.groupEnd("Circulo");
