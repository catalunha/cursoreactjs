// function adicionar(...num) {
//     let total = num.reduce(function (total, prox) {
//         return total + prox;
//     });
//     console.log(total);
// }
// adicionar(1, 2, 3);

// function adicionar(...num) {
//     let total = num.reduce((total, prox) => {
//         return total + prox;
//     });
//     console.log(total);
// }
// adicionar(1, 2, 3);

function adicionar(...num) {
    let total = num.reduce((total, prox) => total + prox);
    console.log(total);
}
adicionar(1, 2, 3);