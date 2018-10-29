// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

function sacar_multiplo(valor, multiplo)
{
    resto = valor % multiplo;
    if(resto==0)
        return true;
    else
        return false;
}

for(var i=1;i<=100;i++){
    if(sacar_multiplo(i,5) && sacar_multiplo(i,3)){
        console.log(i +' ' + 'GEEKSHUBS - múltiplo de 3 y 5');
    } else {
        if(sacar_multiplo(i,3)){
            console.log(i +' ' + 'GEEKS - múltiplo de 3 solamente');
        } else {
            if(sacar_multiplo(i,5)){
                console.log(i +' ' + 'HUBS - múltiplo de 5 solamente');
            } else {
                console.log(i + ' ' + 'No es múltiplo ni de 3 ni de 5');
            }
        }
    }


}