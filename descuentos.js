//const precio = 120;
//const descuento = 15;

function CalcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return PrecioConDescuento;
}


function onClickPriceDiscount () {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value;
    
    const PrecioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);

    const resulP = document.getElementById("resultP");
    resulP.innerText = "El precio con descuento son: $" + PrecioConDescuento
};

//console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   PrecioConDescuento,
//   precioOriginal,
//});