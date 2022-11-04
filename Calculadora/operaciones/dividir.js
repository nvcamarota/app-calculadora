const dividir = function (numeroA, numeroB) {
    let resultado = numeroA / numeroB;
    if (numeroA === 0 || numeroB === 0) {
        return 'No se puede dividir por cero.';
    } if (!numeroA || !numeroB) {
        return 'Se requiere, al menos, dos números para poder realizar la operación.';
    } else {
        return resultado;
    }
}

module.exports = dividir;