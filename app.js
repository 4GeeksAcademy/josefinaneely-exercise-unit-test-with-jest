// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}




// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs["USD"];
    const yen = euros * oneEuroIs["JPY"];
    return yen;
}

function fromYenToPound(yen) {
    const euros = yen / oneEuroIs["JPY"];
    const pounds = euros * oneEuroIs["GBP"];
    return pounds;
}


console.log(fromDollarToYen(1));  
console.log(fromDollarToYen(10)); 
console.log(fromDollarToYen(100));

console.log(fromYenToPound(1565)); 
console.log(fromYenToPound(10000)); 
console.log(fromYenToPound(50000));



module.exports = {fromEuroToDollar, 
    fromDollarToYen, fromYenToPound
}
