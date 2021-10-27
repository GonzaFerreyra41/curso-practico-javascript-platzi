// Código del cuadrado 
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm"); 

const   perimetroCuadrado = ladoCuadrado *4; 
console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm"); 

const   areaCuadrado = ladoCuadrado * ladoCuadrado; 
console.log("El área del cuadrado es: "+ areaCuadrado+ "cm^2"); 
console.groupEnd();


// Código del triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triángulo miden: "+ ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, "
    + baseTriangulo 
    + "cm"
); 

const alturaTriángulo = 5.5;
console.log("la altura del triángulo es : "+ alturaTriángulo + "cm^2"); 

const perimetroTriángulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ("El perimetro del triángulo es: " + perimetroTriángulo + "cm" );

const areaTriángulo = (baseTriangulo * alturaTriángulo) / 2;
console.log("El área del triángulo es: "+ areaTriángulo+ "cm^2"); 


console.groupEnd();

//Código del círculo
console.group("Círculo");

 


console.groupEnd();


