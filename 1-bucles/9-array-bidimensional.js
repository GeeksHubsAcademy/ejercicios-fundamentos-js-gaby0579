// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [];

function crear(filas,columnas){
    for(var i = 0; i < filas; i++) {
        matriz.push([]);
        for (var dj = 0; dj < columnas; dj++) {
            matriz[i].push([]);
        }
        for (var j = 0; j < columnas; j++) {
            matriz[i][j].push(i.toString() + j);
        }
    }
}

crear(8,4);

console.log(matriz);