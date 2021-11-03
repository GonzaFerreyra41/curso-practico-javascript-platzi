// Código del cuadrado 
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm"); 

function perimetroCuadrado(lado) {
    return lado * 4;
} 
 
//console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm"); 

function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log("El área del cuadrado es: "+ areaCuadrado+ "cm^2"); 
console.groupEnd();


// Código del triángulo
console.group("Triángulos")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log(
//  "Los lados del triángulo miden: "+ ladoTriangulo1 
//    + "cm, " 
//   + ladoTriangulo2 
//   + "cm, "
//    + baseTriangulo 
//    + "cm"
//); 
 
//const alturaTriángulo = 5.5;
//console.log("la altura del triángulo es : "+ alturaTriángulo + "cm^2"); 

function perimetroTriángulo(lado1, lado2, base) {
 return lado1 + lado2 + base;
}  
//console.log("El perimetro del triángulo es: " + perimetroTriángulo + "cm" );

//const areaTriángulo = (baseTriangulo * alturaTriángulo) / 2;

function areaTriángulo(base, altura) {
    return (base * altura) / 2;
   }  
//console.log("El área del triángulo es: "+ areaTriángulo+ "cm^2"); 


console.groupEnd();

//Código del círculo
console.group("Círculo");
//Radio
//const radioCirculo = 4; 
//console.log ("El radio del círculo es: " + radioCirculo + "cm" );

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log ("PI es: " + PI);

//Circunferencia 
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); 
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


//Aquí interactuamos con HTML:
function calculcarPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}