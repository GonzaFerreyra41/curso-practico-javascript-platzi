//const precio = 120;
//const descuento = 15;

function CalcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return PrecioConDescuento;
}

const  coupons = [
    "A",
    "B",
    "C"

]

function onClickPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
//    const inputDiscount = document.getElementById("InputDiscount")
//    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0] :
            descuento = 15;
        break;
        case coupons[1] :
            descuento = 30;
        break;
        case coupons[2] :
            descuento = 25; 
            break;
    }

    const PrecioConDescuento = CalcularPrecioConDescuento(priceValue, couponValue);

    const resulP = document.getElementById("resultP");
    resulP.innerText = "El precio con descuento son: $" + PrecioConDescuento;
};


//console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   PrecioConDescuento,
//   precioOriginal,
//});