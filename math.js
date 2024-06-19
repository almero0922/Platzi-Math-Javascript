const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * perimetroCuadrado;

console.group("Cuadrado");

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

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
    areaTriangulo
})
console.groupEnd("Triangulo")

function calcularTriangulo(lado1, lado2, base, altura) {
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura)/2,
    }
}

function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado * lado
    }
}