// var nome = localStorage.setItem('letraa','aa');
// console.log(nome);
if (typeof localStorage.letra === 'undefined') {
    localStorage.letra = prompt('Digite uma letra:');
}
var nome='';
nome = localStorage.letra;

document.getElementById('nome').innerHTML = nome;