const lista = [1, 2, 3];

let novaLista = lista.map(function (item, index) {
    return item + index;
});
console.log(novaLista);

let soma = lista.reduce(function (total,next) {
   return total + next; 
});
console.log(soma);

let achei = lista.find(function (item) {
   return item === 2; 
});
console.log(achei);
