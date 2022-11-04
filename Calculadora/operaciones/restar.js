const restar = function (numeroA, numeroB) {
    let resultado = numeroA - numeroB;
    if (!numeroA || !numeroB) {
        return 'Se requiere, al menos, dos números para poder realizar la operación.';
    } else {
        return resultado;
    }
}

module.exports = restar;