               // Código del cuadrado
               console.group('Triángulos')
console.group('Cuadrados')

function perimetroCuadrado(lado) {
    return lado * 4
}
function areaCuadrado(lado) {
    return lado * lado
}
console.groupEnd()

                // Código del triángulo
console.group('Triángulos')

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}
function areaTriangulo(base, altura){
    return (base * altura)/2
}
function alturaIsosceles(lado, base) {
    altura = Math.sqrt((lado*lado) - ((base*base)/4));
    return (altura)
}
console.groupEnd()

                // Código del círculo
console.group('Círculos')
function diametroCirculo(radio){
    return radio*2
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

function areaCirculo(radio){
    return (radio * radio) * PI
}
console.groupEnd()

//----------  FUNCIONES DE LOS BOTONES  -----------//

function calcularPerimetroCuadrado(){
    var input = document.getElementById('inputCuadrado');
    const value = input.value;

    var inputmedida= document.getElementById('lado-cuadrado');
    const medida= inputmedida.value;

    const perimetro = value*4;

    if (medida){
        var p = document.getElementById('result4')
        p.innerText = 'El perímetro del cuadrado es ' + perimetro + medida
    }
    else{
        alert('Debe ingresar una unidad de medida')
}}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const inputmedida= document.getElementById('lado-cuadrado');
    const medida= inputmedida.value;
    console.log(medida);

    if (medida){
        const area = value*value;
        var p = document.getElementById('result4')
        p.innerText = 'El perímetro del cuadrado es ' + area + medida + '^2'
    }
    else alert ('Debe seleccionar una unidad de medida')
}

function validarMedidas(medidaA, medidaB, medidaBase){
    // if (medidaA == null){
    //     alert('Debe ingresar una unidad de medida')
    // }            No conseguí que esto funcione
    if(medidaA == medidaB && medidaB == medidaBase){
        var a = medidaA;
        return true
    }
    else{
        alert('Las medidas deben estar expresadas en la misma unidad de medida')
}}

function getMedidas(){
    var input = document.getElementById('ladoa');
    const ladoa = Number(input.value);
    var input = document.getElementById('medidaA');
    const medidaA = input.value;

    var input = document.getElementById('ladob');
    const ladob = Number(input.value);
    var input = document.getElementById('medidaB');
    const medidaB = input.value;

    var input = document.getElementById('base');
    const base = Number(input.value);
    var input = document.getElementById('medidaBase');
    const medidaBase = input.value;

    return{
    "ladoa": ladoa, 
    "medidaA": medidaA, 
    "ladob": ladob, 
    "medidaB": medidaB,
    "base": base, 
    "medidaBase": medidaBase,
}
}

function esIsosceles(ladoA, ladoB, base){
    if (ladoA === ladoB && base < (ladoA * 2)){
        return {
            "base": base,
            "lado": ladoA,  
        };
    }
    else if (ladoB === base && ladoA < (ladoB * 2)){
        return {
            'base': ladoA,
            'lado': ladoB,
        }
    }
    else if (ladoA === base && ladoB < (base * 2)){
        return {
            'base': ladoB,
            'lado': ladoA,
        }
    }
    else{
        return false
    }
    
}

function calcularPerimetroTriangulo(){
    parametros = getMedidas();

    if (esIsosceles(parametros.ladoa, parametros.ladob, parametros.base)){
        if (validarMedidas(parametros.medidaA, parametros.medidaB, parametros.medidaBase)){
            const perimetro = perimetroTriangulo(parametros.ladoa, parametros.ladob, parametros.base);
    
            var p = document.getElementById('result3');
            p.innerText = "El perímetro del triángulo es " + perimetro + parametros.medidaA
        }
    }
    else {
        alert('La figura no es un triángulo Isóceles')
    }
    
}

function calcularAreaTriangulo(){
    parametros = getMedidas();
    medida = document.getElementById('medidaA')

    let altura;
    if (medida && validarMedidas(parametros.medidaA, parametros.medidaB, parametros.medidaBase)){
        if (esIsosceles(parametros.ladoa, parametros.ladob, parametros.base)){
            var baseYLado = esIsosceles(parametros.ladoa, parametros.ladob, parametros.base);
            var base = baseYLado.base;
            var lado = baseYLado.lado;
            altura = alturaIsosceles(lado, base);
            console.log('altura: ' + altura)
            const area = areaTriangulo(base, altura);
            var p = document.getElementById('result3');
            p.innerText = "El área del triángulo es " + area + parametros.medidaA + '^2'
        }
        else {
            alert('La figura no es un triánglo Isósceles')
        }
    }
    else {
        alert('Debe ingresar una unidad de medida')
    }   
}

function calcularAlturaIsosceles(){
    parametros = getMedidas();

    if (validarMedidas(parametros.medidaA, parametros.medidaB, parametros.medidaBase)){
        const baseYLado = esIsosceles(parametros.ladoa, parametros.ladob, parametros.base);
        if (baseYLado){
            const altura = alturaIsosceles(baseYLado.lado, baseYLado.base);
            var p = document.getElementById('result3');
            p.innerText = "La altura del triángulo es " + altura + parametros.medidaA
        }
        else{
            alert('No es un triángulo Isosceles')
        }
    }
}

function calcularPerimetroCirculo(){
    var input = document.getElementById('radio');
    const radio = Number(input.value);
    var input = document.getElementById('medidas');
    const medida = input.value;

    const perimetro = perimetroCirculo(radio);
    var p = document.getElementById('result1');
    p.innerText = "El perímetro del circulo es " + perimetro + medida
}

function calcularAreaCirculo(){
    var input = document.getElementById('radio');
    const radio = Number(input.value);
    var input = document.getElementById('medidas');
    const medida = input.value;

    const area = areaCirculo(radio);
    var p = document.getElementById('result1');
    p.innerText = "El área del circulo es " + area + medida + '^2'
}