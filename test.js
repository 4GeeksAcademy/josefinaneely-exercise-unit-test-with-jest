
let oneEuroIs = {
"JPY": 156.5, // japan yen
"USD": 1.07, // us dollar
"GBP": 0.87, // british pound
}


// Importar la función sum del archivo app.js
const {fromDollarToYen } = require('./app.js');






test("3,5 euros should be 5,95 dollars ", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});


test ("10 dollars should be closedto 1462 yens", function(){

    const{fromDollarToYen} = require('./app.js');
    const yens = Math.round(fromDollarToYen(10))
    expected = Math.round(10/oneEuroIs["USD"] * oneEuroIs["JPY"])
    expect (yens).toBeCloseTo(expected, 2)


});

test ("10000 yens should be closed to 56 yens", function(){

    const{fromYenToPound} = require('./app.js');
    const pounds = Math.round(fromYenToPound(10000))
    expected = Math.round(10000/oneEuroIs["JPY"] * oneEuroIs["GBP"])
    expect(pounds).toBeCloseTo(expected, 2)

});

