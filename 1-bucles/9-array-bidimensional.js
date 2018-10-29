
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [];

for (i = 0; i <= 10; i++) {
        matriz.push([i]);
    }


for (a = 0; a <=10; a++) {
    console.log(matriz);
}

for (var i in matriz) {
    for (var j in matriz[i]) {
        console.log(matriz[i][j]);
    }
}