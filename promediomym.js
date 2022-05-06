//            Promedio

const lista1 = [15, 24, 28, 29, 03, 53];
const lista2 = [1, 2, 1, 1, 3, 1, 2, 3, 1, 2]

function suma (lista) {
    return lista.reduce(function (a, b){
    return Number(a) + Number(b);}
    , 0);
}

function promedio (lista){
    return suma(lista) / lista.length;
}

//          Promedio Ponderado
const notas = [
    {'nota': 9, 'credito': 2},
    {'nota': 10, 'credito': 1},
    {'nota': 7, 'credito': 5},
    {'nota': 8, 'credito': 3},
    {'nota': 10, 'credito': 3},
    {'nota': 8, 'credito': 5},
]
const suma1 = (notas.map(function(a){
    return (a.nota * a.credito)}).reduce(function(a,b){
        return a + b;
    }, 0))/ notas.length;

//           Mediana


function mediana (lista){
    const orderlist = lista.sort(function(a, b){
        return a - b;
    });
    console.log({orderlist})
    if (orderlist.length % 2 === 0){
        const num1= orderlist[(orderlist.length/2)-1]
        const num2= orderlist[orderlist.length/2]
        return promedio([num1, num2])
    }
    else if (orderlist.length === 0){
        alert('La lista se encuentra vacía')
    } else {
        return orderlist[(lista.length - 1)/2]
    }
}


//       Moda

function moda (lista) {
    const listacount = {};   //creo un objeto y le introduzco los elementos
    lista.map(function (a){
        if (listacount[a]){
            listacount[a] += 1
        } else {
            listacount[a] = 1
        }
    });
                //convierto el objeto en un array con arrays y lo ordeno
    const array = Object.entries(listacount).sort(function(a, b){
        return a[1] - b[1];
    });  
    return array[array.length - 1][0];
}