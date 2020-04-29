function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: 'cc',
        status: 1,
    };
    return novosDados;
}
console.log(cadastroPessoa({ nome: 'aa', snome: 'bb', anoInicio: 2021 }));
