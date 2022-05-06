function precioConDescuento(precio, descuento){
    return ((precio * (100 - descuento))/100)
}

//              Cupones!!!
const cupones = [
    {nombre:"Cuponcito", descuento: 15},
    {nombre:"Super-cupón", descuento: 25},
    {nombre:"No le digas a nadie", descuento: 30}
]

function calcularPrecioConDescuento(){
    const inputPrice = document.getElementById('inputprice');
    const price = Number(inputPrice.value);

    const inputCoupon = document.getElementById('Cupones');
    const couponName = inputCoupon.value;
    var cupon= cupones.find(function(coupon){
        return coupon.nombre === couponName
    });

    let precioFinal

    if (!cupon){
        alert('No tiene un cupón de descuento válido')
    }
    else{
        precioFinal= precioConDescuento(price, cupon.descuento);
        const resultP = document.getElementById('ResultP');
        resultP.innerText = "El precio final del producto es $" + precioFinal;
    }
}
