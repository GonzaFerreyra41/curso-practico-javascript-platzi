//Helpers 
function esPar(numerito){
    return (numerito % 2 === 0); 
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }
//Calculadora de Mediana
function medianaSalarios (lista) {
    const mitad = parseInt(lista.lenght / 2);
    if (esPar(lista.lenght)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]); 
        return mediana; 
    } else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}; 

//Mediana General 
const salarioCol = colombia.map(
    function (personita) {
        return personita.salary; 
    }
);
 
const salarioColSorted = salarioCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const   medianaGeneralCol =  medianaSalarios(salarioColSorted); 

//Mediana del Top 10%
const spliceStart = (salarioColSorted * 90 ) / 100;
const spliceCount = salarioColSorted.lenght - spliceStart; 

const salariosColTop10 = salarioColSorted.splice(
    spliceStart,
    spliceCount,
);  

const   medianaTop10Col =  medianaSalarios(salariosColTop10); 

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});