function cadastrar(usuarios,...novos) {
    let total = [...usuarios,...novos]
    console.log(total);
}
let usuarios=['aa','bb'];

let novos = cadastrar(usuarios,'cc','dd');
