// Método Map ---------

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function map(array, callback) {

  let arrayMap = []

  for (let index = 0; index < array.length; index++) {
    let element = array[index]
    arrayMap.push(element)
    callback(element, index, array)
  }

  //sua lógica
  //
  //
  return arrayMap
}
map(arrayMap, function (element, index, array) {
  console.log(`Número ${element} no index: ${index}, veio desse array: ${array}`)
})
/* console.log(map(arrayMap, function (element, index, array) {
  `Número ${element} no index: ${index}, veio desse array: ${array}`
})) */
//console.table(map(arrayMap, callbackMap));

//Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {

  let arrayMaiorQueDois = []

  for (let i = 0; i < array.length; i++) {

    if (array[i] > 2) {
      let indice = array[i]

      arrayMaiorQueDois.push(indice)

      callback(arrayMaiorQueDois, i, array)
    }
  }
  return arrayMaiorQueDois
  //sua lógica
}

console.log(filter(arrayFilter, function (indice, i, array) {
 
}))
/* console.log(filter(arrayFilter, function (indice, i, array) {
  
})) */
//console.log(filter(arrayFilter, callbackFilter));

//Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas soma os valores, como um acumulador mesmo
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = 0) {

  let total = initialValue

  for (let i = 0; i < array.length; i++) {
    total += array[i]
    callback(total, array[i])
  }
  console.log(total)
  //sua lógica
  return total
}
reduce(arrayReduce, function (acumulator, valorAtual) {
  return acumulator + valorAtual;
})
/* console.log(reduce)) */
// console.log(reduce(arrayReduce, callbackReduce));
// console.log(reduce(arrayReduce, callbackReduce, 50));





/*
**************** TESTE(REDUCE) *****************
let array = [1, 2, 3, 4, 5, 6, 12]

let churros = array.reduce((a, b) => a + b, 0)
console.log(churros)

let arrayDois = [
  {
    numero: 12,
  },
  {
    numero: 16,
  },
  {
    numero: 1,
  },
  {
    numero: 14,
  }
]


let churosDois = arrayDois.reduce((a, b) => a + b.numero, 0)
console.log(churosDois)
**************** FIM DO TESTE (REDUCE)*****************
*/