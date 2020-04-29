// let nomes = ['aa','bb','cc'];
// console.log(nomes.some(nome=> nome==='aa'));

let nomes = [{ nome: 'aa', pos: 10 }, { nome: 'bb', pos: 20 }];
console.log(nomes);
console.log(nomes.every(nome => nome.pos >= 15));
 console.log(nomes.some(nome => nome.pos >= 15));